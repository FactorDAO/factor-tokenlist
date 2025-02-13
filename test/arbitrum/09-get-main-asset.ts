import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);

  const mainAsset = tokens.getMainAsset(
    '0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351',
  );
  console.log(mainAsset);
}

main();
