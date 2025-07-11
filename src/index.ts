// Import tokens for Arbitrum
import { tokens as arbitrum } from './chains/arbitrum/general';
import { tokens as arbitrumPendle } from './chains/arbitrum/pendle';
import { tokens as arbitrumAave } from './chains/arbitrum/aave';
import { tokens as arbitrumCompoundDebt } from './chains/arbitrum/compound';
import { tokens as arbitrumSilo } from './chains/arbitrum/silo';
import { tokens as arbitrumProVaults } from './chains/arbitrum/pro-vaults';
import { tokens as arbitrumEuler } from './chains/arbitrum/euler';
import { tokens as optimism } from './chains/optimism/general';
import { tokens as optimismAave } from './chains/optimism/aave';
import { tokens as optimismCompoundDebt } from './chains/optimism/compound';
import { tokens as optimismPendle } from './chains/optimism/pendle';
import { tokens as optimismSilo } from './chains/optimism/silo';
import { tokens as base } from './chains/base/general';
import { tokens as baseAave } from './chains/base/aave';
import { tokens as baseCompoundDebt } from './chains/base/compound';
import { tokens as basePendle } from './chains/base/pendle';
import { tokens as baseSilo } from './chains/base/silo';
import { tokens as baseMorpho } from './chains/base/morpho';
import { tokens as arbitrumMorpho } from './chains/arbitrum/morpho';
import { tokens as optimismMorpho } from './chains/optimism/morpho';
import { tokens as sonic } from './chains/sonic/general';
import { tokens as sonicAave } from './chains/sonic/aave';
import { tokens as sonicSiloV2 } from './chains/sonic/silo-v2';
import { tokens as arbitrumBalancer } from './chains/arbitrum/balancer';
import { tokens as optimismBalancer } from './chains/optimism/balancer';
import { tokens as baseBalancer } from './chains/base/balancer';
import { tokens as sonicBalancer } from './chains/sonic/balancer';
import { tokens as ethereum } from './chains/ethereum/general';

// Import types
import {
  Token,
  Protocols,
  ProtocolsByBuildingBlock,
  ExtendedPendleToken,
  AaveToken,
  CompoundToken,
  MorphoToken,
  ExtendedSiloToken,
  BuildingBlock,
  ChainId,
  ChainIdToNetwork,
  SiloAsset,
  SiloV2Token,
  BalancerToken,
  EulerToken,
} from './types';

export class FactorTokenlist {
  private chainId: ChainId;
  private generalTokens: Map<string, Token>;
  private proVaultsTokens: Token[];
  public protocols: Protocols[];
  public buildingBlocks: BuildingBlock[];
  private availableProVaultsTokens: Record<string, Token[]>;
  private availableGeneralTokens: Record<string, Token[]>;
  private availablePendleTokens: Record<string, ExtendedPendleToken[]>;
  private availableAaveTokens: Record<string, AaveToken[]>;
  private availableCompoundTokens: Record<string, CompoundToken[]>;
  private availableSiloTokens: Record<string, ExtendedSiloToken[]>;
  private availableMorphoTokens: Record<string, MorphoToken[]>;
  private availableSiloV2Tokens: Record<string, SiloV2Token[]>;
  private availableBalancerTokens: Record<string, BalancerToken[]>;
  private availableEulerTokens: Record<string, EulerToken[]>;
  private Aave: AaveToken[];
  private PendleTokens: ExtendedPendleToken[];
  private SiloTokens: ExtendedSiloToken[];
  private BalancerTokens: BalancerToken[];
  private CompoundTokens: CompoundToken[];
  private MorphoTokens: MorphoToken[];
  private SiloV2Tokens: SiloV2Token[];
  private EulerTokens: EulerToken[];

  constructor(chainId: ChainId) {
    this.chainId = chainId;
    this.generalTokens = new Map();
    this.availableGeneralTokens = {
      arbitrum,
      optimism,
      base,
      sonic,
      ethereum,
    };
    this.availablePendleTokens = {
      arbitrum: arbitrumPendle,
      optimism: optimismPendle,
      base: basePendle,
    };
    this.availableAaveTokens = {
      arbitrum: arbitrumAave,
      optimism: optimismAave,
      base: baseAave,
      sonic: sonicAave,
    };
    this.availableCompoundTokens = {
      arbitrum: arbitrumCompoundDebt,
      optimism: optimismCompoundDebt,
      base: baseCompoundDebt,
    };
    this.availableSiloTokens = {
      arbitrum: arbitrumSilo,
      optimism: optimismSilo,
      base: baseSilo,
    };
    this.availableMorphoTokens = {
      arbitrum: arbitrumMorpho,
      optimism: optimismMorpho,
      base: baseMorpho,
    };
    this.availableSiloV2Tokens = {
      sonic: sonicSiloV2,
    };
    this.availableBalancerTokens = {
      arbitrum: arbitrumBalancer,
      optimism: optimismBalancer,
      base: baseBalancer,
      sonic: sonicBalancer,
    };
    this.availableEulerTokens = {
      arbitrum: arbitrumEuler,
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
    // Add pendle tokens
    this.PendleTokens = this.availablePendleTokens[network] ?? [];
    if (this.PendleTokens.length > 0) {
      this.protocols.push(Protocols.PENDLE);
    }
    // Add aave debt tokens
    this.Aave = this.availableAaveTokens[network] ?? [];
    if (this.Aave.length > 0) {
      this.protocols.push(Protocols.AAVE);
    }
    // Add compound debt tokens
    this.CompoundTokens = this.availableCompoundTokens[network] ?? [];
    if (this.CompoundTokens.length > 0) {
      this.protocols.push(Protocols.COMPOUND);
    }
    // Add silo tokens
    this.SiloTokens = this.availableSiloTokens[network] ?? [];
    if (this.SiloTokens.length > 0) {
      this.protocols.push(Protocols.SILO);
    }
    // Add silo v2 tokens
    this.SiloV2Tokens = this.availableSiloV2Tokens[network] ?? [];
    if (this.SiloV2Tokens.length > 0) {
      this.protocols.push(Protocols.SILO_V2);
    }
    // Add morpho tokens
    this.MorphoTokens = this.availableMorphoTokens[network] ?? [];
    if (this.MorphoTokens.length > 0) {
      this.protocols.push(Protocols.MORPHO);
    }
    // Add balancer tokens
    this.BalancerTokens = this.availableBalancerTokens[network] ?? [];
    if (this.BalancerTokens.length > 0) {
      this.protocols.push(Protocols.BALANCER);
    }
    // Add euler tokens
    this.EulerTokens = this.availableEulerTokens[network] ?? [];
    if (this.EulerTokens.length > 0) {
      this.protocols.push(Protocols.EULER);
    }
  }

  public async initializeProVaultsTokens(): Promise<void> {
    const network = ChainIdToNetwork[this.chainId];
    const proVaultsTokens = await arbitrumProVaults;
    this.availableProVaultsTokens = {
      arbitrum: proVaultsTokens,
    };
    // Add pro vaults tokens
    this.proVaultsTokens = this.availableProVaultsTokens[network] ?? [];
    if (this.proVaultsTokens.length > 0) {
      for (const token of this.proVaultsTokens) {
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
    return this.PendleTokens;
  }

  /**
   * Get all available aave debt tokens in Arbitrum
   * @returns Array of all aave debt tokens
   */
  public getAllAaveTokens(): AaveToken[] {
    return this.Aave;
  }

  /**
   * Get all available compound debt tokens in Arbitrum
   * @returns Array of all compound debt tokens
   */
  public getAllCompoundTokens(): CompoundToken[] {
    return this.CompoundTokens;
  }

  /**
   * Get all available silo tokens in Arbitrum
   * @returns Array of all silo tokens
   */
  public getAllSiloTokens(): ExtendedSiloToken[] {
    return this.SiloTokens;
  }

  /**
   * Get silo token by market address
   * @param marketAddress - Market address
   * @returns Silo token
   */
  public getSiloToken(marketAddress: string): ExtendedSiloToken {
    const market = this.SiloTokens.find(
      (token: ExtendedSiloToken) =>
        token.marketAddress.toLowerCase() === marketAddress.toLowerCase(),
    );
    if (!market) {
      throw new Error(`Silo market with address ${marketAddress} not found`);
    }
    return market;
  }

  /**
   * Get all available silo v2 tokens
   * @returns Array of all silo v2 tokens
   */
  public getAllSiloV2Tokens(): SiloV2Token[] {
    return this.SiloV2Tokens;
  }

  /**
   * Get silo v2 token by market address
   * @param marketAddress - Market address
   * @returns Silo v2 token
   */
  public getSiloV2Token(marketAddress: string): SiloV2Token {
    const token = this.SiloV2Tokens.find(
      (token: SiloV2Token) =>
        token.marketAddress.toLowerCase() === marketAddress.toLowerCase(),
    );
    if (!token) {
      throw new Error(
        `Silo v2 token with market address ${marketAddress} not found`,
      );
    }
    return token;
  }

  /**
   * Get all available euler tokens
   * @returns Array of all euler tokens
   */
  public getAllEulerTokens(): EulerToken[] {
    return this.EulerTokens;
  }

  /**
   * Get all available morpho tokens
   * @returns Array of all morpho tokens
   */
  public getAllMorphoTokens(): MorphoToken[] {
    return this.MorphoTokens;
  }

  /**
   * Get morpho token by market id
   * @param marketId - Market id
   * @returns Morpho token
   */
  public getMorphoToken(marketId: string): MorphoToken {
    const token = this.MorphoTokens.find(
      (token: MorphoToken) => token.id.toLowerCase() === marketId.toLowerCase(),
    );
    if (!token) {
      throw new Error(`Morpho token with id ${marketId} not found`);
    }
    return token;
  }

  /**
   * Get balancer token by address
   * @param address - Token address
   * @returns Balancer token
   */
  public getBalancerToken(address: string): BalancerToken {
    const token = this.BalancerTokens.find(
      (token: BalancerToken) =>
        token.address.toLowerCase() === address.toLowerCase(),
    );
    if (!token) {
      throw new Error(`Balancer token with address ${address} not found`);
    }
    return token;
  }

  /**
   * Get all available balancer tokens
   * @returns Array of all balancer tokens
   */
  public getAllBalancerTokens(): BalancerToken[] {
    return this.BalancerTokens;
  }

  /**
   * Get euler token by address
   * @param address - Token address
   * @returns Euler token
   */
  public getEulerToken(address: string): EulerToken {
    const token = this.EulerTokens.find(
      (token: EulerToken) =>
        token.address.toLowerCase() === address.toLowerCase(),
    );
    if (!token) {
      throw new Error(`Euler token with address ${address} not found`);
    }
    return token;
  }

  /**
   * Get compound token by base asset address
   * @param baseAssetAddress - Base asset address
   * @returns Compound token
   */
  public getCompoundToken(baseAssetAddress: string): CompoundToken {
    const token = this.CompoundTokens.find(
      (token: CompoundToken) =>
        token.baseAssetAddress.toLowerCase() === baseAssetAddress.toLowerCase(),
    );
    if (!token) {
      throw new Error(
        `Compound token with base asset address ${baseAssetAddress} not found`,
      );
    }
    return token;
  }

  /**
   * Get pendle token by market address
   * @param marketAddress - Market address
   * @returns Pendle token
   */
  public getPendleToken(marketAddress: string): ExtendedPendleToken {
    const token = this.PendleTokens.find(
      (token: ExtendedPendleToken) =>
        token.address.toLowerCase() === marketAddress.toLowerCase(),
    );
    if (!token) {
      throw new Error(
        `Pendle token with market address ${marketAddress} not found`,
      );
    }
    return token;
  }

  /**
   * Get all available pro vaults tokens
   * @returns Array of all pro vaults tokens
   */
  public getAllProVaultsTokens(): Token[] {
    return this.proVaultsTokens;
  }

  /**
   * Get tokens filtered by protocol
   * @param protocol - Protocol name or identifier
   * @returns Array of tokens for the specified protocol
   */
  public getTokensByProtocol(
    protocol: Protocols,
  ):
    | Token[]
    | ExtendedPendleToken[]
    | ExtendedSiloToken[]
    | AaveToken[]
    | CompoundToken[]
    | BalancerToken[]
    | MorphoToken[]
    | EulerToken[] {
    if (protocol === Protocols.PENDLE) {
      return this.PendleTokens;
    }
    if (protocol === Protocols.SILO) {
      return this.SiloTokens;
    }
    if (protocol === Protocols.AAVE) {
      return this.Aave;
    }
    if (protocol === Protocols.COMPOUND) {
      return this.CompoundTokens;
    }
    if (protocol === Protocols.MORPHO) {
      return this.MorphoTokens;
    }
    if (protocol === Protocols.BALANCER) {
      return this.BalancerTokens;
    }
    if (protocol === Protocols.EULER) {
      return this.EulerTokens;
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
  public getTokensByBuildingBlock(buildingBlock: BuildingBlock): any[] {
    // First get all tokens that have the building block
    const tokensWithBuildingBlock = Array.from(
      this.generalTokens.values(),
    ).filter((token: Token) => {
      return token.buildingBlocks.includes(buildingBlock);
    });
    // Get all tokens from the other protocols
    const aaveTokensWithBuildingBlock = this.Aave.filter((token: AaveToken) => {
      return token.buildingBlocks.includes(buildingBlock);
    });
    const pendleTokensWithBuildingBlock = this.PendleTokens.filter(
      (token: ExtendedPendleToken) => {
        return token.buildingBlocks.includes(buildingBlock);
      },
    );
    const siloTokensWithBuildingBlock = this.SiloTokens.filter(
      (token: ExtendedSiloToken) => {
        return token.buildingBlocks.includes(buildingBlock);
      },
    );
    const compoundTokensWithBuildingBlock = this.CompoundTokens.filter(
      (token: CompoundToken) => {
        return token.buildingBlocks.includes(buildingBlock);
      },
    );
    const morphoTokensWithBuildingBlock = this.MorphoTokens.filter(
      (token: MorphoToken) => {
        return token.buildingBlocks.includes(buildingBlock);
      },
    );
    const balancerTokensWithBuildingBlock = this.BalancerTokens.filter(
      (token: BalancerToken) => {
        return token.buildingBlocks.includes(buildingBlock);
      },
    );
    const eulerTokensWithBuildingBlock = this.EulerTokens.filter(
      (token: EulerToken) => {
        return token.buildingBlocks.includes(buildingBlock);
      },
    );
    const mergedTokens = [
      ...tokensWithBuildingBlock,
      ...aaveTokensWithBuildingBlock,
      ...pendleTokensWithBuildingBlock,
      ...siloTokensWithBuildingBlock,
      ...compoundTokensWithBuildingBlock,
      ...balancerTokensWithBuildingBlock,
      ...morphoTokensWithBuildingBlock,
      ...eulerTokensWithBuildingBlock,
    ];
    // Create new tokens with filtered protocols
    return mergedTokens.map((token: any) => ({
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
  public getToken(
    address: string,
  ):
    | Token
    | ExtendedPendleToken
    | ExtendedSiloToken
    | MorphoToken
    | BalancerToken
    | SiloV2Token
    | CompoundToken
    | AaveToken
    | EulerToken {
    const token = this.generalTokens.get(address.toLowerCase());
    const pendleToken = this.PendleTokens.find(
      (token: ExtendedPendleToken) =>
        token.address.toLowerCase() === address.toLowerCase(),
    );
    const siloToken = this.SiloTokens.find(
      (token: ExtendedSiloToken) =>
        token.marketAddress.toLowerCase() === address.toLowerCase(),
    );
    const morphoToken = this.MorphoTokens.find(
      (token: MorphoToken) =>
        token.collateralAsset.address.toLowerCase() === address.toLowerCase(),
    );
    const balancerToken = this.BalancerTokens.find(
      (token: BalancerToken) =>
        token.address.toLowerCase() === address.toLowerCase(),
    );
    const siloV2Token = this.SiloV2Tokens.find(
      (token: SiloV2Token) =>
        token.marketAddress.toLowerCase() === address.toLowerCase(),
    );
    const compoundToken = this.CompoundTokens.find(
      (token: CompoundToken) =>
        token.baseAssetAddress.toLowerCase() === address.toLowerCase(),
    );
    const aaveToken = this.Aave.find(
      (token: AaveToken) =>
        token.aToken.toLowerCase() === address.toLowerCase(),
    );
    const eulerToken = this.EulerTokens.find(
      (token: EulerToken) =>
        token.address.toLowerCase() === address.toLowerCase(),
    );
    if (token) {
      return token;
    } else if (pendleToken) {
      return pendleToken;
    } else if (siloToken) {
      return siloToken;
    } else if (morphoToken) {
      return morphoToken;
    } else if (balancerToken) {
      return balancerToken;
    } else if (siloV2Token) {
      return siloV2Token;
    } else if (compoundToken) {
      return compoundToken;
    } else if (aaveToken) {
      return aaveToken;
    } else if (eulerToken) {
      return eulerToken;
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
  ): AaveToken | CompoundToken | MorphoToken | EulerToken {
    if (
      protocol !== Protocols.AAVE &&
      protocol !== Protocols.SILO &&
      protocol !== Protocols.COMPOUND &&
      protocol !== Protocols.MORPHO &&
      protocol !== Protocols.EULER
    ) {
      throw new Error(`Protocol ${protocol} is not supported`);
    }
    let debtToken;
    if (protocol === Protocols.AAVE) {
      debtToken = this.Aave.find(
        (token: AaveToken) =>
          token.underlyingAddress.toLowerCase() ===
          underlyingAddress.toLowerCase(),
      );
    } else if (protocol === Protocols.COMPOUND) {
      debtToken = this.CompoundTokens.find(
        (token: CompoundToken) =>
          token.underlyingAddress.toLowerCase() ===
          underlyingAddress.toLowerCase(),
      );
    } else if (protocol === Protocols.MORPHO) {
      debtToken = this.MorphoTokens.find(
        (token: MorphoToken) =>
          token.collateralAsset.address.toLowerCase() ===
          underlyingAddress.toLowerCase(),
      );
    } else if (protocol === Protocols.EULER) {
      debtToken = this.EulerTokens.find(
        (token: EulerToken) =>
          token.asset.toLowerCase() === underlyingAddress.toLowerCase(),
      );
    }
    if (!debtToken) {
      throw new Error(`Debt token with address ${underlyingAddress} not found`);
    }
    return debtToken;
  }

  /**
   * Get underlying asset by address
   * @param address - Token address
   * @returns Underlying asset
   */
  public getUnderlyingAsset(address: string): any {
    let underlyingAsset;
    let protocol;
    underlyingAsset = this.Aave.find(
      (token: AaveToken) =>
        token.aToken.toLowerCase() === address.toLowerCase(),
    )?.underlyingAddress;
    if (underlyingAsset) {
      protocol = Protocols.AAVE;
    }
    if (!underlyingAsset) {
      underlyingAsset = this.CompoundTokens.find(
        (token: CompoundToken) =>
          token.baseAssetAddress.toLowerCase() === address.toLowerCase(),
      )?.underlyingAddress;
      if (underlyingAsset) {
        protocol = Protocols.COMPOUND;
      }
    }
    if (!underlyingAsset) {
      underlyingAsset = this.PendleTokens.find(
        (token: ExtendedPendleToken) =>
          token.address.toLowerCase() === address.toLowerCase(),
      )?.underlyingAsset.address;
      if (underlyingAsset) {
        protocol = Protocols.PENDLE;
      }
    }
    if (!underlyingAsset) {
      underlyingAsset = this.MorphoTokens.find(
        (token: MorphoToken) =>
          token.collateralAsset.address.toLowerCase() === address.toLowerCase(),
      )?.loanAsset.address;
      if (underlyingAsset) {
        protocol = Protocols.MORPHO;
      }
    }
    if (!underlyingAsset) {
      underlyingAsset = this.EulerTokens.find(
        (token: EulerToken) =>
          token.address.toLowerCase() === address.toLowerCase() ||
          token.dToken.toLowerCase() === address.toLowerCase(),
      )?.asset;
      if (underlyingAsset) {
        protocol = Protocols.EULER;
      }
    }
    if (!underlyingAsset) {
      throw new Error(`Underlying asset with address ${address} not found`);
    }
    return {
      underlyingAsset,
      protocol,
    };
  }

  /**
   * Get main asset by address
   * @param address - Token address
   * @returns Main asset
   */
  public getMainAsset(address: string): any {
    const allTokens = [
      ...this.availableAaveTokens[ChainIdToNetwork[this.chainId]],
      ...this.availablePendleTokens[ChainIdToNetwork[this.chainId]],
      ...this.availableSiloTokens[ChainIdToNetwork[this.chainId]],
      ...this.availableMorphoTokens[ChainIdToNetwork[this.chainId]],
      ...this.availableEulerTokens[ChainIdToNetwork[this.chainId]],
    ];
    const token = allTokens.find(
      (
        token:
          | AaveToken
          | ExtendedPendleToken
          | ExtendedSiloToken
          | MorphoToken
          | EulerToken,
      ) => {
        // Parsing Aave debt tokens
        if ('variableDebtToken' in token) {
          return (
            token.variableDebtToken.toLowerCase() === address.toLowerCase()
          );
        }
        // Parsing Pendle tokens
        if ('pt' in token) {
          return (
            token.pt.address.toLowerCase() === address.toLowerCase() ||
            token.yt.address.toLowerCase() === address.toLowerCase()
          );
        }
        // Parsing Silo tokens
        if ('marketAddress' in token) {
          return token.asset.find(
            (asset: SiloAsset) =>
              asset.debtToken.address.toLowerCase() === address.toLowerCase() ||
              asset.collateralToken.address.toLowerCase() ===
                address.toLowerCase() ||
              asset.collateralOnlyToken.address.toLowerCase() ===
                address.toLowerCase() ||
              asset.collateralToken.address.toLowerCase() ===
                address.toLowerCase(),
          );
        }
        // Parsing Morpho tokens
        if ('loanAsset' in token) {
          return (
            token.loanAsset.address.toLowerCase() === address.toLowerCase()
          );
        }
        // Parsing Euler tokens
        if ('asset' in token) {
          return token.asset.toLowerCase() === address.toLowerCase();
        }
      },
    );
    if (!token) {
      throw new Error(`Token with address ${address} not found`);
    }
    return token;
  }
}

export * from './types';
