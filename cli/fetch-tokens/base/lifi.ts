import {
  FactorTokenlist,
  Protocols,
  ChainId,
  BuildingBlock,
} from '../../../src';
import { exec } from 'child_process';
import { tokens } from '../../../src/chains/base/general';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';

async function main() {
  const endpoint = 'https://li.quest/v1/tokens?chains=BAS';
  const response = await fetch(endpoint);
  const data = await response.json();
  const lifiTokens = data.tokens['8453'];
  const tokenList = new FactorTokenlist(ChainId.BASE);
  for (const token of lifiTokens) {
    try {
      const checkToken = tokenList.getToken(token.address) as any;
      if (checkToken) {
        console.log(
          '🤌 Token already exists:',
          checkToken?.symbol,
          'checking logo..',
        );
        if (token.logoURI) {
          if (
            !fs.existsSync(`./assets/base/${token.symbol.toUpperCase()}.png`)
          ) {
            console.log('🤌 Downloading logo from:', token.logoURI);
            await fetch(token.logoURI)
              .then((res) => res.arrayBuffer())
              .then((buffer) => {
                fs.writeFileSync(
                  `./assets/base/${token.symbol.toUpperCase()}.png`,
                  Buffer.from(buffer),
                );
              });
          } else {
            console.log('🤌 Logo already exists:', token.symbol);
          }
        }
      }
    } catch (e: any) {
      console.log('👀 Error:', e.message);
      tokens.push({
        address: token.address,
        symbol: token.symbol,
        name: token.name,
        decimals: token.decimals,
        protocols: [Protocols.UNISWAP, Protocols.OPENOCEAN],
        buildingBlocks: [
          BuildingBlock.DEPOSIT,
          BuildingBlock.WITHDRAW,
          BuildingBlock.SWAP,
          BuildingBlock.CREATE_LP,
          BuildingBlock.PROVIDE_LIQUIDITY,
        ],
      });
    }
  }

  const entireList = tokens.map((token) => {
    if (fs.existsSync(`./assets/base/${token.symbol.toUpperCase()}.png`)) {
      token.logoUrl = `https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/base/${token.symbol.toUpperCase()}.png`;
    }
    return JSON.stringify(token);
  });
  const rawFile = compileFile(entireList);
  // Save the file
  fs.writeFileSync('./src/chains/base/general.ts', rawFile);
  exec('yarn format');
  console.log('🎉 Now tokens are:', tokens.length);
}

main();
