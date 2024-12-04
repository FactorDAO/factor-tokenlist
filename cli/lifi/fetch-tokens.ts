import { ChainId } from '@factordao/sdk';
import { FactorTokenlist, Protocols } from '../../src';
import { exec } from 'child_process';
import { tokens } from '../../src/chains/arbitrum';
import fs from 'fs';
import { BuildingBlock } from '@factordao/sdk-studio';

async function main() {
  const endpoint = 'https://li.quest/v1/tokens?chains=ARB';
  const response = await fetch(endpoint);
  const data = await response.json();
  const lifiTokens = data.tokens['42161'];
  const tokenList = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  for (const token of lifiTokens) {
    try {
      tokenList.getToken(token.address);
    } catch (e: any) {
      console.log(e.message);
      tokens.push({
        address: token.address,
        symbol: token.symbol,
        name: token.name,
        decimals: token.decimals,
        protocols: [Protocols.UNISWAP, Protocols.OPENOCEAN],
        buildingBlocks: [
          BuildingBlock.DEPOSIT,
          BuildingBlock.WITHDRAW,
          BuildingBlock.SWAP,
          BuildingBlock.CREATE_LP,
          BuildingBlock.PROVIDE_LIQUIDITY,
        ],
      });
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = `
import { BuildingBlock } from '@factordao/sdk-studio';
import { Token, Protocols } from '../types';

export const tokens: Token[] = [${entireList}]
`;
  // Fixing Building Blocks
  rawFile = rawFile.replace(/"SWAP"/g, 'BuildingBlock.SWAP');
  rawFile = rawFile.replace(/"WITHDRAW"/g, 'BuildingBlock.WITHDRAW');
  rawFile = rawFile.replace(/"LEND"/g, 'BuildingBlock.LEND');
  rawFile = rawFile.replace(/"REPAY"/g, 'BuildingBlock.REPAY');
  rawFile = rawFile.replace(/"BORROW"/g, 'BuildingBlock.BORROW');
  rawFile = rawFile.replace(/"DEPOSIT"/g, 'BuildingBlock.DEPOSIT');
  rawFile = rawFile.replace(/"CREATE_LP"/g, 'BuildingBlock.CREATE_LP');
  rawFile = rawFile.replace(
    /"PROVIDE_LIQUIDITY"/g,
    'BuildingBlock.PROVIDE_LIQUIDITY',
  );

  // Fixing Protocols
  rawFile = rawFile.replace(/"OPENOCEAN"/g, 'Protocols.OPENOCEAN');
  rawFile = rawFile.replace(/"UNISWAP"/g, 'Protocols.UNISWAP');
  rawFile = rawFile.replace(/"AAVE"/g, 'Protocols.AAVE');
  rawFile = rawFile.replace(/"COMPOUND"/g, 'Protocols.COMPOUND');
  rawFile = rawFile.replace(/"PENDLE"/g, 'Protocols.PENDLE');
  // Save the file
  fs.writeFileSync('./src/chains/arbitrum.ts', rawFile);
  exec('yarn format');
  console.log('Now tokens are:', tokens.length);
}

main();
