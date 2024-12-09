import { FactorTokenlist, Protocols } from '../../src';
import { ChainId } from '@factordao/sdk';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(
    tokens.getDebtToken(
      '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      Protocols.AAVE,
    ),
  );
}

main();
