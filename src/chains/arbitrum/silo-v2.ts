import { Token, Protocols, BuildingBlock, SiloV2Token } from '../../types';

export const tokens: SiloV2Token[] = [
  {
    marketName: 'sUSDX/USDC',
    marketAddress: '0x6Cc53A49b2c50D2450D6c531a7B5C763BB9Cb758',
    silo0: {
      underlyingAsset: {
        address: '0x7788A3538C5fc7F9c7C8A74EAC4c898fC8d87d92',
        symbol: 'sUSDX',
        name: 'Staked USDX',
        decimals: 18,
      },
      collateralToken: {
        address: '0xd8872677af7bf49D85352fc18c7C32F106f6Fc49',
        symbol: 'bsUSDX-127',
        name: 'Silo Finance Borrowable sUSDX Deposit, SiloId: 127',
        decimals: 18,
      },
      collateralOnlyToken: {
        address: '0xc44028857aE8BdDC29DB60e41D386453170cC671',
        symbol: 'nbsUSDX-127',
        name: 'Silo Finance Non-borrowable sUSDX Deposit, SiloId: 127',
        decimals: 18,
      },
      debtToken: {
        address: '0xD2CD30239FAFC39cB220962eCB7De02d4b9461DC',
        symbol: 'dsUSDX-127',
        name: 'Silo Finance sUSDX Debt, SiloId: 127',
        decimals: 18,
      },
    },
    silo1: {
      underlyingAsset: {
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
      },
      collateralToken: {
        address: '0x2433D6AC11193b4695D9ca73530de93c538aD18a',
        symbol: 'bUSDC-127',
        name: 'Silo Finance Borrowable USDC Deposit, SiloId: 127',
        decimals: 6,
      },
      collateralOnlyToken: {
        address: '0x2Af3c3D2C243D4fB4750AF7066b10e5c84ec5a34',
        symbol: 'nbUSDC-127',
        name: 'Silo Finance Non-borrowable USDC Deposit, SiloId: 127',
        decimals: 6,
      },
      debtToken: {
        address: '0xBBD628eAfC833a596A78DCE53272609bfb59c240',
        symbol: 'dUSDC-127',
        name: 'Silo Finance USDC Debt, SiloId: 127',
        decimals: 6,
      },
    },
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
];
