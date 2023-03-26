import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractRead } from 'wagmi'

const useGetAttestation = () => {
  const [data, setData] = useState<boolean>(false)
  const contractParams = getWagmiContractParams('attestation')

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
