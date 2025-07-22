import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/arbitrum/euler';
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
  const endpoint = `https://api.goldsky.com/api/public/project_cm4iagnemt1wp01xn4gh1agft/subgraphs/euler-v2-arbitrum/latest/gn`;
  const query = `
    {
      eulerVaults {
        id
        dToken
        decimals
        oracle
        name
        asset
        feeReceiver
        evc
      }
    }
  `;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  const eulerTokens = data.data.eulerVaults;
  const tokenList = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  for (const token of eulerTokens) {
    console.log(token);
    try {
      const checkToken = tokenList.getEulerToken(token.id);
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.symbol);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      tokens.push({
        address: token.id,
        dToken: token.dToken,
        oracle: token.oracle,
        asset: token.asset,
        evc: token.evc,
        symbol: token.name,
        name: token.name,
        decimals: parseInt(token.decimals),
        protocols: [Protocols.EULER],
        buildingBlocks: [
          BuildingBlock.BORROW,
          BuildingBlock.REPAY,
          BuildingBlock.LEND,
          BuildingBlock.WITHDRAW,
        ],
      });
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: EulerToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { Token, Protocols, BuildingBlock, EulerToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/arbitrum/euler.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
