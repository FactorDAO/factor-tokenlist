import {
  Token,
  Protocols,
  BuildingBlock,
  ExtendedPendleToken,
} from '../../types';

export const tokens: ExtendedPendleToken[] = [
  {
    chainId: 8453,
    expiry: '2025-05-29T00:00:00.000Z',
    address: '0x727cebacfb10ffd353fc221d06a862b437ec1735',
    symbol: 'PT-LBTC-29MAY2025',
    pt: {
      address: '0x5d746848005507da0b1717c137a10c30ad9ee307',
      symbol: 'PT-LBTC-29MAY2025',
      name: 'PT-LBTC-29MAY2025',
      decimals: 8,
    },
    yt: {
      address: '0x5fd84c3dd5c00ab9e04bd94685b55e8dd0c1e3fd',
      symbol: 'YT-LBTC-29MAY2025',
      name: 'YT-LBTC-29MAY2025',
      decimals: 8,
    },
    lp: {
      address: '0x727cebacfb10ffd353fc221d06a862b437ec1735',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0xecac9c5f704e954931349da37f60e39f515c11c1',
      symbol: 'LBTC',
      name: 'LBTC',
      decimals: 8,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 8453,
    expiry: '2025-06-26T00:00:00.000Z',
    address: '0x621d4d92e9bed484e6d2cb8a37d342c804a0908c',
    symbol: 'PT-Aerodrome VIR/CBBTC-26JUN2025',
    pt: {
      address: '0x603e2d1af3d0673f4af756b6e12a2044bfebb714',
      symbol: 'PT-Aerodrome VIR/CBBTC-26JUN2025',
      name: 'PT-Aerodrome VIR/CBBTC-26JUN2025',
      decimals: 18,
    },
    yt: {
      address: '0xce714a2ce5ecec1ba7efdc6456f12c4e7b46fa69',
      symbol: 'YT-Aerodrome VIR/CBBTC-26JUN2025',
      name: 'YT-Aerodrome VIR/CBBTC-26JUN2025',
      decimals: 18,
    },
    lp: {
      address: '0x621d4d92e9bed484e6d2cb8a37d342c804a0908c',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0xb909f567c5c2bb1a4271349708cc4637d7318b4a',
      symbol: 'vAMM-VIRTUAL/cbBTC',
      name: 'vAMM-VIRTUAL/cbBTC',
      decimals: 18,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 8453,
    expiry: '2025-03-27T00:00:00.000Z',
    address: '0x14936c9b8eb798ca6291c2d6ce5de2c6cb5f1f9c',
    symbol: 'PT-sUSDz-27MAR2025',
    pt: {
      address: '0xc1e4d7ca05045dfbc654b67e11124901148b1266',
      symbol: 'PT-sUSDz-27MAR2025',
      name: 'PT-sUSDz-27MAR2025',
      decimals: 18,
    },
    yt: {
      address: '0xb80b9f31064be8a97e4ced4e1368f45826c59868',
      symbol: 'YT-sUSDz-27MAR2025',
      name: 'YT-sUSDz-27MAR2025',
      decimals: 18,
    },
    lp: {
      address: '0x14936c9b8eb798ca6291c2d6ce5de2c6cb5f1f9c',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0xe31ee12bdfdd0573d634124611e85338e2cbf0cf',
      symbol: 'sUSDz',
      name: 'sUSDz',
      decimals: 18,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 8453,
    expiry: '2025-06-26T00:00:00.000Z',
    address: '0x3124d41708edbdc7995a55183e802e3d9d0d5ef1',
    symbol: 'PT-mUSDC-26JUN2025',
    pt: {
      address: '0x2a9e9256e0d1ad0f7f9d7c7248cb7e2f06072deb',
      symbol: 'PT-mUSDC-26JUN2025',
      name: 'PT-mUSDC-26JUN2025',
      decimals: 6,
    },
    yt: {
      address: '0xe84009923221bb401c811643c5a5efaf56eed4ca',
      symbol: 'YT-mUSDC-26JUN2025',
      name: 'YT-mUSDC-26JUN2025',
      decimals: 6,
    },
    lp: {
      address: '0x3124d41708edbdc7995a55183e802e3d9d0d5ef1',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0xedc817a28e8b93b03976fbd4a3ddbc9f7d176c22',
      symbol: 'mUSDC',
      name: 'mUSDC',
      decimals: 8,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 8453,
    expiry: '2025-06-26T00:00:00.000Z',
    address: '0xecc2c994aa0c599a7f69a7cfb9106fe4dffb4341',
    symbol: 'PT-wsuperOETHb-26JUN2025',
    pt: {
      address: '0x25d2b7e3b71f4edcc366e79134570704a079923a',
      symbol: 'PT-wsuperOETHb-26JUN2025',
      name: 'PT-wsuperOETHb-26JUN2025',
      decimals: 18,
    },
    yt: {
      address: '0x1188331820daa0a8af69c0779334d53cb4a9cef1',
      symbol: 'YT-wsuperOETHb-26JUN2025',
      name: 'YT-wsuperOETHb-26JUN2025',
      decimals: 18,
    },
    lp: {
      address: '0xecc2c994aa0c599a7f69a7cfb9106fe4dffb4341',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0x7fcd174e80f264448ebee8c88a7c4476aaf58ea6',
      symbol: 'wsuperOETHb',
      name: 'wsuperOETHb',
      decimals: 18,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 8453,
    expiry: '2025-06-26T00:00:00.000Z',
    address: '0xd94fd7bceb29159405ae1e06ce80e51ef1a484b0',
    symbol: 'PT-mcbBTC-26JUN2025',
    pt: {
      address: '0x5c6593f57ee95519ff6a8cd16a5e41ff50af239a',
      symbol: 'PT-mcbBTC-26JUN2025',
      name: 'PT-mcbBTC-26JUN2025',
      decimals: 8,
    },
    yt: {
      address: '0xdc2ffc7b4bd5a38d5842e5fdbb407e731dd30796',
      symbol: 'YT-mcbBTC-26JUN2025',
      name: 'YT-mcbBTC-26JUN2025',
      decimals: 8,
    },
    lp: {
      address: '0xd94fd7bceb29159405ae1e06ce80e51ef1a484b0',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0xf877acafa28c19b96727966690b2f44d35ad5976',
      symbol: 'mcbBTC',
      name: 'mcbBTC',
      decimals: 8,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
  {
    chainId: 8453,
    expiry: '2025-12-25T00:00:00.000Z',
    address: '0x483f2e223c58a5ef19c4b32fbc6de57709749cb3',
    symbol: 'PT-cbETH-25DEC2025',
    pt: {
      address: '0xe46c8ba948f8071b425a1f7ba45c0a65cbacea2e',
      symbol: 'PT-cbETH-25DEC2025',
      name: 'PT-cbETH-25DEC2025',
      decimals: 18,
    },
    yt: {
      address: '0xf9da8f69d518d7f6488179014f475e843ee2defd',
      symbol: 'YT-cbETH-25DEC2025',
      name: 'YT-cbETH-25DEC2025',
      decimals: 18,
    },
    lp: {
      address: '0x483f2e223c58a5ef19c4b32fbc6de57709749cb3',
      symbol: 'PENDLE-LPT',
      name: 'PENDLE-LPT',
      decimals: 18,
    },
    underlyingAsset: {
      address: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
      symbol: 'cbETH',
      name: 'cbETH',
      decimals: 18,
    },
    protocols: [Protocols.PENDLE],
    buildingBlocks: [
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.REMOVE_LIQUIDITY,
    ],
  },
];