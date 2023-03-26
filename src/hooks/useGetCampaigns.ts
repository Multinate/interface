import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractRead } from 'wagmi'
import { ContractsEnum } from '@/contracts'

/*
  To get all running campaigns
*/
const useGetCampaigns = () => {
  const [data, setData] = useState<boolean>(false)
  const contractParams = getWagmiContractParams(100, ContractsEnum.MULTINATE)
  const {
    data: rawData,
    isError,
    isLoading,
  } = useContractRead({
    ...contractParams,
    functionName: 'nextCampaignId',
  })

  useEffect(() => {
    if (rawData) {
      // setData(rawData as boolean)
      console.log('test', rawData)
    }
  }, [rawData])

  return { data, isLoading, isError }
}

export default useGetCampaigns
