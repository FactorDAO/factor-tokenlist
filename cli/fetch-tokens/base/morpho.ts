import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/base/morpho';
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
  const endpoint = `https://blue-api.morpho.org/graphql`;
  const query = `
    query {
      markets(where:{whitelisted: true}, first: 1000) {
        items {
          whitelisted
          uniqueKey
          loanAsset {
            address
            symbol
            decimals
            name
          }
          collateralAsset {
            address
            symbol
            decimals
            name
          }
          state {
            borrowApy
            borrowAssets
            borrowAssetsUsd
            supplyApy
            supplyAssets
            supplyAssetsUsd
            fee
            utilization
          }
          morphoBlue {
            id
            chain {
              network
              id
              currency
            }
            address
          }
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
  const morphoTokens = data.data.markets.items;
  const tokenList = new FactorTokenlist(ChainId.BASE);
  for (const token of morphoTokens) {
    if (token.morphoBlue.chain.network === 'base') {
      if (token.collateralAsset !== null && token.loanAsset !== null) {
        try {
          const checkToken = tokenList.getMorphoToken(token.uniqueKey);
          if (checkToken) {
            console.log('🤌 Token already exists:', checkToken.id);
          }
        } catch (e: any) {
          console.log('👀 Error:', e.message);
          tokens.push({
            name: token.collateralAsset.symbol + ' / ' + token.loanAsset.symbol,
            id: token.uniqueKey,
            loanAsset: {
              address: token.loanAsset.address,
              symbol: token.loanAsset.symbol,
              decimals: token.loanAsset.decimals,
              name: token.loanAsset.name,
            },
            collateralAsset: {
              address: token.collateralAsset.address,
              symbol: token.collateralAsset.symbol,
              decimals: token.collateralAsset.decimals,
              name: token.collateralAsset.name,
            },
            protocols: [Protocols.MORPHO],
            buildingBlocks: [
              BuildingBlock.LEND,
              BuildingBlock.BORROW,
              BuildingBlock.WITHDRAW,
              BuildingBlock.REPAY,
            ],
          });
        }
      } else {
        console.log(
          '👀 Token without collateral or loan asset:',
          token.uniqueKey,
        );
      }
    } else {
      console.log('👀 Token is not on base:', token.uniqueKey);
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: MorphoToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { Token, Protocols, BuildingBlock, MorphoToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/base/morpho.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
