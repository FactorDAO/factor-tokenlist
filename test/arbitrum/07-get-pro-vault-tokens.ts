import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  await tokens.initializeProVaultsTokens();
  console.table(tokens.getAllProVaultsTokens());
}

main();
