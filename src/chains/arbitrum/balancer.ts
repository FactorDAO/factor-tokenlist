import { Token, Protocols, BuildingBlock, BalancerToken } from '../../types';

export const tokens: BalancerToken[] = [
  {
    address: '0x32eb7902d4134bf98a28b963d26de779af92a212',
    symbol: 'RDPX',
    name: 'Dopex Rebate Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
    symbol: 'DPX',
    name: 'Dopex Governance Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x8d9ba570d6cb60c7e3e0f31343efe75ab8e65fb1',
    symbol: 'gOHM',
    name: 'Governance OHM',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    symbol: 'GMX',
    name: 'GMX',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    symbol: 'USDC',
    name: 'USD Coin (Arb1)',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x6261d197a98e9ae678688713629f25e44ca529fb',
    symbol: 'NOVA',
    name: 'Nova',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x9b570fb4f1b4ad1138b4613f98a4928833437a9b',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x5979d7b546e38e414f7e9822514be443a4800529',
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x64343594ab9b56e99087bfa6f2335db24c2d1f17',
    symbol: 'VST',
    name: 'Vesta Stable',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
    symbol: 'ARB',
    name: 'Arbitrum',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x00877b8fc17b6e65675653bd85c7696bdb767ff7',
    symbol: 'HIGH',
    name: 'High Risk ',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x079504b86d38119f859c4194765029f692b7b7aa',
    symbol: 'LYRA',
    name: 'Lyra Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x088cd8f5ef3652623c22d48b1605dcfe860cd704',
    symbol: 'VELA',
    name: 'VelaToken',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60',
    symbol: 'LDO',
    name: 'Lido DAO Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x3d9907f9a368ad0a51be60f7da3b97cf940982d8',
    symbol: 'GRAIL',
    name: 'Camelot token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x431402e8b9de9aa016c743880e04e517074d8cec',
    symbol: 'HEGIC',
    name: 'Hegic',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xb766039cc6db368759c1e56b79affe831d0cc507',
    symbol: 'RPL',
    name: 'Rocket Pool Protocol',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8',
    symbol: 'rETH',
    name: 'Rocket Pool ETH',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x6694340fc020c5e6b96567843da2df01b2ce1eb6',
    symbol: 'STG',
    name: 'StargateToken',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xc6eee8cb7643ec2f05f46d569e9ec8ef8b41b389',
    symbol: 'bb-a-USD',
    name: 'Balancer Aave v3 Boosted StablePool',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x45026e94feef4ebaeafa9bbb7f5050bbbf6150da',
    symbol: 'KEKS',
    name: 'Keks',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xa684cd057951541187f288294a1e1c2646aa2d24',
    symbol: 'VSTA',
    name: 'Vesta',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
    symbol: 'LINK',
    name: 'ChainLink Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x01990f1e6f7f32296f125ee9469705c1c070054d',
    symbol: 'Stafi rETH/WETH',
    name: 'Balancer Stafi rETH/WETH ',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x6cda1d3d092811b2d48f7476adb59a6239ca9b95',
    symbol: 'rETH',
    name: 'StaFi',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
    symbol: 'BAL',
    name: 'Balancer',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xea70b39d79b22932aa92a096bf41e5330e1ba907',
    symbol: 'VCT',
    name: 'VisionaryCraft',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x027e2eb1c79bd1921a29fd377a8c978b3193401c',
    symbol: 'ABAS',
    name: 'Arbitrum Bitcoin and Staking Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x11f38b2aff86ff9f253f6fd91378e4c7dadf5667',
    symbol: 'bForge',
    name: 'Bridged Forge Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x7cb16cb78ea464ad35c8a50abf95dff3c9e09d5d',
    symbol: '0xBTC',
    name: '0xBitcoin Token',
    decimals: 8,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x35751007a407ca6feffe80b3cb397736d2cf4dbe',
    symbol: 'weETH',
    name: 'Wrapped eETH',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x02a1e9f29e9a04dbb64114e78cb6cba20c22d73f',
    symbol: 'sUSDe/USDe',
    name: 'Balancer sUSDe/USDe',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2',
    symbol: 'sUSDe',
    name: 'Staked USDe',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
    symbol: 'USDe',
    name: 'USDe',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x539bde0d7dbd336b79148aa742883198bbf60342',
    symbol: 'MAGIC',
    name: 'MAGIC',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xc74fe4c715510ec2f8c61d70d397b32043f55abe',
    symbol: 'MYC',
    name: 'Mycelium',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x64541216bafffeec8ea535bb71fbc927831d0595',
    symbol: 'B-33WETH-33WBTC-33USDC',
    name: 'Balancer 33 WETH 33 WBTC 33 USDC',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xa72159fc390f0e3c6d415e658264c7c4051e9b87',
    symbol: 'TCR',
    name: 'Tracer',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x989132f596ff5f79fe3e52bbddadacde6438bf06',
    symbol: '3L-ETH/USD+USDC',
    name: '3L-ETH/USD+USDC',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xe0258e0b32cd3840ef29789bcda9c2bf996e2a40',
    symbol: '3S-ETH/USD+USDC',
    name: '3S-ETH/USD+USDC',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x6e5f70e345b4afd271491290e026dd3d34cbb9f2',
    symbol: '3S-BTC/USD+USDC',
    name: '3S-BTC/USD+USDC',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xac278be0b5ad810ee3dcf79dd2933c33cc234258',
    symbol: '3L-BTC/USD+USDC',
    name: '3L-BTC/USD+USDC',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xd4d42f0b6def4ce0383636770ef773390d85c61a',
    symbol: 'SUSHI',
    name: 'SushiToken',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0',
    symbol: 'UNI',
    name: 'Uniswap',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
    symbol: 'CRV',
    name: 'Curve DAO Token',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x7cfadfd5645b50be87d546f42699d863648251ad',
    symbol: 'stataArbUSDCn',
    name: 'Static Aave Arbitrum USDCn',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xfa5ed56a203466cbbc2430a43c66b9d8723528e7',
    symbol: 'EURA',
    name: 'EURA (previously agEUR)',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
    symbol: 'MAI',
    name: 'Mai Stablecoin',
    decimals: 18,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
  {
    address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    protocols: [Protocols.BALANCER],
    buildingBlocks: [BuildingBlock.FLASHLOAN],
  },
];
