import {
  FactorTokenlist,
  ChainId,
  Protocols,
  AaveToken,
  BuildingBlock,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/optimism/aave';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { createPublicClient, http, erc20Abi } from 'viem';
import { optimism } from 'viem/chains';
import { aaveAbi } from '../../utils/aaveAbi';

/**
 * AAVE TOKEN LIST CAN BE FOUND HERE:
 * https://optimistic.etherscan.io/address/0x7F23D86Ee20D869112572136221e173428DD740B#readContract
 * By calling: getAllReservesTokens() to get all tokens
 * then calling one by one:
 * getReserveTokensAddresses(address) to get the aToken and variableDebtToken
 */

type AaveOnchainToken = {
  symbol: string;
  tokenAddress: `0x${string}`;
};
const AaveProtocolDataProvider = '0x7F23D86Ee20D869112572136221e173428DD740B';

async function main() {
  const tokenList = new FactorTokenlist(ChainId.OPTIMISM);
  const client = createPublicClient({
    chain: optimism,
    transport: http(optimism.rpcUrls.default.http[0]),
  });
  const aaveTokens = (await client.readContract({
    address: AaveProtocolDataProvider,
    abi: aaveAbi,
    functionName: 'getAllReservesTokens',
  })) as AaveOnchainToken[];

  console.log(aaveTokens);

  for (const token of aaveTokens) {
    try {
      const checkToken = tokenList.getDebtToken(
        token.tokenAddress,
        Protocols.AAVE,
      ) as any as AaveToken;
      if (checkToken) {
        console.log('🤌 Token already exists:', checkToken.symbol);
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      const reserveTokensAddresses = (await client.readContract({
        address: AaveProtocolDataProvider,
        abi: aaveAbi,
        functionName: 'getReserveTokensAddresses',
        args: [token.tokenAddress],
      })) as any;
      console.log('👀 reserveTokensAddresses', reserveTokensAddresses);
      const aTokenDecimals = await client.readContract({
        address: reserveTokensAddresses[0],
        abi: erc20Abi,
        functionName: 'decimals',
      });
      console.log('👀 aTokenDecimals', aTokenDecimals);
      const aTokenSymbol = await client.readContract({
        address: reserveTokensAddresses[0],
        abi: erc20Abi,
        functionName: 'symbol',
      });
      console.log('👀 aTokenSymbol', aTokenSymbol);
      tokens.push({
        aToken: reserveTokensAddresses[0],
        variableDebtToken: reserveTokensAddresses[2],
        symbol: aTokenSymbol,
        decimals: aTokenDecimals,
        underlyingAddress: token.tokenAddress,
        underlyingSymbol: token.symbol,
        protocols: [Protocols.AAVE],
        buildingBlocks: [
          BuildingBlock.LEND,
          BuildingBlock.BORROW,
          BuildingBlock.WITHDRAW,
          BuildingBlock.REPAY,
        ],
      });
      console.log('🔥 Pushing token:', aTokenSymbol);
    }
  }

  const entireList = tokens.map((token) => {
    return JSON.stringify(token);
  });
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: AaveToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { AaveToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/optimism/aave.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
