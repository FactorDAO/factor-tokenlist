import { FactorTokenlist, Protocols } from '../../src';
import { ChainId } from '@factordao/sdk';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(
    tokens.getDebtToken(
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      Protocols.AAVE,
    ),
  );
  console.table(
    tokens.getDebtToken(
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      Protocols.COMPOUND,
    ),
  );
}

main();
