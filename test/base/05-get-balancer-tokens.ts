import {
  FactorTokenlist,
  ChainId,
  BuildingBlock,
  BalancerToken,
  Protocols,
} from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.BASE);
  const balancerTokens = tokens.getTokensByProtocol(Protocols.BALANCER); // 27 tokens on base

  const missingTokens = [] as BalancerToken[];
  for (const _t of balancerTokens) {
    const t = _t as BalancerToken;
    try {
      const token = tokens.getToken(t.address);
      console.log(token);
    } catch (_error) {
      missingTokens.push(t);
    }
  }
  if (missingTokens.length > 0) {
    console.log('Missing tokens', missingTokens);
  } else {
    console.log('All tokens are found');
  }
}

main();
