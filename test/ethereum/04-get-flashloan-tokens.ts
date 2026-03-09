import { FactorTokenlist, ChainId, BuildingBlock } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ETHEREUM);
  console.log('==== FLASHLOAN ====');
  console.table(tokens.getTokensByBuildingBlock(BuildingBlock.FLASHLOAN));
}

main();
