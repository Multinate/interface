import { ContractsEnum, ContractsMapping } from '@/contracts'
import { ethers } from 'ethers'
import config from './Config'

export const getWagmiContractParams = (contractName: ContractsEnum) => {
  if (!config.contract_address)
    return {
      addressOrName: config.contract_address,
      contractInterface: [],
    }

  try {
    const contract = require(`../contracts/${ContractsMapping[contractName]}.json`)

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
