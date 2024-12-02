import { BuildingBlock } from '@factordao/sdk-studio';

export enum Protocols {
  AAVE = 'aave',
  BALANCER = 'balancer',
  CAMELOT = 'camelot',
  COMPOUND = 'compound',
  GLP = 'glp',
  GMX = 'gmx',
  GNS = 'gns',
  MUX = 'mux',
  OPENOCEAN = 'openocean',
  PENDLE = 'pendle',
  PENPIE = 'penpie',
  PIREX = 'pirex',
  SILO = 'silo',
  UMAMI = 'umami',
  UNISWAP = 'uniswap',
  VLP = 'vlp',
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
