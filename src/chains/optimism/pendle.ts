import {
  Token,
  Protocols,
  BuildingBlock,
  ExtendedPendleToken,
} from '../../../types';

export const tokens: ExtendedPendleToken[] = [
  {
    chainId: 10,
    expiry: '2024-09-26T00:00:00.000Z',
    address: '0x24fb77c8c776c75f869bc65e6856af56f57d919f',
    symbol: 'PT-wstETH-26SEP2024',
    pt: {
      address: '0xf4225f061e5e01aa59de5e615729a9180301eb07',
      symbol: 'PT-wstETH-26SEP2024',
      name: 'PT-wstETH-26SEP2024',
      decimals: 18,
    },
    yt: {
      address: '0x1dfe41cc7f7860ba7f1076ca6d0fedd707c87a00',
      symbol: 'YT-wstETH-26SEP2024',
      name: 'YT-wstETH-26SEP2024',
      decimals: 18,
    },
    lp: {
      address: '0x24fb77c8c776c75f869bc65e6856af56f57d919f',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
      symbol: 'wstETH',
      name: 'wstETH',
      decimals: 18,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 10,
    expiry: '2024-06-27T00:00:00.000Z',
    address: '0x0c485feb9e6fee816652ea8f3bed2a8f59296e40',
    symbol: 'PT-rETH-27JUN2024',
    pt: {
      address: '0xaa92ea52612fa5ee5aba5510682485c19750cb82',
      symbol: 'PT-rETH-27JUN2024',
      name: 'PT-rETH-27JUN2024',
      decimals: 18,
    },
    yt: {
      address: '0xe8f0cf61598e0d7d20f99b978bdeff4d4222feb8',
      symbol: 'YT-rETH-27JUN2024',
      name: 'YT-rETH-27JUN2024',
      decimals: 18,
    },
    lp: {
      address: '0x0c485feb9e6fee816652ea8f3bed2a8f59296e40',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0x9bcef72be871e61ed4fbbc7630889bee758eb81d',
      symbol: 'rETH',
      name: 'rETH',
      decimals: 18,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
];
