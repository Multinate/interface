import { ContractAddressMapping, ContractsEnum, ContractsMapping } from '@/contracts'

export const getWagmiContractParams = (
  chain: number,
  contractName: ContractsEnum,
): { address: `0x${string}`; abi: any } => {
  try {
    const contractAddress = ContractAddressMapping[chain][contractName]
    const contract = require(`../contracts/${ContractsMapping[contractName]}.json`)
    return {
      address: contractAddress as `0x${string}`,
      abi: contract.abi,
    }
  } catch (error) {
    console.log('[Wagmi] Contract does not exist!')
    return {
      address: '0x',
      abi: [],
    }
  }
}
