import { ChainId, FactorTokenlist } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getAllGeneralTokens());
}

main();
