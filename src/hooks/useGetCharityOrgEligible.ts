import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractRead } from 'wagmi'
import { ContractsEnum } from '@/contracts'

/*
  To check whether is a Charity (Creator's Address) has been attested and verified to be legitimate
*/
const useGetCharityOrgEligible = (address: string) => {
  const [data, setData] = useState<boolean>(false)
  const contractParams = getWagmiContractParams(100, ContractsEnum.MULTINATE)

  const {
    data: rawData,
    isError,
    isLoading,
  } = useContractRead({
    ...contractParams,
    functionName: 'isCharityEligible',
    args: [address],
  })

  useEffect(() => {
    if (rawData) {
      setData(false)
    }
  }, [rawData])

  return { data, isLoading, isError }
}

export default useGetCharityOrgEligible
