import { FactorTokenlist, ChainId, Protocols } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ETHEREUM);
  const usdc = tokens.getTokenFromSymbol('USDC');
  console.table(usdc);
  const weth = tokens.getTokenFromSymbol('WETH');
  console.table(weth);
  const wbtc = tokens.getTokenFromSymbol('WBTC');
  console.table(wbtc);
  console.log('-----------------');
  const wethAave = tokens.getDebtToken(weth.address, Protocols.AAVE);
  console.table(wethAave);
  const usdcAave = tokens.getDebtToken(usdc.address, Protocols.AAVE);
  console.table(usdcAave);
  const wbtcAave = tokens.getDebtToken(wbtc.address, Protocols.AAVE);
  console.table(wbtcAave);
}

main();
