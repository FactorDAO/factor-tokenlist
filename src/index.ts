import { ChainId, ChainIdToNetwork } from '@factordao/sdk';
import { BuildingBlock } from '@factordao/sdk-studio';
import { arbitrumTokens } from './arbitrum';
import { Token, Protocols } from './types';

export class FactorTokenlist {
  private tokens: Map<string, Token>;
  public protocols: Protocols[];
  public buildingBlocks: BuildingBlock[];
  private availableTokens: Record<string, Token[]>;

  constructor(chainId: ChainId) {
    this.tokens = new Map();
    this.availableTokens = {
      arbitrum: arbitrumTokens,
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
  }

  /**
   * Get all available tokens in Arbitrum
   * @returns Array of all tokens
   */
  public getAllTokens(): Token[] {
    return Array.from(this.tokens.values());
  }

  /**
   * Get tokens filtered by protocol
   * @param protocol - Protocol name or identifier
   * @returns Array of tokens for the specified protocol
   */
  public getTokensByProtocol(protocol: Protocols): Token[] {
    return Array.from(this.tokens.values()).filter((token: Token) =>
      token.protocols.includes(protocol),
    );
  }

  /**
   * Get tokens filtered by building block
   * @param buildingBlock - Building block category
   * @returns Array of tokens for the specified building block
   */
  public getTokensByBuildingBlock(buildingBlock: BuildingBlock): Token[] {
    return Array.from(this.tokens.values()).filter((token: Token) =>
      token.buildingBlocks.includes(buildingBlock),
    );
  }
}

export * from './types';
