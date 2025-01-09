import { ChainId, FactorTokenlist, Protocols } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getTokensByProtocol(Protocols.SILO));
}

main();
