import {
  Token,
  Protocols,
  BuildingBlock,
  ExtendedSiloToken,
} from '../../types';

export const tokens: ExtendedSiloToken[] = [
  {
    marketName: 'stS/S',
    marketAddress: '0x78C246f67c8A6cE03a1d894d4Cf68004Bd55Deea',
    asset: [
      {
        underlyingAsset: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'S/USDC',
    marketAddress: '0x062A36Bbe0306c2Fd7aecdf25843291fBAB96AD2',
    asset: [
      {
        underlyingAsset: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-aUSDC (14 Aug)/scUSD',
    marketAddress: '0xDa6787a3543a01Bf770DDF3953bE5B9C99c1cBD0',
    asset: [
      {
        underlyingAsset: {
          address: '0x930441Aa7Ab17654dF5663781CA0C02CC17e6643',
          symbol: 'PT-aUSDC (14 Aug)',
          name: 'Aave • Pendle',
          decimals: 6,
        },
        debtToken: {
          address: '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE',
          symbol: 'scUSD',
          name: 'Sonic USD',
          decimals: 6,
        },
        collateralToken: {
          address: '0x930441Aa7Ab17654dF5663781CA0C02CC17e6643',
          symbol: 'PT-aUSDC (14 Aug)',
          name: 'Aave • Pendle',
          decimals: 6,
        },
        collateralOnlyToken: {
          address: '0x930441Aa7Ab17654dF5663781CA0C02CC17e6643',
          symbol: 'PT-aUSDC (14 Aug)',
          name: 'Aave • Pendle',
          decimals: 6,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'LBTC/scBTC',
    marketAddress: '0xe67cce118e9CcEaE51996E4d290f9B77D960E3d7',
    asset: [
      {
        underlyingAsset: {
          address: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
          symbol: 'LBTC',
          name: 'Lombard Staked Bitcoin',
          decimals: 8,
        },
        debtToken: {
          address: '0xBb30e76d9Bb2CC9631F7fC5Eb8e87B5Aff32bFbd',
          symbol: 'scBTC',
          name: 'Sonic BTC',
          decimals: 8,
        },
        collateralToken: {
          address: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
          symbol: 'LBTC',
          name: 'Lombard Staked Bitcoin',
          decimals: 8,
        },
        collateralOnlyToken: {
          address: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
          symbol: 'LBTC',
          name: 'Lombard Staked Bitcoin',
          decimals: 8,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'wanS/S',
    marketAddress: '0x6BdF0D12d4B534d5F46c53a90ddDFBe6C0e85dC7',
    asset: [
      {
        underlyingAsset: {
          address: '0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70',
          symbol: 'wanS',
          name: 'Wrapped anS',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70',
          symbol: 'wanS',
          name: 'Wrapped anS',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70',
          symbol: 'wanS',
          name: 'Wrapped anS',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'S/USDC',
    marketAddress: '0x4915F6d3C9a7B20CedFc5d3854f2802f30311d13',
    asset: [
      {
        underlyingAsset: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wstkscUSD (29 May)/frxUSD',
    marketAddress: '0xe7579D515BD1676b6Da703786189a457B9bB3Fc3',
    asset: [
      {
        underlyingAsset: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
        debtToken: {
          address: '0x80Eede496655FB9047dd39d9f418d5483ED600df',
          symbol: 'frxUSD',
          name: 'Frax USD',
          decimals: 18,
        },
        collateralToken: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
        collateralOnlyToken: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'S/scUSD',
    marketAddress: '0xFe514E71F0933F63B374056557AED3dBB381C646',
    asset: [
      {
        underlyingAsset: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE',
          symbol: 'scUSD',
          name: 'Sonic USD',
          decimals: 6,
        },
        collateralToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'wstkscUSD/USDC',
    marketAddress: '0xbC24c0F594ECA381956895957c771437D61400D3',
    asset: [
      {
        underlyingAsset: {
          address: '0x9fb76f7ce5FCeAA2C42887ff441D46095E494206',
          symbol: 'wstkscUSD',
          name: 'Wrapped stkscUSD',
          decimals: 6,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0x9fb76f7ce5FCeAA2C42887ff441D46095E494206',
          symbol: 'wstkscUSD',
          name: 'Wrapped stkscUSD',
          decimals: 6,
        },
        collateralOnlyToken: {
          address: '0x9fb76f7ce5FCeAA2C42887ff441D46095E494206',
          symbol: 'wstkscUSD',
          name: 'Wrapped stkscUSD',
          decimals: 6,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-stS (29 May)/S',
    marketAddress: '0xC38a36CC0f1D616351d901A75BF3D58FCA4De71F',
    asset: [
      {
        underlyingAsset: {
          address: '0x420df605D062F8611EFb3F203BF258159b8FfFdE',
          symbol: 'PT-stS (29 May)',
          name: 'Beets • Pendle',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0x420df605D062F8611EFb3F203BF258159b8FfFdE',
          symbol: 'PT-stS (29 May)',
          name: 'Beets • Pendle',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x420df605D062F8611EFb3F203BF258159b8FfFdE',
          symbol: 'PT-stS (29 May)',
          name: 'Beets • Pendle',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'wOS/S',
    marketAddress: '0x1A030F39a8cf9f0b2649e97cF6d0C7853AeaCf78',
    asset: [
      {
        underlyingAsset: {
          address: '0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1',
          symbol: 'wOS',
          name: 'Wrapped OS',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1',
          symbol: 'wOS',
          name: 'Wrapped OS',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1',
          symbol: 'wOS',
          name: 'Wrapped OS',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'x33/USDC',
    marketAddress: '0x18555e17A97974A07841F652E45263b9CE8AD369',
    asset: [
      {
        underlyingAsset: {
          address: '0x3333111A391cC08fa51353E9195526A70b333333',
          symbol: 'x33',
          name: 'Shadow Liquid Staking Token',
          decimals: 18,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0x3333111A391cC08fa51353E9195526A70b333333',
          symbol: 'x33',
          name: 'Shadow Liquid Staking Token',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x3333111A391cC08fa51353E9195526A70b333333',
          symbol: 'x33',
          name: 'Shadow Liquid Staking Token',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'Anon/USDC',
    marketAddress: '0xaaF2F78f5eA77bF4EA150E869C54eEb73185a3BF',
    asset: [
      {
        underlyingAsset: {
          address: '0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C',
          symbol: 'Anon',
          name: 'HeyAnon',
          decimals: 18,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C',
          symbol: 'Anon',
          name: 'HeyAnon',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C',
          symbol: 'Anon',
          name: 'HeyAnon',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wstkscETH (29 May)/ETH',
    marketAddress: '0x4BB15418ef55367c638CA376b50276FACB4A30Ca',
    asset: [
      {
        underlyingAsset: {
          address: '0xa2161E75EDf50d70544e6588788A5732A3105c00',
          symbol: 'PT-wstkscETH (29 May)',
          name: 'Rings • Pendle',
          decimals: 18,
        },
        debtToken: {
          address: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
          symbol: 'ETH',
          name: 'Ether',
          decimals: 18,
        },
        collateralToken: {
          address: '0xa2161E75EDf50d70544e6588788A5732A3105c00',
          symbol: 'PT-wstkscETH (29 May)',
          name: 'Rings • Pendle',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xa2161E75EDf50d70544e6588788A5732A3105c00',
          symbol: 'PT-wstkscETH (29 May)',
          name: 'Rings • Pendle',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'sfrxUSD/scUSD',
    marketAddress: '0x6452b9aE8011800457b42C4fBBDf4579afB96228',
    asset: [
      {
        underlyingAsset: {
          address: '0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0',
          symbol: 'sfrxUSD',
          name: 'Staked Frax USD',
          decimals: 18,
        },
        debtToken: {
          address: '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE',
          symbol: 'scUSD',
          name: 'Sonic USD',
          decimals: 6,
        },
        collateralToken: {
          address: '0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0',
          symbol: 'sfrxUSD',
          name: 'Staked Frax USD',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0',
          symbol: 'sfrxUSD',
          name: 'Staked Frax USD',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'wstkscETH/ETH',
    marketAddress: '0xefA367570B11f8745B403c0D458b9D2EAf424686',
    asset: [
      {
        underlyingAsset: {
          address: '0xE8a41c62BB4d5863C6eadC96792cFE90A1f37C47',
          symbol: 'wstkscETH',
          name: 'Wrapped stkscETH',
          decimals: 18,
        },
        debtToken: {
          address: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
          symbol: 'ETH',
          name: 'Ether',
          decimals: 18,
        },
        collateralToken: {
          address: '0xE8a41c62BB4d5863C6eadC96792cFE90A1f37C47',
          symbol: 'wstkscETH',
          name: 'Wrapped stkscETH',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xE8a41c62BB4d5863C6eadC96792cFE90A1f37C47',
          symbol: 'wstkscETH',
          name: 'Wrapped stkscETH',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'xSolvBTC/SolvBTC',
    marketAddress: '0xC1F3d4F5f734d6Dc9E7D4f639EbE489Acd4542ab',
    asset: [
      {
        underlyingAsset: {
          address: '0xCC0966D8418d412c599A6421b760a847eB169A8c',
          symbol: 'xSolvBTC',
          name: 'xSolvBTC',
          decimals: 18,
        },
        debtToken: {
          address: '0x541FD749419CA806a8bc7da8ac23D346f2dF8B77',
          symbol: 'SolvBTC',
          name: 'Solv BTC',
          decimals: 18,
        },
        collateralToken: {
          address: '0xCC0966D8418d412c599A6421b760a847eB169A8c',
          symbol: 'xSolvBTC',
          name: 'xSolvBTC',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xCC0966D8418d412c599A6421b760a847eB169A8c',
          symbol: 'xSolvBTC',
          name: 'xSolvBTC',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'S/ETH',
    marketAddress: '0x9603Af53dC37F4BB6386f358A51a04fA8f599101',
    asset: [
      {
        underlyingAsset: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
          symbol: 'ETH',
          name: 'Ether',
          decimals: 18,
        },
        collateralToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wstkscUSD (29 May)/USDC',
    marketAddress: '0x3605509B2C8Bff9808da5dd5c81547d9EDC4Ffa2',
    asset: [
      {
        underlyingAsset: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
        collateralOnlyToken: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wstkscETH (29 May)/scETH',
    marketAddress: '0x6478362fbefd083F71705bD2BbBf3465170CDf4f',
    asset: [
      {
        underlyingAsset: {
          address: '0xa2161E75EDf50d70544e6588788A5732A3105c00',
          symbol: 'PT-wstkscETH (29 May)',
          name: 'Rings • Pendle',
          decimals: 18,
        },
        debtToken: {
          address: '0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812',
          symbol: 'scETH',
          name: 'Sonic ETH',
          decimals: 18,
        },
        collateralToken: {
          address: '0xa2161E75EDf50d70544e6588788A5732A3105c00',
          symbol: 'PT-wstkscETH (29 May)',
          name: 'Rings • Pendle',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xa2161E75EDf50d70544e6588788A5732A3105c00',
          symbol: 'PT-wstkscETH (29 May)',
          name: 'Rings • Pendle',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'beS/S',
    marketAddress: '0xEd7f8C077711B86b574ed94bB84895fbf147Cd8e',
    asset: [
      {
        underlyingAsset: {
          address: '0x871A101Dcf22fE4fE37be7B654098c801CBA1c88',
          symbol: 'beS',
          name: 'Beefy Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0x871A101Dcf22fE4fE37be7B654098c801CBA1c88',
          symbol: 'beS',
          name: 'Beefy Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x871A101Dcf22fE4fE37be7B654098c801CBA1c88',
          symbol: 'beS',
          name: 'Beefy Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wOS (29 May)/S',
    marketAddress: '0x115d53d01df03293A5c5A1df569f450869613BDD',
    asset: [
      {
        underlyingAsset: {
          address: '0x46eb02b9F47634c4fab3110CC7ADc1C6311DfAC1',
          symbol: 'PT-wOS (29 May)',
          name: 'Origin • Pendle',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0x46eb02b9F47634c4fab3110CC7ADc1C6311DfAC1',
          symbol: 'PT-wOS (29 May)',
          name: 'Origin • Pendle',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x46eb02b9F47634c4fab3110CC7ADc1C6311DfAC1',
          symbol: 'PT-wOS (29 May)',
          name: 'Origin • Pendle',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'stS/S',
    marketAddress: '0xA3BF8b1eE377bBe6152A6885eaeE8747dcBEa35D',
    asset: [
      {
        underlyingAsset: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'LBTC/WBTC',
    marketAddress: '0x91D87099fA714a201297856D29380195adB62962',
    asset: [
      {
        underlyingAsset: {
          address: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
          symbol: 'LBTC',
          name: 'Lombard Staked Bitcoin',
          decimals: 8,
        },
        debtToken: {
          address: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          symbol: 'WBTC',
          name: 'Wrapped BTC',
          decimals: 8,
        },
        collateralToken: {
          address: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
          symbol: 'LBTC',
          name: 'Lombard Staked Bitcoin',
          decimals: 8,
        },
        collateralOnlyToken: {
          address: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
          symbol: 'LBTC',
          name: 'Lombard Staked Bitcoin',
          decimals: 8,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'stS/USDC',
    marketAddress: '0xDace786ceF546C258C67B3EF68AeD91B887BE0f0',
    asset: [
      {
        underlyingAsset: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
          symbol: 'stS',
          name: 'Beets Staked Sonic',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'EGGS/USDC',
    marketAddress: '0x11BBa83002915bB204B348C2174626612260DDaa',
    asset: [
      {
        underlyingAsset: {
          address: '0xf26Ff70573ddc8a90Bd7865AF8d7d70B8Ff019bC',
          symbol: 'EGGS',
          name: 'Eggs',
          decimals: 18,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0xf26Ff70573ddc8a90Bd7865AF8d7d70B8Ff019bC',
          symbol: 'EGGS',
          name: 'Eggs',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0xf26Ff70573ddc8a90Bd7865AF8d7d70B8Ff019bC',
          symbol: 'EGGS',
          name: 'Eggs',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wanS (28 Aug)/S',
    marketAddress: '0x12e082a98C2292382f9e2Bd03CAD7Fb41242831A',
    asset: [
      {
        underlyingAsset: {
          address: '0x789cA09b0B4bcc83062d817C43206f96bd464015',
          symbol: 'PT-wanS (28 Aug)',
          name: 'Angles • Pendle',
          decimals: 18,
        },
        debtToken: {
          address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
          symbol: 'S',
          name: 'Sonic',
          decimals: 18,
        },
        collateralToken: {
          address: '0x789cA09b0B4bcc83062d817C43206f96bd464015',
          symbol: 'PT-wanS (28 Aug)',
          name: 'Angles • Pendle',
          decimals: 18,
        },
        collateralOnlyToken: {
          address: '0x789cA09b0B4bcc83062d817C43206f96bd464015',
          symbol: 'PT-wanS (28 Aug)',
          name: 'Angles • Pendle',
          decimals: 18,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'WBTC/USDC',
    marketAddress: '0x2F33cCbB08743d51E086BDC1bA20fB8CEB9bAD40',
    asset: [
      {
        underlyingAsset: {
          address: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          symbol: 'WBTC',
          name: 'Wrapped BTC',
          decimals: 8,
        },
        debtToken: {
          address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
          symbol: 'USDC',
          name: 'Bridged USDC (Sonic Labs)',
          decimals: 6,
        },
        collateralToken: {
          address: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          symbol: 'WBTC',
          name: 'Wrapped BTC',
          decimals: 8,
        },
        collateralOnlyToken: {
          address: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          symbol: 'WBTC',
          name: 'Wrapped BTC',
          decimals: 8,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
  {
    marketName: 'PT-wstkscUSD (29 May)/scUSD',
    marketAddress: '0xAD108d6c7Bcfc529B889598d96653Bbb3D00e2fc',
    asset: [
      {
        underlyingAsset: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
        debtToken: {
          address: '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE',
          symbol: 'scUSD',
          name: 'Sonic USD',
          decimals: 6,
        },
        collateralToken: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
        collateralOnlyToken: {
          address: '0xBe27993204Ec64238F71A527B4c4D5F4949034C3',
          symbol: 'PT-wstkscUSD (29 May)',
          name: 'Rings • Pendle',
          decimals: 6,
        },
      },
    ],
    protocols: [Protocols.SILO],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
  },
];
