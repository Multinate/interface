import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractWrite } from 'wagmi'
import { ContractsEnum } from '@/contracts'

/*
  To initialize a donation
*/
const useDonate = () => {
  const contractParams = getWagmiContractParams(100, ContractsEnum.DONATION)

  const [transactionHash, setTransactionHash] = useState<string>('')
  const [isDonating, setIsDonating] = useState<boolean>(false)

  const { data, isLoading, error, write, reset } = useContractWrite({
    mode: 'recklesslyUnprepared',
    ...contractParams,
    functionName: 'donate',
    chainId: 100,
  })

  const processTransaction = async () => {
    if (data) {
      const txnReceipt = await data.wait()
      setTransactionHash(txnReceipt.transactionHash)
      setIsDonating(false)
    }
  }

  useEffect(() => {
    if (data) {
      processTransaction()
    } else {
      setTransactionHash('')
    }
  }, [data])

  useEffect(() => {
    if (isLoading) {
      setIsDonating(true)
    } else {
      if (transactionHash) {
        setIsDonating(false)
      } else if (error) {
        setIsDonating(false)
      }
    }
  }, [isLoading])

  return { transactionHash, isDonating, error, write, reset }
}

export default useDonate
