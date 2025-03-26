import { BuildingBlock, CompoundBaseToken, Protocols } from '../../types';

export const tokens: CompoundBaseToken[] = [
  {
    baseAssetAddress: '0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf',
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
    collateralTokens: [
      {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        name: 'Wrapped BTC',
        symbol: 'WBTC',
        decimals: 8,
      },
      {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
      {
        address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
        name: 'Arbitrum',
        symbol: 'ARB',
        decimals: 18,
      },
      {
        address: '0x5979d7b546e38e414f7e9822514be443a4800529',
        name: 'Wrapped stETH',
        symbol: 'wstETH',
        decimals: 18,
      },
      {
        address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
        symbol: 'ezETH',
        name: 'Renzo Restaked ETH',
        decimals: 18,
      },
      {
        address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
        name: 'GMX',
        symbol: 'GMX',
        decimals: 18,
      },
      {
        address: '0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812',
        symbol: 'wUSDM',
        name: 'Wrapped Mountain Protocol USD',
        decimals: 18,
      }
    ]
  },
  {
    baseAssetAddress: '0xA5EDBDD9646f8dFF606d7448e414884C7d905dCA',
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
    collateralTokens: [
      {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        name: 'Wrapped BTC',
        symbol: 'WBTC',
        decimals: 8,
      },
      {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
      {
        address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
        name: 'Arbitrum',
        symbol: 'ARB',
        decimals: 18,
      },
      {
        address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
        name: 'GMX',
        symbol: 'GMX',
        decimals: 18,
      }
    ]
  },
  {
    baseAssetAddress: '0x6f7D514bbD4aFf3BcD1140B7344b32f063dEe486',
    symbol: 'cWETHv3',
    decimals: 18,
    underlyingAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    underlyingSymbol: 'wETH',
    protocols: [Protocols.COMPOUND],
    buildingBlocks: [
      BuildingBlock.BORROW,
      BuildingBlock.REPAY,
      BuildingBlock.LEND,
      BuildingBlock.WITHDRAW,
      BuildingBlock.CLAIM_REWARDS,
    ],
    collateralTokens: [
      {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        name: 'Wrapped BTC',
        symbol: 'WBTC',
        decimals: 8,
      },
      {
        address: '0x5979d7b546e38e414f7e9822514be443a4800529',
        name: 'Wrapped stETH',
        symbol: 'wstETH',
        decimals: 18,
      },
      {
        address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
        symbol: 'ezETH',
        name: 'Renzo Restaked ETH',
        decimals: 18,
      },
      {
        address: '0x4186BFC76E2E237523CBC30FD220FE055156b41F',
        symbol: 'rsETH',
        name: 'KelpDao Restaked ETH',
        decimals: 18,
      },
      {
        address: '0x35751007a407ca6feffe80b3cb397736d2cf4dbe',
        name: 'Wrapped eETH',
        symbol: 'WEETH',
        decimals: 18,
      },
      {
        address: '0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8',
        name: 'Rocket Pool ETH',
        symbol: 'rETH',
        decimals: 18,
      },
      {
        address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      {
        address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
      }     
    ]
  },
  {
    baseAssetAddress: '0xd98Be00b5D27fc98112BdE293e487f8D4cA57d07',
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
    collateralTokens: [
      {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        name: 'Wrapped BTC',
        symbol: 'WBTC',
        decimals: 8,
      },
      {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
      {
        address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
        name: 'Arbitrum',
        symbol: 'ARB',
        decimals: 18,
      },
      {
        address: '0x5979d7b546e38e414f7e9822514be443a4800529',
        name: 'Wrapped stETH',
        symbol: 'wstETH',
        decimals: 18,
      },
      {
        address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
        name: 'GMX',
        symbol: 'GMX',
        decimals: 18,
      }      
    ]
  },
];
