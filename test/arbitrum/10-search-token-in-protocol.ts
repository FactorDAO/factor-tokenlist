import { AaveDebtToken, ChainId, FactorTokenlist, Protocols } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  const toSearch = '0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351';
  const tokensForProtocol = tokens.getTokensByProtocol(
    Protocols.AAVE,
  ) as AaveDebtToken[];
  const token = tokensForProtocol.find(
    (token) => token.variableDebtToken.toLowerCase() === toSearch.toLowerCase(),
  );
  console.log(token);
}

main();
