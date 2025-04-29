import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.SONIC);
  console.table(tokens.getAllAaveTokens());
}

main();
