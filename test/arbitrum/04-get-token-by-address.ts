import { FactorTokenlist, ChainId } from '../../src';

async function main() {
  const tokens = new FactorTokenlist(ChainId.ARBITRUM_ONE);
  console.log(tokens.getToken('0x2416092f143378750bb29b79ed961ab195cceea5'));
}

main();
