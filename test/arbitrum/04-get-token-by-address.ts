import { FactorTokenlist } from '../../src';
import { ChainId } from '@factordao/sdk';
import { BuildingBlock } from '@factordao/sdk-studio';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.log(tokens.getToken('0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f'));
}

main();
