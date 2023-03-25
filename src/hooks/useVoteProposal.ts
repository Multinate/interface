import { useAccount, useProvider, useSigner } from 'wagmi'
import useInitSnapshot from './useInitSnapshot'
import useWeb3Provider from './useWeb3Provider'
import config from '@/utils/Config'
import { useState } from 'react'

const useVoteProposal = () => {
  const [data, setData] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const { address } = useAccount()
  const { client } = useInitSnapshot()
  const { provider: web3Provider } = useWeb3Provider()

  const createProposal = async (proposalId: string, option: number) => {
    setLoading(true)

    try {
      const receipt = await client.vote(web3Provider, address, {
        space: config.snapshot_spacename,
        proposal: proposalId,
        type: 'single-choice',
        choice: option,
        reason: '',
        app: 'MultiNate DAO',
      })

      if (receipt) {
        setData(receipt.id)
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  return { data, loading, createProposal }
}

export default useVoteProposal
