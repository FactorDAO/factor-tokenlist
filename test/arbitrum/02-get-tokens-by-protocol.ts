import { FactorTokenlist, Protocols } from '../../src';
import { ChainId } from '@factordao/sdk';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getTokensByProtocol(Protocols.OPENOCEAN));
}

main();
