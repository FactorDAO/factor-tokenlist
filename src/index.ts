// Import tokens for Arbitrum
import { tokens as arbitrum } from './chains/arbitrum/general';
import { tokens as arbitrumPendle } from './chains/arbitrum/pendle';
import { tokens as arbitrumAaveDebt } from './chains/arbitrum/aave';
import { tokens as arbitrumCompoundDebt } from './chains/arbitrum/compound';
import { tokens as arbitrumSilo } from './chains/arbitrum/silo';
import { tokens as optimism } from './chains/optimism/general';
import { tokens as optimismAaveDebt } from './chains/optimism/aave';
import { tokens as optimismCompoundDebt } from './chains/optimism/compound';
import { tokens as base } from './chains/base/general';
import { tokens as baseAaveDebt } from './chains/base/aave';
import { tokens as baseCompoundDebt } from './chains/base/compound';
// Import types
import {
  Token,
  Protocols,
  ProtocolsByBuildingBlock,
  ExtendedPendleToken,
  AaveDebtToken,
  CompoundDebtToken,
  ExtendedSiloToken,
  BuildingBlock,
  ChainId,
  ChainIdToNetwork,
} from './types';

export class FactorTokenlist {
  private generalTokens: Map<string, Token>;
  private pendleTokens: ExtendedPendleToken[];
  private siloTokens: ExtendedSiloToken[];
  public protocols: Protocols[];
  public buildingBlocks: BuildingBlock[];
  private availableGeneralTokens: Record<string, Token[]>;
  private availablePendleTokens: Record<string, ExtendedPendleToken[]>;
  private availableAaveDebtTokens: Record<string, AaveDebtToken[]>;
  private availableCompoundDebtTokens: Record<string, CompoundDebtToken[]>;
  private availableSiloTokens: Record<string, ExtendedSiloToken[]>;
  private aaveDebtTokens: AaveDebtToken[];
  private compoundDebtTokens: CompoundDebtToken[];

  constructor(chainId: ChainId) {
    this.generalTokens = new Map();
    this.availableGeneralTokens = {
      arbitrum,
      optimism,
      base,
    };
    this.availablePendleTokens = {
      arbitrum: arbitrumPendle,
    };
    this.availableAaveDebtTokens = {
      arbitrum: arbitrumAaveDebt,
      optimism: optimismAaveDebt,
      base: baseAaveDebt,
    };
    this.availableCompoundDebtTokens = {
      arbitrum: arbitrumCompoundDebt,
      optimism: optimismCompoundDebt,
      base: baseCompoundDebt,
    };
    this.availableSiloTokens = {
      arbitrum: arbitrumSilo,
    };
    this.protocols = [];
    this.buildingBlocks = [];
    this.initializeTokens(chainId);
  }

  private initializeTokens(chainId: ChainId): void {
    // Convert chainId to network
    const network = ChainIdToNetwork[chainId];
    // Check if tokens are available for the network
    if (!(network in this.availableGeneralTokens)) {
      throw new Error(`No tokens available for network ${network}`);
    }
    // Iterate over tokens for the network
    for (const token of this.availableGeneralTokens[network]) {
      if (!this.generalTokens.has(token.address.toLowerCase())) {
        this.generalTokens.set(token.address.toLowerCase(), token);
        for (const protocol of token.protocols) {
          if (!this.protocols.includes(protocol)) {
            this.protocols.push(protocol);
          }
        }
        for (const buildingBlock of token.buildingBlocks) {
          if (!this.buildingBlocks.includes(buildingBlock)) {
            this.buildingBlocks.push(buildingBlock);
          }
        }
      }
    }
    this.pendleTokens = this.availablePendleTokens[network] ?? [];
    if (this.pendleTokens.length > 0) {
      this.protocols.push(Protocols.PENDLE);
    }
    this.aaveDebtTokens = this.availableAaveDebtTokens[network] ?? [];
    if (this.aaveDebtTokens.length > 0) {
      this.protocols.push(Protocols.AAVE);
    }
    this.compoundDebtTokens = this.availableCompoundDebtTokens[network] ?? [];
    if (this.compoundDebtTokens.length > 0) {
      this.protocols.push(Protocols.COMPOUND);
    }
    this.siloTokens = this.availableSiloTokens[network] ?? [];
    if (this.siloTokens.length > 0) {
      this.protocols.push(Protocols.SILO);
    }
  }

  /**
   * Get all available tokens in Arbitrum
   * @returns Array of all tokens
   */
  public getAllGeneralTokens(): Token[] {
    return Array.from(this.generalTokens.values());
  }

  /**
   * Get all available pendle tokens in Arbitrum
   * @returns Array of all pendle tokens
   */
  public getAllPendleTokens(): ExtendedPendleToken[] {
    return this.pendleTokens;
  }

  /**
   * Get all available aave debt tokens in Arbitrum
   * @returns Array of all aave debt tokens
   */
  public getAllAaveDebtTokens(): AaveDebtToken[] {
    return this.aaveDebtTokens;
  }

  /**
   * Get all available compound debt tokens in Arbitrum
   * @returns Array of all compound debt tokens
   */
  public getAllCompoundDebtTokens(): CompoundDebtToken[] {
    return this.compoundDebtTokens;
  }

  /**
   * Get all available silo tokens in Arbitrum
   * @returns Array of all silo tokens
   */
  public getAllSiloTokens(): ExtendedSiloToken[] {
    return this.siloTokens;
  }

  /**
   * Get tokens filtered by protocol
   * @param protocol - Protocol name or identifier
   * @returns Array of tokens for the specified protocol
   */
  public getTokensByProtocol(
    protocol: Protocols,
  ): Token[] | ExtendedPendleToken[] | ExtendedSiloToken[] {
    if (protocol === Protocols.PENDLE) {
      return this.pendleTokens;
    }
    if (protocol === Protocols.SILO) {
      return this.siloTokens;
    }
    // First get all tokens that have the protocol
    const tokensWithProtocol = Array.from(this.generalTokens.values()).filter(
      (token: Token) => token.protocols.includes(protocol),
    );

    // Create new tokens with filtered building blocks
    return tokensWithProtocol.map((token: Token) => ({
      ...token,
      protocols: [protocol],
      buildingBlocks: token.buildingBlocks.filter(
        (buildingBlock: BuildingBlock) =>
          ProtocolsByBuildingBlock[buildingBlock]?.includes(protocol),
      ),
    }));
  }

  /**
   * Get tokens filtered by building block
   * @param buildingBlock - Building block category
   * @returns Array of tokens for the specified building block
   */
  public getTokensByBuildingBlock(buildingBlock: BuildingBlock): Token[] {
    // First get all tokens that have the building block
    const tokensWithBuildingBlock = Array.from(
      this.generalTokens.values(),
    ).filter((token: Token) => {
      return token.buildingBlocks.includes(buildingBlock);
    });

    // Create new tokens with filtered protocols
    return tokensWithBuildingBlock.map((token: Token) => ({
      ...token,
      buildingBlocks: [buildingBlock],
      protocols: token.protocols.filter((protocol: Protocols) =>
        ProtocolsByBuildingBlock[buildingBlock]?.includes(protocol),
      ),
    }));
  }

  /**
   * Get token by symbol
   * @param symbol - Token symbol
   * @returns Token
   */
  public getTokenFromSymbol(symbol: string): Token {
    const token = Array.from(this.generalTokens.values()).find(
      (token: Token) => token.symbol === symbol,
    );
    if (!token) {
      throw new Error(`Token with symbol ${symbol} not found`);
    }
    return token;
  }

  /**
   * Get token by address
   * @param address - Token address
   * @returns Token or pendle token
   */
  public getToken(address: string): Token | ExtendedPendleToken {
    const token = this.generalTokens.get(address.toLowerCase());
    const pendleToken = this.pendleTokens.find(
      (token: ExtendedPendleToken) =>
        token.address.toLowerCase() === address.toLowerCase(),
    );
    if (token) {
      return token;
    } else if (pendleToken) {
      return pendleToken;
    }
    throw new Error(`Token with address ${address} not found`);
  }

  /**
   * Get tokens by addresses
   * @param addresses - Array of token addresses
   * @returns Array of tokens
   */
  public getTokens(addresses: string[]): Token[] {
    const tokens: Token[] = [];
    for (const address of addresses) {
      const token = this.generalTokens.get(address);
      if (token) {
        tokens.push(token);
      }
    }
    return tokens;
  }

  /**
   * Get debt token by underlying address
   * @param underlyingAddress - Underlying token address
   * @param protocol - Protocol name or identifier
   * @returns Debt token
   */
  public getDebtToken(
    underlyingAddress: string,
    protocol: Protocols,
  ): AaveDebtToken | CompoundDebtToken {
    if (
      protocol !== Protocols.AAVE &&
      protocol !== Protocols.SILO &&
      protocol !== Protocols.COMPOUND
    ) {
      throw new Error(`Protocol ${protocol} is not supported`);
    }
    let debtToken;
    if (protocol === Protocols.AAVE) {
      debtToken = this.aaveDebtTokens.find(
        (token: AaveDebtToken) =>
          token.underlyingAddress.toLowerCase() ===
          underlyingAddress.toLowerCase(),
      );
    } else if (protocol === Protocols.COMPOUND) {
      debtToken = this.compoundDebtTokens.find(
        (token: CompoundDebtToken) =>
          token.underlyingAddress.toLowerCase() ===
          underlyingAddress.toLowerCase(),
      );
    }
    if (!debtToken) {
      throw new Error(`Debt token with address ${underlyingAddress} not found`);
    }
    return debtToken;
  }
}

export * from './types';
