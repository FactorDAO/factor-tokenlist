import { AaveToken, BuildingBlock, Protocols } from '../../types';

export const tokens: AaveToken[] = [
  {
    aToken: '0xe18Ab82c81E7Eecff32B8A82B1b7d2d23F1EcE96',
    variableDebtToken: '0x07B1adFB7d5795Cf21baE8a77Eceb222F2FafBCE',
    symbol: 'aSonWETH',
    decimals: 18,
    underlyingAddress: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
    underlyingSymbol: 'WETH',
    protocols: [Protocols.AAVE],
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
      BuildingBlock.WITHDRAW,
      BuildingBlock.REPAY,
    ],
  },
  {
    aToken: '0x578Ee1ca3a8E1b54554Da1Bf7C583506C4CD11c6',
    variableDebtToken: '0x2273caBAd63b7D247A6b107E723c803fc49953A0',
    symbol: 'aSonUSDC',
    decimals: 6,
    underlyingAddress: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
    underlyingSymbol: 'USDC',
    protocols: [Protocols.AAVE],
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
      BuildingBlock.WITHDRAW,
      BuildingBlock.REPAY,
    ],
  },
  {
    aToken: '0x6C5E14A212c1C3e4Baf6f871ac9B1a969918c131',
    variableDebtToken: '0xF6089B790Fbf8F4812a79a31CFAbeB00B06BA7BD',
    symbol: 'aSonwS',
    decimals: 18,
    underlyingAddress: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
    underlyingSymbol: 'wS',
    protocols: [Protocols.AAVE],
    buildingBlocks: [
      BuildingBlock.LEND,
      BuildingBlock.BORROW,
      BuildingBlock.WITHDRAW,
      BuildingBlock.REPAY,
    ],
  },
  {
    aToken: '0xeAa74D7F42267eB907092AF4Bc700f667EeD0B8B',
    variableDebtToken: '',
    symbol: 'aSonwstS',
    decimals: 18,
    underlyingAddress: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
    underlyingSymbol: 'stS',
    protocols: [Protocols.AAVE],
    buildingBlocks: [BuildingBlock.LEND, BuildingBlock.WITHDRAW],
  },
];
