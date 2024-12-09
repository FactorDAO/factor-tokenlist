import { ChainId, ChainIdToNetwork } from '@factordao/sdk';
import { BuildingBlock } from '@factordao/sdk-studio';
import { tokens as arbitrum } from './chains/arbitrum';
import { tokens as arbitrumPendle } from './chains/arbitrum.pendle';
import { tokens as arbitrumAaveDebt } from './chains/arbitrum.aave';
import { tokens as arbitrumCompoundDebt } from './chains/arbitrum.compound';
import {
  Token,
  Protocols,
  ProtocolsByBuildingBlock,
  ExtendedPendleToken,
  AaveDebtToken,
  CompoundDebtToken,
} from './types';

export class FactorTokenlist {
  private tokens: Map<string, Token>;
  private pendleTokens: ExtendedPendleToken[];
  public protocols: Protocols[];
  public buildingBlocks: BuildingBlock[];
  private availableTokens: Record<string, Token[]>;
  private availablePendleTokens: Record<string, ExtendedPendleToken[]>;
  private availableAaveDebtTokens: Record<string, AaveDebtToken[]>;
  private availableCompoundDebtTokens: Record<string, CompoundDebtToken[]>;
  private aaveDebtTokens: AaveDebtToken[];
  private compoundDebtTokens: CompoundDebtToken[];

  constructor(chainId: ChainId) {
    this.tokens = new Map();
    this.availableTokens = {
      arbitrum,
    };
    this.availablePendleTokens = {
      arbitrum: arbitrumPendle,
    };
    this.availableAaveDebtTokens = {
      arbitrum: arbitrumAaveDebt,
    };
    this.availableCompoundDebtTokens = {
      arbitrum: arbitrumCompoundDebt,
    };
    this.protocols = [];
    this.buildingBlocks = [];
    this.initializeTokens(chainId);
  }

  private initializeTokens(chainId: ChainId): void {
    // Convert chainId to network
    const network = ChainIdToNetwork[chainId];
    // Check if tokens are available for the network
    if (!(network in this.availableTokens)) {
      throw new Error(`No tokens available for network ${network}`);
    }
    // Iterate over tokens for the network
    for (const token of this.availableTokens[network]) {
      this.tokens.set(token.address, token);
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
  }

  /**
   * Get all available tokens in Arbitrum
   * @returns Array of all tokens
   */
  public getAllTokens(): Token[] {
    return Array.from(this.tokens.values());
  }

  /**
   * Get all available pendle tokens in Arbitrum
   * @returns Array of all pendle tokens
   */
  public getAllPendleTokens(): ExtendedPendleToken[] {
    return this.pendleTokens;
  }

  public getAllAaveDebtTokens(): AaveDebtToken[] {
    return this.aaveDebtTokens;
  }

  public getAllCompoundDebtTokens(): CompoundDebtToken[] {
    return this.compoundDebtTokens;
  }

  /**
   * Get tokens filtered by protocol
   * @param protocol - Protocol name or identifier
   * @returns Array of tokens for the specified protocol
   */
  public getTokensByProtocol(
    protocol: Protocols,
  ): Token[] | ExtendedPendleToken[] {
    if (protocol === Protocols.PENDLE) {
      return this.pendleTokens;
    }
    // First get all tokens that have the protocol
    const tokensWithProtocol = Array.from(this.tokens.values()).filter(
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
    const tokensWithBuildingBlock = Array.from(this.tokens.values()).filter(
      (token: Token) => token.buildingBlocks.includes(buildingBlock),
    );

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
   * Get token by address
   * @param address - Token address
   * @returns Token or pendle token
   */
  public getToken(address: string): Token | ExtendedPendleToken {
    const token = this.tokens.get(address);
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
      const token = this.tokens.get(address);
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
  ): AaveDebtToken {
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
