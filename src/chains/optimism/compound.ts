import { BuildingBlock, CompoundDebtToken, Protocols } from '../../types';

export const tokens: CompoundDebtToken[] = [
  {
    address: '0x2e44e174f7D53F0212823acC11C01A11d58c5bCB',
    symbol: 'cUSDCv3',
    decimals: 6,
    underlyingAddress: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
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
