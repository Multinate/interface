import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractRead } from 'wagmi'
import { ContractsEnum } from '@/contracts'

/*
  To check whether is a Charity (Creator's Address) has been attested and verified to be legitimate
*/
const useGetCharityOrgEligible = (address: string) => {
  const [data, setData] = useState<boolean>(false)
  const contractParams = getWagmiContractParams(ContractsEnum.MAIN)

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
      setData(rawData as boolean)
    }
  }, [rawData])

  return { data, isLoading, isError }
}

export default useGetCharityOrgEligible
