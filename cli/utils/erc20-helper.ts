import { ChainId, TokenMetadata } from '../../src/types';
import { http } from 'viem';
import { Address, createPublicClient, erc20Abi } from 'viem';
import { Token } from '../../src/types';
import { arbitrum, optimism, base, sonic } from 'viem/chains';

export class ERC20Helper {
  private readonly chainId: ChainId;
  private readonly alchemyApiKey: string;
  constructor(chainId: ChainId, alchemyApiKey: string) {
    this.chainId = chainId;
    this.alchemyApiKey = alchemyApiKey;
  }
  public async getTokenMetadata(tokenAddress: Address): Promise<TokenMetadata> {
    let chain: any = arbitrum;
    if (this.chainId === ChainId.OPTIMISM) {
      chain = optimism;
    } else if (this.chainId === ChainId.BASE) {
      chain = base;
    } else if (this.chainId === ChainId.SONIC) {
      chain = sonic;
    }
    const publicClient = createPublicClient({
      chain,
      transport: http(
        `${chain.rpcUrls['alchemy'] ? chain.rpcUrls['alchemy'].http[0] + `/${this.alchemyApiKey}` : chain.rpcUrls.default.http[0]}`,
      ),
    });
    try {
      const tokenMetadata = await publicClient.multicall({
        contracts: [
          {
            address: tokenAddress,
            abi: erc20Abi,
            functionName: 'decimals',
          },
          {
            address: tokenAddress,
            abi: erc20Abi,
            functionName: 'name',
          },
          {
            address: tokenAddress,
            abi: erc20Abi,
            functionName: 'symbol',
          },
        ],
      });
      return {
        address: tokenAddress,
        decimals: tokenMetadata[0].result as number,
        name: tokenMetadata[1].result as string,
        symbol: tokenMetadata[2].result as string,
      };
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      throw e;
    }
  }
}
