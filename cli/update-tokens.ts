import { exec } from 'child_process';
import { tokens } from '../src/chains/arbitrum';
import fs from 'fs';
import { Protocols } from '../src/types';
import { BuildingBlock } from '@factordao/sdk-studio';

async function main() {
  const tokenAddress: any[] = [];
  const newProtocol = '';
  const newBuildingBlocks = [BuildingBlock.DEPOSIT, BuildingBlock.WITHDRAW];
  let updated = false;
  const fixedList = tokens.map((token) => {
    let update = true;
    if (tokenAddress.length > 0) {
      update = tokenAddress.includes(token.address);
    }
    if (update) {
      console.log(`✅ Updating ${token.symbol}: ${token.address}`);
      if (newProtocol.length > 0) {
        token.protocols.push(newProtocol as Protocols);
        token.protocols = [...new Set(token.protocols)];
      }
      if (newBuildingBlocks.length > 0) {
        token.buildingBlocks.push(...newBuildingBlocks);
        token.buildingBlocks = [...new Set(token.buildingBlocks)];
      }
      updated = true;
    } else {
      console.log(`❌ Skipping ${token.symbol}: ${token.address}`);
    }
    return token;
  });
  const sortedTokens = fixedList.sort((a, b) =>
    a.symbol.localeCompare(b.symbol),
  );
  const entireList = sortedTokens.map((token) => JSON.stringify(token));

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
  if (updated) {
    console.log('🔥 Done!');
  } else {
    console.log('🚨 Token not found!');
  }
}

main();
