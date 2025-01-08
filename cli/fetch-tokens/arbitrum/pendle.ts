import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/arbitrum.pendle';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';

async function main() {
  const endpoint =
    'https://api-v2.pendle.finance/bff/v1/42161/markets?limit=100';
  const response = await fetch(endpoint);
  const data = await response.json();
  const pendleTokens = data.results;
  const tokenList = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  for (const token of pendleTokens) {
    try {
      const checkToken = tokenList.getToken(token.address);
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.symbol);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      tokens.push({
        chainId: ChainId.ARBITRUM_ONE,
        expiry: token.expiry,
        address: token.address,
        symbol: token.pt.symbol,
        pt: {
          address: token.pt.address,
          symbol: token.pt.symbol,
          name: token.pt.name,
          decimals: token.pt.decimals,
        },
        yt: {
          address: token.yt.address,
          symbol: token.yt.symbol,
          name: token.yt.name,
          decimals: token.yt.decimals,
        },
        lp: {
          address: token.lp.address,
          symbol: token.lp.symbol,
          name: token.lp.name,
          decimals: token.lp.decimals,
        },
        underlyingAsset: {
          address: token.underlyingAsset.address,
          symbol: token.underlyingAsset.symbol,
          name: token.underlyingAsset.name,
          decimals: token.underlyingAsset.decimals,
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
    "import { Token, Protocols, BuildingBlock } from '../types';",
    "import { Token, Protocols, BuildingBlock, ExtendedPendleToken } from '../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/arbitrum.pendle.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
