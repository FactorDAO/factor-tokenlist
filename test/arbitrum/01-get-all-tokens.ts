import { FactorTokenlist } from '../../src';
import { ChainId } from '@factordao/sdk';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getAllTokens());
}

main();
