import { ContractAddressMapping, ContractsEnum, ContractsMapping } from '@/contracts'

export const getWagmiContractParams = (chain: number, contractName: ContractsEnum) => {
  try {
    const contractAddress = ContractAddressMapping[chain][contractName]
    const contract = require(`../contracts/${ContractsMapping[contractName]}.json`)

    return {
      addressOrName: contractAddress,
      contractInterface: contract.abi,
    }
  } catch (error) {
    console.log('[Wagmi] Contract does not exist!')
    return {
      addressOrName: '',
      contractInterface: [],
    }
  }
}
