import { ChainId, FactorTokenlist, Protocols } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  for (const protocol of Object.values(Protocols)) {
    console.log(protocol);
    console.table(tokens.getTokensByProtocol(protocol));
  }
}

main();
