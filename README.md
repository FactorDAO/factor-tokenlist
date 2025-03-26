# Factor Tokenlist

This repository contains the tokenlist for Factor, which provides standardized token information for various chains and protocols including Arbitrum, Optimism, and Base and future Chains.

## Project Structure

The tokenlist is organized as follows:

- `src/`: Source code for the tokenlist
  - `chains/`: Contains token definitions organized by chain
    - `arbitrum/`: Arbitrum tokens
    - `optimism/`: Optimism tokens
    - `base/`: Base tokens
  - `types/`: TypeScript type definitions for tokens
- `assets/`: Asset files (like images)
- `cli/`: Command-line tools for the project

Each chain directory contains multiple files organized by protocol (e.g., aave.ts, compound.ts, pendle.ts, general.ts), where token definitions are stored.

## Token Structure

Tokens are defined with properties including:
- Address
- Symbol
- Name
- Decimals
- Associated protocols
- Building blocks (functionality)
- Other metadata specific to token types

## How to Use

The tokenlist can be imported in your project using:

```js
import { FactorTokenlist } from '@factordao/tokenlist';
import { ChainId } from '@factordao/tokenlist/types';

// Initialize the tokenlist for a specific chain
const tokenlist = new FactorTokenlist(ChainId.ARBITRUM_ONE);

// Get all tokens
const allTokens = tokenlist.getAllGeneralTokens();

// Get tokens by protocol
const aaveTokens = tokenlist.getTokensByProtocol(Protocols.AAVE);
```

## How to Contribute

We welcome contributions to the tokenlist. Here's how you can contribute:

1. **Fork the repository**  
   Click the "Fork" button at the top right of this repository to create your own copy.

2. **Clone your fork**  
   ```bash
   git clone https://github.com/YOUR_USERNAME/factor-tokenlist.git
   cd factor-tokenlist
   ```

3. **Create a new branch**  
   ```bash
   git checkout -b add-new-tokens
   ```

4. **Add your tokens**  
   - Locate the appropriate chain directory in `src/chain/<chain_name>`
   - Add your tokens to the relevant protocol file or create a new one if needed
   - Ensure your tokens follow the proper typing conventions

5. **Update the version**  
   Change the version number in `package.json` following semantic versioning:
   - Patch version (1.2.1 → 1.2.2) for bug fixes and minor changes
   - Minor version (1.2.1 → 1.3.0) for new tokens that don't break compatibility
   - Major version (1.2.1 → 2.0.0) for breaking changes

6. **Commit and push your changes**  
   ```bash
   git add .
   git commit -m "Add tokens for XYZ protocol"
   git push origin add-new-tokens
   ```

7. **Create a Pull Request**  
   - Go to your fork on GitHub
   - Click the "Compare & pull request" button
   - Submit the PR to the `main` branch of the original repository
   - Provide a detailed description of your changes

8. **Review Process**  
   - The Factor team will review your PR
   - We may request changes or provide feedback
   - Once approved, your changes will be merged into the main branch
   - After merging, the package will be published to npm

## License

MIT
