import { ethers } from 'ethers'
import config from './Config'

export const getWagmiContractParams = (contractName: string) => {
  if (!config.contract_address)
    return {
      addressOrName: config.contract_address,
      contractInterface: [],
    }

  try {
    // const contract = require(`../contracts/${chain}/${envConfig.CONTRACT_NAME}.json`);
    const contract = require(`../contracts/mainnet/${contractName}.json`)

    return {
      addressOrName: config.contract_address,
      contractInterface: contract.abi,
    }
  } catch (error) {
    console.log('[Wagmi] Contract does not exist!')
    return {
      addressOrName: config.contract_address,
      contractInterface: [],
    }
  }
}
