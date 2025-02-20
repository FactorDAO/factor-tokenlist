import { BuildingBlock, CompoundDebtToken, Protocols } from '../../types';

export const tokens: CompoundDebtToken[] = [
  {
    address: '0xb125E6687d4313864e53df431d5425969c15Eb2F',
    symbol: 'cUSDCv3',
    decimals: 6,
    underlyingAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    underlyingSymbol: 'USDC',
    protocols: [Protocols.COMPOUND],
    buildingBlocks: [
      BuildingBlock.BORROW,
      BuildingBlock.REPAY,
      BuildingBlock.LEND,
      BuildingBlock.WITHDRAW,
      BuildingBlock.CLAIM_REWARDS,
    ],
  },
];
