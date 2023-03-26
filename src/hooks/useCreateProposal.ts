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
    const ONE_YEAR_IN_SECONDS = 31_536_000
    const FIVE_MINS_IN_SECONDS = 300

    try {
      const proposalStruct = {
        space: config.snapshot_spacename,
        type: 'single-choice', // define the voting system
        title: title,
        body: `${description} - ${getTargetAmountString}`,
        choices: ['Agree to Proposal', 'Disagree to Proposal'],
        start: currentTime,
        end: currentTime + FIVE_MINS_IN_SECONDS,
        snapshot: 136208, // Just fix this snapshot id
        // network: '1',
        plugins: JSON.stringify({
          safeSnap: {
            safes: [
              {
                network: '137',
                umaAddress: '0xaF47Bfe2C2745ba63f4f596d88aB62e686838D26',
                realityAddress: '0xSWITCH_WITH_REALITY_MODULE_ADDRESS',
                txs: [
                  {
                    hash: null,
                    nonce: 0,
                    mainTransaction: {
                      to: '0xddF51C4e20A05733a24837684b95626B7422d4Df',
                      data: '0x075843c30000000000000000000000006860542e55fb9292e4c8b478fceec724d3351c2e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000000000000000000000000000000000006420607a000000000000000000000000000000000000000000000000000000000000002546756e6472616973696e6720666f7220456c6465726c79202d205a585920436861726974790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015506c65617365207361766520746865206b696473210000000000000000000000',
                      nonce: '0',
                      operation: '0',
                      type: 'contractInteraction',
                      value: '0',
                      abi: ['function createCampaign(address, string, string, uint256, uint256)'],
                    },
                    transactions: [
                      {
                        to: '0xddF51C4e20A05733a24837684b95626B7422d4Df',
                        data: '0x075843c30000000000000000000000006860542e55fb9292e4c8b478fceec724d3351c2e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000000000000000000000000000000000006420607a000000000000000000000000000000000000000000000000000000000000002546756e6472616973696e6720666f7220456c6465726c79202d205a585920436861726974790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015506c65617365207361766520746865206b696473210000000000000000000000',
                        nonce: 0,
                        operation: '0',
                        type: 'contractInteraction',
                        value: '0',
                        abi: ['function createCampaign(address, string, string, uint256, uint256)'],
                      },
                    ],
                  },
                ],
                multiSendAddress: '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
                hash: null,
              },
            ],
            valid: true,
          },
        }),
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
