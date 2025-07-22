import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.BASE);
  console.table(tokens.getAllGeneralTokens());
}

main();
