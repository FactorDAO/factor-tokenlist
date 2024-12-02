import { BuildingBlock } from '@factordao/sdk-studio';

export enum Protocols {
  OPENOCEAN = 'openocean',
  UNISWAP = 'uniswap',
  AAVE = 'aave',
  COMPOUND = 'compound',
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
}
