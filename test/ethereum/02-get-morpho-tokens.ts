import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ETHEREUM);
  console.table(tokens.getAllMorphoTokens());
}

main();
