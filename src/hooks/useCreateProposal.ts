import { useAccount, useProvider, useSigner } from 'wagmi'
import useInitSnapshot from './useInitSnapshot'
import useWeb3Provider from './useWeb3Provider'
import config from '@/utils/Config'
import { useState } from 'react'

const useCreateProposal = () => {
  const [data, setData] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const { address } = useAccount()
  const { client } = useInitSnapshot()
  const { provider: web3Provider } = useWeb3Provider()

  const createProposal = async (title: string, description: string, target: number) => {
    setLoading(true)

    const currentTime = Math.floor(new Date().getTime() / 1000)
    const getTargetAmountString = `[Proposal Target Amount: ${target}]`

    try {
      const proposalStruct = {
        space: config.snapshot_spacename,
        type: 'single-choice', // define the voting system
        title: title,
        body: `${description} - ${getTargetAmountString}`,
        choices: ['Agree to Proposal', 'Disagree to Proposal'],
        start: currentTime,
        end: currentTime + 31_536_000, // Plus 1 year in seconds
        snapshot: 136208, // Just fix this snapshot id
        // network: '1',
        plugins: JSON.stringify({}),
        app: 'MultiNate DAO',
      }
      console.log('[useCreateProposal] - Data', proposalStruct)

      const receipt = await client.proposal(web3Provider, address, proposalStruct)

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

export default useCreateProposal
