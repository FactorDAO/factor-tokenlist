import { FactorTokenlist, ChainId, Protocols } from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/base/aave';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { createPublicClient, http, erc20Abi } from 'viem';
import { base } from 'viem/chains';
import { aaveAbi } from '../../utils/aaveAbi';

/**
 * AAVE TOKEN LIST CAN BE FOUND HERE:
 * https://basescan.org/address/0xd82a47fdebB5bf5329b09441C3DaB4b5df2153Ad#readContract
 * By calling: getAllReservesTokens() to get all tokens
 * then calling one by one:
 * getReserveTokensAddresses(address) to get the aToken and variableDebtToken
 */

type AaveToken = {
  symbol: string;
  tokenAddress: `0x${string}`;
};
const AaveProtocolDataProvider = '0xd82a47fdebB5bf5329b09441C3DaB4b5df2153Ad';

async function main() {
  const tokenList = new FactorTokenlist(ChainId.BASE);
  const client = createPublicClient({
    chain: base,
    transport: http(base.rpcUrls.default.http[0]),
  });
  const aaveTokens = (await client.readContract({
    address: AaveProtocolDataProvider,
    abi: aaveAbi,
    functionName: 'getAllReservesTokens',
  })) as AaveToken[];

  console.log(aaveTokens);

  for (const token of aaveTokens) {
    try {
      const checkToken = tokenList.getDebtToken(
        token.tokenAddress,
        Protocols.AAVE,
      );
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
    'export const tokens: AaveDebtToken[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { AaveDebtToken } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/base/aave.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
