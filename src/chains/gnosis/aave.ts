import { AaveToken, BuildingBlock, Protocols } from '../../types';

/** Gnosis Aave V3 — factory-whitelisted set (MND-1107 / MND-1121). */
const BB = [
  BuildingBlock.BORROW,
  BuildingBlock.REPAY,
  BuildingBlock.LEND,
  BuildingBlock.WITHDRAW,
  BuildingBlock.FLASHLOAN,
] as const;

export const tokens: AaveToken[] = [
  {
    aToken: '0xC0333cb85B59a788d8C7CAe5e1Fd6E229A3E5a65',
    variableDebtToken: '0x37B9Ad6b5DC8Ad977AD716e92F49e9D200e58431',
    symbol: 'aGnoUSDCe',
    decimals: 6,
    underlyingAddress: '0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0',
    underlyingSymbol: 'USDC.e',
    protocols: [Protocols.AAVE],
    buildingBlocks: [...BB],
  },
  {
    aToken: '0xa818F1B57c201E092C4A2017A91815034326Efd1',
    variableDebtToken: '0x0c0fce05F2314540EcB095bF4D069e5E0ED90fF8',
    symbol: 'aGnoWETH',
    decimals: 18,
    underlyingAddress: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    underlyingSymbol: 'WETH',
    protocols: [Protocols.AAVE],
    buildingBlocks: [...BB],
  },
  {
    aToken: '0xd0Dd6cEF72143E22cCED4867eb0d5F2328715533',
    variableDebtToken: '0x281963D7471eCdC3A2Bd4503e24e89691cfe420D',
    symbol: 'aGnoWXDAI',
    decimals: 18,
    underlyingAddress: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    underlyingSymbol: 'WXDAI',
    protocols: [Protocols.AAVE],
    buildingBlocks: [...BB],
  },
  {
    aToken: '0x23e4E76D01B2002BE436CE8d6044b0aA2f68B68a',
    variableDebtToken: '0x9D881f67F20B49243c98f53d2B9E91E39d02Ae09',
    symbol: 'aGnowstETH',
    decimals: 18,
    underlyingAddress: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
    underlyingSymbol: 'wstETH',
    protocols: [Protocols.AAVE],
    buildingBlocks: [...BB],
  },
  {
    aToken: '0xA1Fa064A85266E2Ca82DEe5C5CcEC84DF445760e',
    variableDebtToken: '0xBc59E99198DbA71985A66E1713cC89FFEC53f7FC',
    symbol: 'aGnoGNO',
    decimals: 18,
    underlyingAddress: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
    underlyingSymbol: 'GNO',
    protocols: [Protocols.AAVE],
    buildingBlocks: [...BB],
  },
  {
    aToken: '0xEdBC7449a9b594CA4E053D9737EC5Dc4CbCcBfb2',
    // No vDebtEURe in Phase 0 factory WL — placeholder zero; lend/withdraw only.
    variableDebtToken: '0x0000000000000000000000000000000000000000',
    symbol: 'aGnoEURe',
    decimals: 18,
    underlyingAddress: '0xcB444e90D8198415266c6a2724b7900fb12FC56E',
    underlyingSymbol: 'EURe',
    protocols: [Protocols.AAVE],
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.WITHDRAW,
    ],
  },
];
