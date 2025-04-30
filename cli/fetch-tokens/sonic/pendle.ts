import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/sonic/pendle';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { ERC20Helper } from '../../utils/erc20-helper';
const dotenv = fs.readFileSync('./cli/.env').toString().split('\n');
let alchemyApiKey: string | undefined;
for (const env of dotenv) {
  if (env.includes('ALCHEMY_API_KEY')) {
    alchemyApiKey = env.split('=')[1];
  }
}

async function main() {
  if (!alchemyApiKey) {
    throw new Error('ALCHEMY_API_KEY not found');
  }
  const endpoint =
    'https://api-v2.pendle.finance/core/v1/146/markets/active?limit=100';
  const response = await fetch(endpoint);
  const data = await response.json();
  const pendleTokens = data.markets;
  const tokenList = new FactorTokenlist(ChainId.SONIC);
  for (const token of pendleTokens) {
    try {
      const checkToken = tokenList.getToken(token.address);
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.symbol);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      const erc20Helper = new ERC20Helper(ChainId.SONIC, alchemyApiKey);
      const tokenMetadata = await erc20Helper.getTokenMetadata(
        token.address.replace(ChainId.SONIC + '-', ''),
      );
      const ptTokenMetadata = await erc20Helper.getTokenMetadata(
        token.pt.replace(ChainId.SONIC + '-', ''),
      );
      const ytTokenMetadata = await erc20Helper.getTokenMetadata(
        token.yt.replace(ChainId.SONIC + '-', ''),
      );
      const underlyingAssetTokenMetadata = await erc20Helper.getTokenMetadata(
        token.underlyingAsset.replace(ChainId.SONIC + '-', ''),
      );
      tokens.push({
        chainId: ChainId.SONIC,
        expiry: token.expiry,
        address: token.address,
        symbol: tokenMetadata.symbol,
        pt: {
          address: ptTokenMetadata.address,
          symbol: ptTokenMetadata.symbol,
          name: ptTokenMetadata.name,
          decimals: ptTokenMetadata.decimals,
        },
        yt: {
          address: ytTokenMetadata.address,
          symbol: ytTokenMetadata.symbol,
          name: ytTokenMetadata.name,
          decimals: ytTokenMetadata.decimals,
        },
        lp: {
          address: tokenMetadata.address,
          symbol: tokenMetadata.symbol,
          name: tokenMetadata.name,
          decimals: tokenMetadata.decimals,
        },
        underlyingAsset: {
          address: underlyingAssetTokenMetadata.address,
          symbol: underlyingAssetTokenMetadata.symbol,
          name: underlyingAssetTokenMetadata.name,
          decimals: underlyingAssetTokenMetadata.decimals,
        },
        protocols: [Protocols.PENDLE],
        buildingBlocks: [
          BuildingBlock.PROVIDE_LIQUIDITY,
          BuildingBlock.REMOVE_LIQUIDITY,
        ],
      });
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: ExtendedPendleToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { Token, Protocols, BuildingBlock, ExtendedPendleToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/sonic/pendle.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
