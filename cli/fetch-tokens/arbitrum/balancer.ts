import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/arbitrum/balancer';
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
  const endpoint = `https://gateway-arbitrum.network.thegraph.com/api/${theGraphApiKey}/subgraphs/id/98cQDy6tufTJtshDCuhh9z2kWXsQWBHVh2bqnLHsGAeS`;
  const query = `
    {
     poolTokens {
      symbol
      address
      decimals
      name
    }
    }
  `;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  const balancerTokens = data.data.poolTokens;
  const tokenList = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  for (const token of balancerTokens) {
    console.log(token);
    try {
      const checkToken = tokenList.getBalancerToken(token.address);
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.symbol);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      tokens.push({
        address: token.address,
        symbol: token.symbol,
        name: token.name,
        decimals: token.decimals,
        protocols: [Protocols.BALANCER],
        buildingBlocks: [BuildingBlock.FLASHLOAN],
      });
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: BalancerToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { Token, Protocols, BuildingBlock, BalancerToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/arbitrum/balancer.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
