import {
  FactorTokenlist,
  Protocols,
  BuildingBlock,
  ChainId,
  SiloV2Token,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/sonic/silo-v2';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';
import { createPublicClient, http, erc20Abi, PublicClient } from 'viem';
import { sonic } from 'viem/chains';
import { siloV2Abi } from '../../utils/siloV2Abi';

async function returnTokenMetadata(
  client: PublicClient,
  address: `0x${string}`,
) {
  const name = await client.readContract({
    address,
    abi: erc20Abi,
    functionName: 'name',
  });
  const symbol = await client.readContract({
    address,
    abi: erc20Abi,
    functionName: 'symbol',
  });
  const decimals = await client.readContract({
    address,
    abi: erc20Abi,
    functionName: 'decimals',
  });

  return {
    address,
    symbol,
    name,
    decimals,
  };
}

async function main() {
  const siloTokens = JSON.parse(
    fs.readFileSync('./cli/fetch-tokens/sonic/silo/tokens-050825.json', 'utf8'),
  );

  for (const token of siloTokens) {
    try {
      const existingToken = tokens.find(
        (t) =>
          t.marketAddress.toLowerCase() === token.configAddress.toLowerCase(),
      );
      if (existingToken) {
        console.log('🤌 Token already exists:', existingToken.marketName);
        continue;
      }
      const client = createPublicClient({
        chain: sonic,
        transport: http(sonic.rpcUrls.default.http[0]),
      });

      const silos = (await client.readContract({
        address: token.configAddress as `0x${string}`,
        abi: siloV2Abi,
        functionName: 'getSilos',
      })) as any;

      console.log('Silo0:', silos[0]);
      console.log('Silo1:', silos[1]);

      const silo0ShareTokens = (await client.readContract({
        address: token.configAddress as `0x${string}`,
        abi: siloV2Abi,
        functionName: 'getShareTokens',
        args: [silos[0] as `0x${string}`],
      })) as any;
      console.log('Silo0 Share Tokens:', silo0ShareTokens);

      const silo1ShareTokens = (await client.readContract({
        address: token.configAddress as `0x${string}`,
        abi: siloV2Abi,
        functionName: 'getShareTokens',
        args: [silos[1] as `0x${string}`],
      })) as any;
      console.log('Silo1 Share Tokens:', silo1ShareTokens);
      // Get the token metadata for the silo0 share tokens
      const silo0ProtectedShareToken = await returnTokenMetadata(
        client,
        silo0ShareTokens[0] as `0x${string}`,
      );
      const silo0CollateralShareToken = await returnTokenMetadata(
        client,
        silo0ShareTokens[1] as `0x${string}`,
      );
      const silo0DebtShareToken = await returnTokenMetadata(
        client,
        silo0ShareTokens[2] as `0x${string}`,
      );
      // Get the token metadata for the silo1 share tokens
      const silo1ProtectedShareToken = await returnTokenMetadata(
        client,
        silo1ShareTokens[0] as `0x${string}`,
      );
      const silo1CollateralShareToken = await returnTokenMetadata(
        client,
        silo1ShareTokens[1] as `0x${string}`,
      );
      const silo1DebtShareToken = await returnTokenMetadata(
        client,
        silo1ShareTokens[2] as `0x${string}`,
      );

      // Create the silo token
      const siloToken: SiloV2Token = {
        marketName: `${token.silo0.symbol}/${token.silo1.symbol}`,
        marketAddress: token.configAddress as `0x${string}`,
        silo0: {
          underlyingAsset: {
            address: token.silo0.tokenAddress as `0x${string}`,
            symbol: token.silo0.symbol,
            name: token.silo0.name,
            decimals: token.silo0.decimals,
          },
          collateralToken: silo0CollateralShareToken,
          collateralOnlyToken: silo0ProtectedShareToken,
          debtToken: silo0DebtShareToken,
        },
        silo1: {
          underlyingAsset: {
            address: token.silo1.tokenAddress as `0x${string}`,
            symbol: token.silo1.symbol,
            name: token.silo1.name,
            decimals: token.silo1.decimals,
          },
          collateralToken: silo1CollateralShareToken,
          collateralOnlyToken: silo1ProtectedShareToken,
          debtToken: silo1DebtShareToken,
        },
        protocols: [Protocols.SILO],
        buildingBlocks: [BuildingBlock.LEND, BuildingBlock.BORROW],
      };

      tokens.push(siloToken);
      console.log('✅ Added token:', siloToken.marketName);
    } catch (e: any) {
      console.log('👀 Error:', e.message);
    }
  }

  const entireList = tokens.map((token) => JSON.stringify(token));
  let rawFile = compileFile(entireList);
  rawFile = rawFile.replace(
    'export const tokens: Token[] = [',
    'export const tokens: SiloV2Token[] = [',
  );
  rawFile = rawFile.replace(
    "import { Token, Protocols, BuildingBlock } from '../../types';",
    "import { Token, Protocols, BuildingBlock, SiloV2Token } from '../../types';",
  );
  // Save the file
  fs.writeFileSync('./src/chains/sonic/silo.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
