export const compileFile = (entireList: string[]) => {
  let rawFile = `
    import { Token, Protocols, BuildingBlock } from '../../types';
    
    export const tokens: Token[] = [${entireList}]
    `;
  // Fixing Building Blocks
  rawFile = rawFile.replace(/"SWAP"/g, 'BuildingBlock.SWAP');
  rawFile = rawFile.replace(/"WITHDRAW"/g, 'BuildingBlock.WITHDRAW');
  rawFile = rawFile.replace(/"LEND"/g, 'BuildingBlock.LEND');
  rawFile = rawFile.replace(/"REPAY"/g, 'BuildingBlock.REPAY');
  rawFile = rawFile.replace(/"BORROW"/g, 'BuildingBlock.BORROW');
  rawFile = rawFile.replace(/"DEPOSIT"/g, 'BuildingBlock.DEPOSIT');
  rawFile = rawFile.replace(/"CREATE_LP"/g, 'BuildingBlock.CREATE_LP');
  rawFile = rawFile.replace(/"FLASHLOAN"/g, 'BuildingBlock.FLASHLOAN');
  rawFile = rawFile.replace(
    /"PROVIDE_LIQUIDITY"/g,
    'BuildingBlock.PROVIDE_LIQUIDITY',
  );
  rawFile = rawFile.replace(
    /"REMOVE_LIQUIDITY"/g,
    'BuildingBlock.REMOVE_LIQUIDITY',
  );
  // Fixing Protocols
  rawFile = rawFile.replace(/"OPENOCEAN"/g, 'Protocols.OPENOCEAN');
  rawFile = rawFile.replace(/"UNISWAP"/g, 'Protocols.UNISWAP');
  rawFile = rawFile.replace(/"AAVE"/g, 'Protocols.AAVE');
  rawFile = rawFile.replace(/"COMPOUND"/g, 'Protocols.COMPOUND');
  rawFile = rawFile.replace(/"PENDLE"/g, 'Protocols.PENDLE');
  rawFile = rawFile.replace(/"SILO"/g, 'Protocols.SILO');
  rawFile = rawFile.replace(/"MORPHO"/g, 'Protocols.MORPHO');
  rawFile = rawFile.replace(/"BALANCER"/g, 'Protocols.BALANCER');

  return rawFile;
};
