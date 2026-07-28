/**
 * Robinhood (4663) logo enrichment — Stock Tokens from Robinhood's own API.
 *
 * Source of truth for equities/ETFs:
 *   GET https://api.robinhood.com/rhj/assets  → asset.logoUrl
 *   (CDN: https://cdn.robinhood.com/ncw_assets/logos/<lowercase-address>.png)
 *   Docs: https://docs.robinhood.com/chain/stock-token-apis/
 *
 * Non-stock legs (USDG / WETH / steakUSDG) are not in `/rhj/assets`:
 *   - USDG / WETH → LiFi logoURI, mirrored under assets/robinhood/
 *   - steakUSDG   → DefiLlama Steakhouse icon, mirrored
 *
 * Stock `logoUrl` points at the live Robinhood CDN (not a local mirror) so
 * when RH replaces the current shared placeholder PNGs, Mandate picks them
 * up without a tokenlist republish.
 *
 * Usage (from repo root):
 *   npx ts-node cli/fetch-tokens/robinhood/lifi.ts
 */
import { ChainId, FactorTokenlist } from '../../../src';
import { tokens } from '../../../src/chains/robinhood/general';
import { exec } from 'child_process';
import fs from 'fs';
import { compileFile } from '../../utils/format-file';

const ASSETS_DIR = './assets/robinhood';
const RAW_BASE =
  'https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/robinhood';
const RH_ASSETS = 'https://api.robinhood.com/rhj/assets';
const STEAK_FALLBACK = 'https://icons.llama.fi/steakhouse-financial.jpg';

async function download(url: string): Promise<Buffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log('⚠️  HTTP', res.status, url);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    return buf.length >= 64 ? buf : null;
  } catch (e: any) {
    console.log('⚠️  Download failed:', e.message);
    return null;
  }
}

function rhCdnLogo(address: string): string {
  return `https://cdn.robinhood.com/ncw_assets/logos/${address.toLowerCase()}.png`;
}

async function main() {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });

  console.log(
    'Curated RHC tokens:',
    new FactorTokenlist(ChainId.ROBINHOOD).getAllGeneralTokens().length,
  );

  // 1) Official Robinhood Stock Token metadata
  const rhJson = await (await fetch(RH_ASSETS)).json();
  const rhAssets: Array<{
    tokenSymbol: string;
    logoUrl?: string;
    deployments?: Array<{ contractAddress: string; chainId: number }>;
  }> = rhJson.assets ?? [];

  const bySymbol = new Map(
    rhAssets.map((a) => [a.tokenSymbol.toUpperCase(), a]),
  );
  const byAddress = new Map<string, (typeof rhAssets)[0]>();
  for (const a of rhAssets) {
    for (const d of a.deployments ?? []) {
      if (d.chainId === 4663) {
        byAddress.set(d.contractAddress.toLowerCase(), a);
      }
    }
  }
  console.log('Robinhood /rhj/assets:', rhAssets.length);

  // 2) LiFi for non-stock (USDG / WETH)
  const lifiJson = await (
    await fetch('https://li.quest/v1/tokens?chains=4663')
  ).json();
  const lifiByAddr = new Map(
    ((lifiJson.tokens?.['4663'] ?? []) as Array<{
      address: string;
      logoURI?: string;
    }>).map((t) => [t.address.toLowerCase(), t]),
  );

  let rhHits = 0;
  let mirrored = 0;

  for (const token of tokens) {
    const sym = token.symbol.toUpperCase();
    const rh =
      byAddress.get(token.address.toLowerCase()) || bySymbol.get(sym);

    if (rh) {
      // Prefer API logoUrl; fall back to documented CDN pattern.
      const logo =
        rh.logoUrl ||
        rhCdnLogo(
          rh.deployments?.find((d) => d.chainId === 4663)?.contractAddress ||
            token.address,
        );
      token.logoUrl = logo;
      rhHits++;
      console.log('🏦 Robinhood', sym, logo);
      continue;
    }

    // Non-stock: mirror into assets/robinhood like Base/ETH LiFi scripts
    const fileName = `${sym}.png`;
    const dest = `${ASSETS_DIR}/${fileName}`;
    let src =
      lifiByAddr.get(token.address.toLowerCase())?.logoURI ||
      (sym === 'STEAKUSDG' ? STEAK_FALLBACK : undefined);

    if (src && !fs.existsSync(dest)) {
      console.log('🤌 Mirror', sym, 'from', src.slice(0, 60));
      const buf = await download(src);
      if (buf) {
        fs.writeFileSync(dest, buf);
        mirrored++;
      }
    } else if (fs.existsSync(dest)) {
      console.log('✅ Mirror exists', sym);
    } else {
      console.log('👀 No logo source for', sym);
    }

    if (fs.existsSync(dest)) {
      token.logoUrl = `${RAW_BASE}/${fileName}`;
    }
  }

  const entireList = tokens.map((t) => JSON.stringify(t));
  fs.writeFileSync('./src/chains/robinhood/general.ts', compileFile(entireList));
  exec('npx prettier --write ./src/chains/robinhood/general.ts');
  console.log(
    `🎉 logoUrl set: Robinhood=${rhHits}, mirrored=${mirrored}, total with logo=${tokens.filter((t) => t.logoUrl).length}/${tokens.length}`,
  );
}

main();
