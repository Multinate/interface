import { useEffect, useState } from 'react'
import { getPendingVoteProposals } from '@/subgraphs/getPendingVoteProposals'
import { IPendingProposal } from '@/utils/interfaces'
import { getVotesByProposalId } from '@/subgraphs/getVotesByProposalId'
import { useAccount } from 'wagmi'

const useFetchProposals = () => {
  const { address } = useAccount()
  const [data, setData] = useState<IPendingProposal[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchProposals = async () => {
    setLoading(true)

    try {
      const _proposals = await getPendingVoteProposals()

      setData(
        await Promise.all(
          _proposals.map(async (prop) => {
            // Start Process Votes
            let yesNum = 0
            let noNum = 0

            if (prop.scores_by_strategy && prop.scores_by_strategy!!.length > 0) {
              yesNum = prop.scores_by_strategy[0][0]
              noNum = prop.scores_by_strategy[1][0]
            }

            // Start Process Choices
            const choicesOutput: { [key: number]: string } = {}
            prop.choices?.map((choice, index: number) => {
              choicesOutput[index + 1] = choice
            })

            // Start Process Target Amount
            let amount = 0
            let description = ''
            const startIndex = prop.body?.indexOf('- [P') || -1
            const endIndex = prop.body?.indexOf(']') || -1

            if (startIndex > 0 && endIndex > 0) {
              const stringSection = prop.body?.slice(startIndex, endIndex + 1)
              amount = Number(stringSection?.replace('- [Proposal Target Amount: ', '').replace(']', ''))
            }

            // Start Process Body
            description = prop.body?.slice(0, startIndex) || ''

            // Start whether user has voted in the past
            const votes = await getVotesByProposalId(prop.id!!)
            const voted = votes.filter((vote) => vote.voter?.toLowerCase() === address?.toLowerCase())

            return {
              id: prop.id || '',
              title: prop.title || '',
              description,
              startTime: prop.start || 0,
              endTime: prop.end || 0,
              author: prop.author || '',
              vote: prop.votes || 0,
              yes: yesNum,
              no: noNum,
              choices: choicesOutput,
              amount,
              userVoted: voted.length > 0,
            }
          }),
        ),
      )
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchProposals()
  }, [])

  return { data, loading }
}

export default useFetchProposals
