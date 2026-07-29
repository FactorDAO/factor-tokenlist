import { Token, Protocols, BuildingBlock } from '../../types';

export const tokens: Token[] = [
  {
    address: '0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168',
    symbol: 'USDG',
    name: 'USDG',
    decimals: 6,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.YIELD,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/robinhood/USDG.png',
  },
  {
    address: '0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/robinhood/WETH.png',
  },
  {
    address: '0xBeEff033F34C046626B8D0A041844C5d1A5409dd',
    symbol: 'steakUSDG',
    name: 'Steakhouse USDG',
    decimals: 18,
    protocols: [Protocols.MORPHO],
    buildingBlocks: [
      BuildingBlock.YIELD,
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/robinhood/STEAKUSDG.png',
  },
  {
    address: '0x80e0e24718dbFcad49ECAA6F1e6C89A190586cA8',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/USDC.png',
  },
  {
    address: '0xE246BC49b0598d7Cd9f0eAD48B885034f1254380',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/USDT.png',
  },
  {
    address: '0x6bac06600D220Ac5Ac281AD1f504D2Cf0F90F6e6',
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    decimals: 8,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/WBTC.png',
  },
  {
    address: '0x0822560CBDB92a0Af70397379ddb4Dcc4C95C8a7',
    symbol: 'LINK',
    name: 'Chainlink',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/LINK.png',
  },
  {
    address: '0xcD26A6AA5BB008240A998E242F51232FE98B12Cb',
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/WSTETH.png',
  },
  {
    address: '0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC',
    symbol: 'NVDA',
    name: 'NVDA • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec.png',
  },
  {
    address: '0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9',
    symbol: 'AAPL',
    name: 'AAPL • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xaf3d76f1834a1d425780943c99ea8a608f8a93f9.png',
  },
  {
    address: '0x322F0929c4625eD5bAd873c95208D54E1c003b2d',
    symbol: 'TSLA',
    name: 'TSLA • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x322f0929c4625ed5bad873c95208d54e1c003b2d.png',
  },
  {
    address: '0xc0D6457C16Cc70d6790Dd43521C899C87ce02f35',
    symbol: 'META',
    name: 'META • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xc0d6457c16cc70d6790dd43521c899c87ce02f35.png',
  },
  {
    address: '0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3',
    symbol: 'GOOGL',
    name: 'GOOGL • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x2e0847e8910a9732eb3fb1bb4b70a580adad4fe3.png',
  },
  {
    address: '0xe93237C50D904957Cf27E7B1133b510C669c2e74',
    symbol: 'MSFT',
    name: 'MSFT • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xe93237c50d904957cf27e7b1133b510c669c2e74.png',
  },
  {
    address: '0x12f190a9F9d7D37a250758b26824B97CE941bF54',
    symbol: 'AMZN',
    name: 'AMZN • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x12f190a9f9d7d37a250758b26824b97ce941bf54.png',
  },
  {
    address: '0x117cc2133c37B721F49dE2A7a74833232B3B4C0C',
    symbol: 'SPY',
    name: 'SPY • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x117cc2133c37b721f49de2a7a74833232b3b4c0c.png',
  },
  {
    address: '0xD5f3879160bc7c32ebb4dC785F8a4F505888de68',
    symbol: 'QQQ',
    name: 'QQQ • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xd5f3879160bc7c32ebb4dc785f8a4f505888de68.png',
  },
  {
    address: '0x6330D8C3178a418788dF01a47479c0ce7CCF450b',
    symbol: 'COIN',
    name: 'COIN • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x6330d8c3178a418788df01a47479c0ce7ccf450b.png',
  },
  {
    address: '0xec262a75e413fAfD0dF80480274532C79D42da09',
    symbol: 'MSTR',
    name: 'MSTR • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xec262a75e413fafd0df80480274532c79d42da09.png',
  },
  {
    address: '0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A',
    symbol: 'PLTR',
    name: 'PLTR • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a.png',
  },
  {
    address: '0x86923f96303D656E4aa86D9d42D1e57ad2023fdC',
    symbol: 'AMD',
    name: 'AMD • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x86923f96303d656e4aa86d9d42d1e57ad2023fdc.png',
  },
  {
    address: '0xb0992820E760d836549ba69BC7598b4af75dEE03',
    symbol: 'ORCL',
    name: 'ORCL • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xb0992820e760d836549ba69bc7598b4af75dee03.png',
  },
  {
    address: '0xc72b96e0E48ecd4DC75E1e45396e26300BC39681',
    symbol: 'INTC',
    name: 'INTC • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xc72b96e0e48ecd4dc75e1e45396e26300bc39681.png',
  },
  {
    address: '0xcBB95BBF36099d34dA091dc6Fa6F49EfA257Cee3',
    symbol: 'CLSK',
    name: 'CleanSpark • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xcbb95bbf36099d34da091dc6fa6f49efa257cee3.png',
  },
  {
    address: '0x411eFb0E7f985935DAec3D4C3ebaEa0d0AD7D89f',
    symbol: 'SLV',
    name: 'iShares Silver Trust • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x411efb0e7f985935daec3d4c3ebaea0d0ad7d89f.png',
  },
  {
    address: '0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344',
    symbol: 'USO',
    name: 'United States Oil Fund • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344.png',
  },
  {
    address: '0x7f0aBeF0C07280F82c6a08ead09dEd6BAE2C13Fc',
    symbol: 'EWY',
    name: 'iShares MSCI South Korea fund • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x7f0abef0c07280f82c6a08ead09ded6bae2c13fc.png',
  },
  {
    address: '0x558378E000D634A36593E338eBacdd6207640EfE',
    symbol: 'IONQ',
    name: 'IonQ • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x558378e000d634a36593e338ebacdd6207640efe.png',
  },
  {
    address: '0x284358abc07F9359f19f4b5b4aC91901Be2597Ba',
    symbol: 'RGTI',
    name: 'Rigetti Computing • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x284358abc07f9359f19f4b5b4ac91901be2597ba.png',
  },
  {
    address: '0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa',
    symbol: 'SPCX',
    name: 'SPCX • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x4a0e65a3eccec6dbe60ae065f2e7bb85fae35eea.png',
  },
  {
    address: '0x3b14C39E89D60D627b42a1A4CA45b5bb45Fc12e2',
    symbol: 'RKLB',
    name: 'Rocket Lab Corporation • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x3b14c39e89d60d627b42a1a4ca45b5bb45fc12e2.png',
  },
  {
    address: '0x58FfE4a942d3885bAa22D7520691F611EF09e7AA',
    symbol: 'TSM',
    name: 'Taiwan Semiconductor Manufacturing • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x58ffe4a942d3885baa22d7520691f611ef09e7aa.png',
  },
  {
    address: '0x47F93d52cBeC7C6D2CfC080e154002370a60dAEA',
    symbol: 'ASML',
    name: 'ASML Holding NV • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x47f93d52cbec7c6d2cfc080e154002370a60daea.png',
  },
  {
    address: '0x9D9c6684F596F66a64C030B93A886D51Fd4D7931',
    symbol: 'NBIS',
    name: 'Nebius Group • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x9d9c6684f596f66a64c030b93a886d51fd4d7931.png',
  },
  {
    address: '0x5f10A1C971B69e47e059e1dC91901B59b3fB49C3',
    symbol: 'CRWV',
    name: 'CoreWeave • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x5f10a1c971b69e47e059e1dc91901b59b3fb49c3.png',
  },
  {
    address: '0x1b0E319c6A659F002271B69dB8A7df2F911c153E',
    symbol: 'GME',
    name: 'GameStop • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0x1b0e319c6a659f002271b69db8a7df2f911c153e.png',
  },
  {
    address: '0xad25Ac6C84D497db898fa1E8387bf6Af3532a1c4',
    symbol: 'BABA',
    name: 'Alibaba • Robinhood Token',
    decimals: 18,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
    logoUrl:
      'https://cdn.robinhood.com/ncw_assets/logos/0xad25ac6c84d497db898fa1e8387bf6af3532a1c4.png',
  },
];
