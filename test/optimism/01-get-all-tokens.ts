import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.OPTIMISM);
  console.table(tokens.getAllGeneralTokens());
}

main();
