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
  {
    address: '0x6f7D514bbD4aFf3BcD1140B7344b32f063dEe486',
    symbol: 'cWETHv3',
    decimals: 18,
    underlyingAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    underlyingSymbol: 'WETH',
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
    address: '0xd98Be00b5D27fc98112BdE293e487f8D4cA57d07',
    symbol: 'cUSDTv3',
    decimals: 6,
    underlyingAddress: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    underlyingSymbol: 'USDT',
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
