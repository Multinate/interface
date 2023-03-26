import { useState, useEffect } from 'react'
import { getWagmiContractParams } from '../utils/ContractsHelper'
import { useContractWrite } from 'wagmi'
import { ContractsEnum } from '@/contracts'

/*
  To initialize a withdraw
*/
const useWithdraw = () => {
  const contractParams = getWagmiContractParams(ContractsEnum.MAIN)

  const [transactionHash, setTransactionHash] = useState<string>('')
  const [isWithdrawing, setIsWithdrawing] = useState<boolean>(false)

  const { data, isLoading, error, write, reset } = useContractWrite({
    mode: 'recklesslyUnprepared',
    ...contractParams,
    functionName: 'withdraw',
    chainId: 137, // TODO: May need to change
  })

  const processTransaction = async () => {
    if (data) {
      const txnReceipt = await data.wait()
      setTransactionHash(txnReceipt.transactionHash)
      setIsWithdrawing(false)
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
      setIsWithdrawing(true)
    } else {
      if (transactionHash) {
        setIsWithdrawing(false)
      } else if (error) {
        setIsWithdrawing(false)
      }
    }
  }, [isLoading])

  // const handleWithdraw = async () => {
  //   if (write) {
  //     write({
  //       recklesslySetUnpreparedArgs: campaignId,
  //     });
  //   }
  // };

  return { transactionHash, isWithdrawing, error, write, reset }
}

export default useWithdraw
