import {
  FactorTokenlist,
  ChainId,
  Protocols,
  BuildingBlock,
  AaveToken,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/sonic/aave';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { createPublicClient, http, erc20Abi } from 'viem';
import { sonic } from 'viem/chains';
import { aaveAbi } from '../../utils/aaveAbi';

/**
 * AAVE TOKEN LIST CAN BE FOUND HERE:
 * https://github.com/bgd-labs/aave-address-book/blob/main/src/AaveV3Sonic.sol
 * THEN READ FOR THE SPECIFIC 'AAVE_PROTOCOL_DATA_PROVIDER'
 * https://basescan.org/address/0x306c124fFba5f2Bc0BcAf40D249cf19D492440b9#readContract
 * By calling: getAllReservesTokens() to get all tokens
 * then calling one by one:
 * getReserveTokensAddresses(address) to get the aToken and variableDebtToken
 */

type AaveOnchainToken = {
  symbol: string;
  tokenAddress: `0x${string}`;
};
const AaveProtocolDataProvider = '0x306c124fFba5f2Bc0BcAf40D249cf19D492440b9';

async function main() {
  const tokenList = new FactorTokenlist(ChainId.SONIC);
  const client = createPublicClient({
    chain: sonic,
    transport: http(sonic.rpcUrls.default.http[0]),
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
  fs.writeFileSync('./src/chains/sonic/aave.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
