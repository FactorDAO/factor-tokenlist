import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ROBINHOOD);
  const all = tokens.getAllGeneralTokens();
  console.table(
    all.map((t) => ({
      symbol: t.symbol,
      address: t.address,
      decimals: t.decimals,
      protocols: t.protocols.join(','),
    })),
  );
  console.log('count', all.length);
  if (all.length < 18) {
    throw new Error(`expected >= 18 RHC tokens, got ${all.length}`);
  }
  const usdg = tokens.getTokenFromSymbol('USDG');
  const nvda = tokens.getTokenFromSymbol('NVDA');
  const steak = tokens.getTokenFromSymbol('steakUSDG');
  console.log('USDG', usdg.address);
  console.log('NVDA', nvda.address);
  console.log('steakUSDG', steak.address);
}

main();
