import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  // aArbWETH
  const aaveUnderlyingAsset = tokens.getUnderlyingAsset(
    '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
  );
  console.log(aaveUnderlyingAsset);
  console.log('=======================================');
  // cUSDCv3
  const compoundUnderlyingAsset = tokens.getUnderlyingAsset(
    '0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf',
  );
  console.log(compoundUnderlyingAsset);
  console.log('=======================================');
  // PT-wstETH-26JUN2025
  const pendleUnderlyingAsset = tokens.getUnderlyingAsset(
    '0x08a152834de126d2ef83d612ff36e4523fd0017f',
  );
  console.log(pendleUnderlyingAsset);
}

main();
