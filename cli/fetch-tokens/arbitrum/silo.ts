import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/arbitrum/silo';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
const dotenv = fs.readFileSync('./cli/.env').toString().split('\n');
let theGraphApiKey: string | undefined;
for (const env of dotenv) {
  if (env.includes('THEGRAPH_API_KEY')) {
    theGraphApiKey = env.split('=')[1];
  }
}
if (!theGraphApiKey) {
  throw new Error('THEGRAPH_API_KEY not found');
}

async function main() {
  const endpoint = `https://gateway.thegraph.com/api/${theGraphApiKey}/subgraphs/id/2ufoztRpybsgogPVW6j9NTn1JmBWFYPKbP7pAabizADU`;
  const query = `
    {
      markets {
        name
        silo {
          id
          isActive
          version
        }
        inputToken {
          name
          symbol
          totalSupply
          decimals  
          id
        }
        dToken {
          id
          name
          symbol
          decimals
        }
        sToken {
          id
          name
          symbol
          decimals
        }
        spToken {
          id
          name
          symbol
          decimals
        }
      }
    }
  `;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  const siloTokens = data.data.markets;
  const tokenList = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  for (const token of siloTokens) {
    try {
      const checkToken = tokenList.getSiloToken(token.silo.id);
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.marketName);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      tokens.push({
        marketName: token.name,
        marketAddress: token.silo.id,
        protocols: [Protocols.SILO],
        buildingBlocks: [
          BuildingBlock.LEND,
          BuildingBlock.BORROW,
          BuildingBlock.WITHDRAW,
          BuildingBlock.REPAY,
        ],
        asset: [
          {
            underlyingAsset: {
              address: token.inputToken.id,
              name: token.inputToken.name,
              symbol: token.inputToken.symbol,
              decimals: token.inputToken.decimals,
            },
            debtToken: {
              address: token.dToken.id,
              name: token.dToken.name,
              symbol: token.dToken.symbol,
              decimals: token.dToken.decimals,
            },
            collateralToken: {
              address: token.sToken.id,
              name: token.sToken.name,
              symbol: token.sToken.symbol,
              decimals: token.sToken.decimals,
            },
            collateralOnlyToken: {
              address: token.spToken.id,
              name: token.spToken.name,
              symbol: token.spToken.symbol,
              decimals: token.spToken.decimals,
            },
          },
        ],
      });
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
  fs.writeFileSync('./src/chains/arbitrum/silo.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
