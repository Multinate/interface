import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractRead } from 'wagmi'
import { ContractsEnum } from '@/contracts'

const useGetAttestation = () => {
  const [data, setData] = useState<boolean>(false)
  const contractParams = getWagmiContractParams(ContractsEnum.ATTESTATION)

  const {
    data: rawData,
    isError,
    isLoading,
  } = useContractRead({
    ...contractParams,
    functionName: 'totalSupply',
  })

  useEffect(() => {
    if (rawData) {
      setData(rawData as boolean)
    }
  }, [rawData])

  return { data, isLoading, isError }
}

export default useGetAttestation
