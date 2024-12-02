import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-viem';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/hardhat-upgrades';
import dotenv from 'dotenv';
import 'hardhat-abi-exporter';
import 'hardhat-contract-sizer';
import 'hardhat-tracer';
import { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';

dotenv.config();

export const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          evmVersion: 'paris',
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    tenderly: {
      url: `https://rpc.tenderly.co/fork/${process.env.TENDERLY_FORK_ID}`,
      accounts: [
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      ],
    },
    hardhat: {
      initialBaseFeePerGas: 0,
      forking: {
        url: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        // blockNumber: 190172027,
        // blockNumber: 216180303,
        blockNumber: 259507474,
        // blockNumber: 159352258, // legacy before using OO JSON
        // blockNumber: 164068580, // switch to this for test Merkl ONLY
      },
      chainId: 42161,
    },

    local: {
      accounts: [
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
      ],
      url: `http://127.0.0.1:8545`,
    },
  },
  abiExporter: {
    path: './abis',
    runOnCompile: true,
    clear: true,
    flat: false,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 100000000,
  },
};

export default config;
