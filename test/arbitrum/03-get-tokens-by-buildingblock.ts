import { FactorTokenlist, ChainId, BuildingBlock } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.log('==== LEND ====');
  console.table(tokens.getTokensByBuildingBlock(BuildingBlock.LEND));
  console.log('==== BORROW ====');
  console.table(tokens.getTokensByBuildingBlock(BuildingBlock.BORROW));
}

main();
