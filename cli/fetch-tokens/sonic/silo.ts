import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
  ExtendedSiloToken,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/sonic/silo';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';

async function main() {
  const siloTokens = JSON.parse(
    fs.readFileSync('./cli/fetch-tokens/sonic/silo/tokens-050825.json', 'utf8'),
  );
  const tokenList = new FactorTokenlist(ChainId.SONIC);

  for (const token of siloTokens) {
    try {
      const existingToken = tokens.find(
        (t) =>
          t.marketAddress.toLowerCase() === token.configAddress.toLowerCase(),
      );
      if (existingToken) {
        console.log('🤌 Token already exists:', existingToken.marketName);
        continue;
      }

      const siloToken: ExtendedSiloToken = {
        marketName: `${token.silo0.symbol}/${token.silo1.symbol}`,
        marketAddress: token.configAddress as `0x${string}`,
        asset: [
          {
            underlyingAsset: {
              address: token.silo0.tokenAddress as `0x${string}`,
              symbol: token.silo0.symbol,
              name: token.silo0.name,
              decimals: token.silo0.decimals,
            },
            debtToken: {
              address: token.silo1.tokenAddress as `0x${string}`,
              symbol: token.silo1.symbol,
              name: token.silo1.name,
              decimals: token.silo1.decimals,
            },
            collateralToken: {
              address: token.silo0.tokenAddress as `0x${string}`,
              symbol: token.silo0.symbol,
              name: token.silo0.name,
              decimals: token.silo0.decimals,
            },
            collateralOnlyToken: {
              address: token.silo0.tokenAddress as `0x${string}`,
              symbol: token.silo0.symbol,
              name: token.silo0.name,
              decimals: token.silo0.decimals,
            },
          },
        ],
        protocols: [Protocols.SILO],
        buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
      };

      tokens.push(siloToken);
      console.log('✅ Added token:', siloToken.marketName);
    } catch (e: any) {
      console.log('👀 Error:', e.message);
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: ExtendedSiloToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { Token, Protocols, BuildingBlock, ExtendedSiloToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/sonic/silo.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
