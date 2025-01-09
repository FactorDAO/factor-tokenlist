import { exec } from 'child_process';
import { tokens } from '../../../src/chains/arbitrum/general';
import fs from 'fs';
import { Protocols, BuildingBlock } from '../../../src/types';
import { compileFile } from '../../utils/format-file';

async function main() {
  // IMPORTANT /////////////////////////////////////////////////////////////////
  // Change this parameters to update the tokens in batch
  const chain = 'arbitrum';
  const tokenAddress: any[] = [];
  const newProtocol = '';
  const newBuildingBlocks = [];
  //////////////////////////////////////////////////////////////////////////////

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
  const rawFile = compileFile(entireList);
  // Save the file
  fs.writeFileSync(`./src/chains/${chain}/general.ts`, rawFile);
  exec('yarn format');
  if (updated) {
    console.log('🔥 Done!');
  } else {
    console.log('🚨 Token not found!');
  }
}

main();
