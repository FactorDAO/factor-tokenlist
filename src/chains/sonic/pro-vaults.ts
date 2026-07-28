import { Token, Protocols, BuildingBlock, ChainId } from '../../types';

const getTokens = async (): Promise<Token[]> => {
  // TODO: Add Pro Vaults for Sonic
  return [];
  const endpoint = `-`;
  const query = `
  query ProVaults {
    vaults  {
      id
      name
      symbol
    }
  }
    `;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.vaults.map((vault: any) => ({
    chainId: ChainId.SONIC,
    address: vault.id,
    symbol: vault.symbol,
    name: vault.name,
    decimals: 18,
    buildingBlocks: [
      BuildingBlock.SWAP,
      BuildingBlock.DEPOSIT,
      BuildingBlock.CREATE_LP,
      BuildingBlock.PROVIDE_LIQUIDITY,
      BuildingBlock.WITHDRAW,
    ],
    protocols: [Protocols.OPENOCEAN, Protocols.UNISWAP],
  }));
};

export const tokens = getTokens();
