import { Token, Protocols, BuildingBlock } from '../../types';

/** Gnosis Chain (100) — Phase 0 inventory whitelist (USDC.e denom). */
export const tokens: Token[] = [
  {
    address: '0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0',
    symbol: 'USDC.e',
    name: 'Bridged USDC (Gnosis)',
    decimals: 6,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN, Protocols.MORPHO],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
      BuildingBlock.YIELD,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/USDC.png',
  },
  {
    address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
    symbol: 'USDC',
    name: 'USD Coin (legacy Gnosis)',
    decimals: 6,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/USDC.png',
  },
  {
    address: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN, Protocols.MORPHO],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
    ],
    logoUrl:
      'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/ethereum/WETH.png',
  },
  {
    address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    symbol: 'WXDAI',
    name: 'Wrapped XDAI',
    decimals: 18,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
    ],
  },
  {
    address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
    symbol: 'GNO',
    name: 'Gnosis Token',
    decimals: 18,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
    ],
  },
  {
    address: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    decimals: 18,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
    ],
  },
  {
    address: '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    decimals: 8,
    protocols: [Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
    ],
  },
  {
    address: '0xcB444e90D8198415266c6a2724b7900fb12FC56E',
    symbol: 'EURe',
    name: 'Monerium EUR emoney',
    decimals: 18,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
    ],
  },
  {
    address: '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73',
    symbol: 'GHO',
    name: 'GHO',
    decimals: 18,
    protocols: [Protocols.AAVE, Protocols.OPENOCEAN],
    buildingBlocks: [
      BuildingBlock.DEPOSIT,
      BuildingBlock.WITHDRAW,
      BuildingBlock.SWAP,
      BuildingBlock.LEND,
    ],
  },
];
