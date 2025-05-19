import { FactorTokenlist, ChainId, Protocols } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.BASE);
  const usdc = tokens.getTokenFromSymbol('USDC');
  console.table(usdc);
  const weth = tokens.getTokenFromSymbol('WETH');
  console.table(weth);
  const cbbtc = tokens.getTokenFromSymbol('cbBTC');
  console.table(cbbtc);
  console.log('-----------------');
  const wethAave = tokens.getDebtToken(weth.address, Protocols.AAVE);
  console.table(wethAave);
  const usdcAave = tokens.getDebtToken(usdc.address, Protocols.AAVE);
  console.table(usdcAave);
  const cbbtcAave = tokens.getDebtToken(cbbtc.address, Protocols.AAVE);
  console.table(cbbtcAave);
}

main();
