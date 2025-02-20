import { BuildingBlock, CompoundDebtToken, Protocols } from '../../types';

export const tokens: CompoundDebtToken[] = [
  {
    address: '0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf',
    symbol: 'cUSDCv3',
    decimals: 6,
    underlyingAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
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
  {
    address: '0xA5EDBDD9646f8dFF606d7448e414884C7d905dCA',
    symbol: 'cUSDCv3',
    decimals: 6,
    underlyingAddress: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    underlyingSymbol: 'USDC.e',
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
