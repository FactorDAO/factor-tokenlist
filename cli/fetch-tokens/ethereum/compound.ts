import { BuildingBlock, CompoundToken, Protocols } from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/ethereum/compound';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { createPublicClient, http, erc20Abi } from 'viem';
import { mainnet } from 'viem/chains';

const dotenv = fs.readFileSync('./cli/.env').toString().split('\n');
let alchemyApiKey: string | undefined;
for (const env of dotenv) {
  if (env.includes('ALCHEMY_API_KEY')) {
    alchemyApiKey = env.split('=')[1];
  }
}
if (!alchemyApiKey) {
  throw new Error('ALCHEMY_API_KEY not found in cli/.env');
}

const cometAbi = [
  { type: 'function', name: 'numAssets', inputs: [], outputs: [{ type: 'uint8' }], stateMutability: 'view' },
  { type: 'function', name: 'getAssetInfo', inputs: [{ type: 'uint8', name: 'i' }], outputs: [{ type: 'tuple', components: [{ type: 'uint8', name: 'offset' }, { type: 'address', name: 'asset' }, { type: 'address', name: 'priceFeed' }, { type: 'uint64', name: 'scale' }, { type: 'uint64', name: 'borrowCollateralFactor' }, { type: 'uint64', name: 'liquidateCollateralFactor' }, { type: 'uint64', name: 'liquidationFactor' }, { type: 'uint128', name: 'supplyCap' }] }], stateMutability: 'view' },
  { type: 'function', name: 'baseToken', inputs: [], outputs: [{ type: 'address' }], stateMutability: 'view' },
  { type: 'function', name: 'decimals', inputs: [], outputs: [{ type: 'uint8' }], stateMutability: 'view' },
] as const;

// Ethereum Compound V3 markets
const MARKETS = [
  { address: '0xc3d688B66703497DAA19211EEdff47f25384cdc3' as `0x${string}`, symbol: 'cUSDCv3' },
  { address: '0xA17581A9E3356d9A858b789D68B4d866e593aE94' as `0x${string}`, symbol: 'cWETHv3' },
];

async function main() {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`),
  });

  for (const market of MARKETS) {
    console.log(`\n📦 Fetching ${market.symbol} (${market.address})...`);

    const numAssets = (await client.readContract({ address: market.address, abi: cometAbi, functionName: 'numAssets' })) as number;
    const baseToken = (await client.readContract({ address: market.address, abi: cometAbi, functionName: 'baseToken' })) as `0x${string}`;
    const decimals = (await client.readContract({ address: market.address, abi: cometAbi, functionName: 'decimals' })) as number;
    const baseSymbol = (await client.readContract({ address: baseToken, abi: erc20Abi, functionName: 'symbol' })) as string;

    console.log(`  Base token: ${baseSymbol} (${baseToken}), decimals: ${decimals}`);
    console.log(`  Collateral assets: ${numAssets}`);

    const collateralTokens: { address: `0x${string}`; name: string; symbol: string; decimals: number }[] = [];

    for (let i = 0; i < numAssets; i++) {
      const assetInfo = (await client.readContract({
        address: market.address,
        abi: cometAbi,
        functionName: 'getAssetInfo',
        args: [i],
      })) as any;

      const assetAddress = assetInfo.asset as `0x${string}`;
      const [assetSymbol, assetName, assetDecimals] = await Promise.all([
        client.readContract({ address: assetAddress, abi: erc20Abi, functionName: 'symbol' }),
        client.readContract({ address: assetAddress, abi: erc20Abi, functionName: 'name' }),
        client.readContract({ address: assetAddress, abi: erc20Abi, functionName: 'decimals' }),
      ]);

      console.log(`  [${i}] ${assetSymbol} (${assetAddress}) - ${assetName}, ${assetDecimals} decimals`);

      collateralTokens.push({
        address: assetAddress,
        name: assetName as string,
        symbol: assetSymbol as string,
        decimals: assetDecimals as number,
      });
    }

    tokens.push({
      baseAssetAddress: market.address,
      symbol: market.symbol,
      decimals: decimals,
      underlyingAddress: baseToken,
      underlyingSymbol: baseSymbol,
      protocols: [Protocols.COMPOUND],
      buildingBlocks: [
        BuildingBlock.BORROW,
        BuildingBlock.REPAY,
        BuildingBlock.LEND,
        BuildingBlock.WITHDRAW,
        BuildingBlock.CLAIM_REWARDS,
      ],
      collateralTokens,
    });
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: CompoundToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { BuildingBlock, CompoundToken, Protocols } from '../../types';",
  );
  fs.writeFileSync('./src/chains/ethereum/compound.ts', rawFile);
  exec('yarn format');
  console.log(`\n🎉 Now tokens are: ${tokens.length}`);
}

main();
