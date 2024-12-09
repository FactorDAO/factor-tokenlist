import { FactorTokenlist } from '../../src';
import { ChainId } from '@factordao/sdk';
import { BuildingBlock } from '@factordao/sdk-studio';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getTokensByBuildingBlock(BuildingBlock.LEND));
  console.log(tokens.protocols);
}

main();
