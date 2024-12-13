import { ChainId } from '../../../src';
import { FactorTokenlist, Protocols } from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/arbitrum.pendle';
import fs from 'fs';
import { BuildingBlock } from '../../../src';
import { compileFile } from '../../utils/format-file';

async function main() {
  // TODO: Fetch tokens from silo
  console.log('Not implemented yet.');
  process.exit(0);

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: ExtendedPendleToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols } from '../types';",
    "import { ExtendedPendleToken, Protocols } from '../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/arbitrum.pendle.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
