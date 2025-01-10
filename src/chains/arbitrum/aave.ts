import { AaveDebtToken } from '../../types';

/**
 * AAVE TOKEN LIST CAN BE FOUND HERE:
 * https://arbiscan.io/address/0x7F23D86Ee20D869112572136221e173428DD740B#readContract
 * By calling: getAllReservesTokens() to get all tokens
 * then calling one by one:
 * getReserveTokensAddresses(address) to get the aToken and variableDebtToken
 */

export const tokens: AaveDebtToken[] = [
  {
    aToken: '0xf329e36C7bF6E5E86ce2150875a84Ce77f477375',
    variableDebtToken: '0xE80761Ea617F66F96274eA5e8c37f03960ecC679',
    symbol: 'aArbAAVE',
    decimals: 18,
    underlyingAddress: '0xba5ddd1f9d7f570dc94a51479a000e3bce967196',
    underlyingSymbol: 'AAVE',
  },
  {
    aToken: '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97',
    variableDebtToken: '0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8',
    symbol: 'aArbAAVE',
    decimals: 2,
    underlyingAddress: '0xD22a58f79e9481D1a88e00c343885A588b34b68B',
    underlyingSymbol: 'EURS',
  },
  {
    aToken: '0x625E7708f30cA75bfd92586e17077590C60eb4cD',
    variableDebtToken: '0xFCCf3cAbbe80101232d343252614b6A3eE81C989',
    symbol: 'aArbUSDC',
    decimals: 6,
    underlyingAddress: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    underlyingSymbol: 'USDC.e',
  },
  {
    aToken: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
    variableDebtToken: '0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351',
    symbol: 'aArbWETH',
    decimals: 18,
    underlyingAddress: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    underlyingSymbol: 'WETH',
  },
  {
    aToken: '0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77',
    variableDebtToken: '0x3ca5FA07689F266e907439aFd1fBB59c44fe12f6',
    symbol: 'aArbweETH',
    decimals: 18,
    underlyingAddress: '0x35751007a407ca6feffe80b3cb397736d2cf4dbe',
    underlyingSymbol: 'weETH',
  },
  {
    aToken: '0x078f358208685046a11C85e8ad32895DED33A249',
    variableDebtToken: '0x92b42c66840C7AD907b4BF74879FF3eF7c529473',
    symbol: 'aArbWBTC',
    decimals: 8,
    underlyingAddress: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
    underlyingSymbol: 'WBTC',
  },
  {
    aToken: '0x724dc807b04555b71ed48a6896b6F41593b8C637',
    variableDebtToken: '0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6',
    symbol: 'aArbUSDCn',
    decimals: 6,
    underlyingAddress: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    underlyingSymbol: 'USDC',
  },
  {
    aToken: '0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA',
    variableDebtToken: '0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907',
    symbol: 'aArbMAI',
    decimals: 18,
    underlyingAddress: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    underlyingSymbol: 'MAI',
  },
  {
    aToken: '0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf',
    variableDebtToken: '0x77CA01483f379E58174739308945f044e1a764dc',
    symbol: 'aArbwstETH',
    decimals: 18,
    underlyingAddress: '0x5979d7b546e38e414f7e9822514be443a4800529',
    underlyingSymbol: 'wstETH',
  },
  {
    aToken: '0x6ab707Aca953eDAeFBc4fD23bA73294241490620',
    variableDebtToken: '0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7',
    symbol: 'aArbUSDT',
    decimals: 6,
    underlyingAddress: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    underlyingSymbol: 'USDT',
  },
  {
    aToken: '0x6533afac2E7BCCB20dca161449A13A32D391fb00',
    variableDebtToken: '0x44705f578135cC5d703b4c9c122528C73Eb87145',
    symbol: 'aArbARB',
    decimals: 18,
    underlyingAddress: '0x912ce59144191c1204e64559fe8253a0e49e6548',
    underlyingSymbol: 'ARB',
  },
  {
    aToken: '0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530',
    variableDebtToken: '0x953A573793604aF8d41F306FEb8274190dB4aE0e',
    symbol: 'aArbLINK',
    decimals: 18,
    underlyingAddress: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
    underlyingSymbol: 'LINK',
  },
  {
    aToken: '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE',
    variableDebtToken: '0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC',
    symbol: 'aArbDAI',
    decimals: 18,
    underlyingAddress: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    underlyingSymbol: 'DAI',
  },
  {
    aToken: '0x8Eb270e296023E9D92081fdF967dDd7878724424',
    variableDebtToken: '0xCE186F6Cccb0c955445bb9d10C59caE488Fea559',
    symbol: 'aArbrETH',
    decimals: 18,
    underlyingAddress: '0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8',
    underlyingSymbol: 'rETH',
  },
  {
    aToken: '0xeBe517846d0F36eCEd99C735cbF6131e1fEB775D',
    variableDebtToken: '0x18248226C16BF76c032817854E7C83a2113B4f06',
    symbol: 'aArbGHO',
    decimals: 18,
    underlyingAddress: '0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33',
    underlyingSymbol: 'GHO',
  },
  {
    aToken: '0x8ffDf2DE812095b1D19CB146E4c004587C0A0692',
    variableDebtToken: '0xA8669021776Bc142DfcA87c21b4A52595bCbB40a',
    symbol: 'aArbLUSD',
    decimals: 18,
    underlyingAddress: '0x93b346b6bc2548da6a1e7d98e9a421b42541425b',
    underlyingSymbol: 'LUSD',
  },
  {
    aToken: '0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5',
    variableDebtToken: '0x5D557B07776D12967914379C71a1310e917C7555',
    symbol: 'aArbFRAX',
    decimals: 18,
    underlyingAddress: '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
    underlyingSymbol: 'FRAX',
  },
];
