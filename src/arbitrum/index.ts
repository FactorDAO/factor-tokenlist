import { BuildingBlock } from '@factordao/sdk-studio';
import { Token, Protocols } from '../types';

export const arbitrumTokens: Token[] = [
  {
    address: '0x6dd963c510c2d2f09d5eddb48ede45fed063eb36',
    name: 'Factor',
    symbol: 'FCTR',
    decimals: 18,
    buildingBlocks: [BuildingBlock.SWAP],
    protocols: [Protocols.OPENOCEAN, Protocols.UNISWAP],
  },
  {
    address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
      BuildingBlock.REPAY,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    protocols: [Protocols.COMPOUND, Protocols.AAVE],
  },
  {
    address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    name: 'USD Coin (Arb1)',
    symbol: 'USDC.e',
    decimals: 6,
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
      BuildingBlock.REPAY,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    protocols: [Protocols.COMPOUND, Protocols.AAVE],
  },
  {
    address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
    name: 'Arbitrum',
    symbol: 'ARB',
    decimals: 18,
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    protocols: [Protocols.OPENOCEAN, Protocols.AAVE],
  },
];
