import { FactorTokenlist, Protocols, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getAllBalancerTokens());
}

main();
