import { FactorTokenlist, ChainId, Protocols } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ETHEREUM);
  const compoundTokens = tokens.getTokensByProtocol(Protocols.COMPOUND);
  console.log('Compound tokens:', compoundTokens.length);
  console.table(compoundTokens);
}

main();
