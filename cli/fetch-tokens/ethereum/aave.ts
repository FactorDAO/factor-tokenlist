import {
  FactorTokenlist,
  ChainId,
  Protocols,
  BuildingBlock,
  AaveToken,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/ethereum/aave';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { createPublicClient, http, erc20Abi } from 'viem';
import { mainnet } from 'viem/chains';
import { aaveAbi } from '../../utils/aaveAbi';

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

/**
 * AAVE TOKEN LIST CAN BE FOUND HERE:
 * https://etherscan.io/address/0x0a16f2FCC0D44FaE41cc54e079281D84A363bECD#readContract
 * By calling: getAllReservesTokens() to get all tokens
 * then calling one by one:
 * getReserveTokensAddresses(address) to get the aToken and variableDebtToken
 */

type AaveOnchainToken = {
  symbol: string;
  tokenAddress: `0x${string}`;
};
const AaveProtocolDataProvider = '0x0a16f2FCC0D44FaE41cc54e079281D84A363bECD';

async function main() {
  const tokenList = new FactorTokenlist(ChainId.ETHEREUM);
  const client = createPublicClient({
    chain: mainnet,
    transport: http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`),
  });
  const aaveTokens = (await client.readContract({
    address: AaveProtocolDataProvider,
    abi: aaveAbi,
    functionName: 'getAllReservesTokens',
  })) as AaveOnchainToken[];

  console.log(aaveTokens);

  for (const token of aaveTokens) {
    try {
      const checkToken = tokenList.getDebtToken(
        token.tokenAddress,
        Protocols.AAVE,
      ) as any as AaveToken;
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.symbol);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      const reserveTokensAddresses = (await client.readContract({
        address: AaveProtocolDataProvider,
        abi: aaveAbi,
        functionName: 'getReserveTokensAddresses',
        args: [token.tokenAddress],
      })) as any;
      console.log('👀 reserveTokensAddresses', reserveTokensAddresses);
      const aTokenDecimals = await client.readContract({
        address: reserveTokensAddresses[0],
        abi: erc20Abi,
        functionName: 'decimals',
      });
      console.log('👀 aTokenDecimals', aTokenDecimals);
      const aTokenSymbol = await client.readContract({
        address: reserveTokensAddresses[0],
        abi: erc20Abi,
        functionName: 'symbol',
      });
      console.log('👀 aTokenSymbol', aTokenSymbol);
      tokens.push({
        aToken: reserveTokensAddresses[0],
        variableDebtToken: reserveTokensAddresses[2],
        symbol: aTokenSymbol,
        decimals: aTokenDecimals,
        underlyingAddress: token.tokenAddress,
        underlyingSymbol: token.symbol,
        protocols: [Protocols.AAVE],
        buildingBlocks: [
          BuildingBlock.LEND,
          BuildingBlock.BORROW,
          BuildingBlock.WITHDRAW,
          BuildingBlock.REPAY,
        ],
      });
      console.log('🔥 Pushing token:', aTokenSymbol);
    }
  }

  const entireList = tokens.map((token) => {
    return JSON.stringify(token);
  });
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: AaveToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { AaveToken, BuildingBlock, Protocols } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/ethereum/aave.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
