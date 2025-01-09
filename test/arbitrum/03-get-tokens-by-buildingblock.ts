import { FactorTokenlist, ChainId, BuildingBlock } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.table(tokens.getTokensByBuildingBlock(BuildingBlock.LEND));
  console.log(tokens.protocols);
}

main();
