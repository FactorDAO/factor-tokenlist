import { BuildingBlock } from '@factordao/sdk-studio';

export enum Protocols {
  AAVE = 'AAVE',
  BALANCER = 'BALANCER',
  CAMELOT = 'CAMELOT',
  COMPOUND = 'COMPOUND',
  GLP = 'GLP',
  GMX = 'GMX',
  GNS = 'GNS',
  MUX = 'MUX',
  OPENOCEAN = 'OPENOCEAN',
  PENDLE = 'PENDLE',
  PENPIE = 'PENPIE',
  PIREX = 'PIREX',
  SILO = 'SILO',
  UMAMI = 'UMAMI',
  UNISWAP = 'UNISWAP',
  VLP = 'VLP',
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
  logoUrl?: string;
}

export const ProtocolsByBuildingBlock: Partial<
  Record<BuildingBlock, Protocols[]>
> = {
  [BuildingBlock.SWAP]: [Protocols.OPENOCEAN, Protocols.UNISWAP],
  [BuildingBlock.LEND]: [Protocols.AAVE, Protocols.COMPOUND],
  [BuildingBlock.BORROW]: [Protocols.AAVE, Protocols.COMPOUND],
};
