import { tokens as arbitrum } from '../src/chains/arbitrum/general';
import { tokens as arbitrumPendle } from '../src/chains/arbitrum/pendle';
import { tokens as arbitrumAaveDebt } from '../src/chains/arbitrum/aave';
import { tokens as arbitrumCompoundDebt } from '../src/chains/arbitrum/compound';
import { tokens as arbitrumSilo } from '../src/chains/arbitrum/silo';
import { tokens as optimism } from '../src/chains/optimism/general';
import { tokens as base } from '../src/chains/base/general';

console.log('=== ARBITRUM ===');
console.log('General:', arbitrum.length);
console.log('Pendle:', arbitrumPendle.length);
console.log('Aave:', arbitrumAaveDebt.length);
console.log('Compound:', arbitrumCompoundDebt.length);
console.log('Silo:', arbitrumSilo.length);
console.log('=== OPTIMISM ===');
console.log('General:', optimism.length);
console.log('=== BASE ===');
console.log('General:', base.length);
console.log('=== TOTAL ===');
console.log(
  'Total:',
  arbitrum.length +
    arbitrumPendle.length +
    arbitrumAaveDebt.length +
    arbitrumCompoundDebt.length +
    arbitrumSilo.length +
    optimism.length +
    base.length,
);
