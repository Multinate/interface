import { useEffect, useState } from 'react'
import { IPendingProposal } from '@/utils/interfaces'
import { getPendingVoteProposalById } from '@/subgraphs/getPendingVoteProposalById'
import { getVotesByProposalId } from '@/subgraphs/getVotesByProposalId'
import { useAccount } from 'wagmi'

const useFetchPendingProposalById = (id: string) => {
  const { address } = useAccount()
  const [data, setData] = useState<IPendingProposal>()
  const [loading, setLoading] = useState<boolean>(false)

  const fetchProposal = async () => {
    setLoading(true)

    try {
      const _proposal = await getPendingVoteProposalById(id)

      if (_proposal) {
        // Start Process Votes
        let yesNum = 0
        let noNum = 0

        if (_proposal.scores_by_strategy && _proposal.scores_by_strategy!!.length > 0) {
          yesNum = _proposal.scores_by_strategy[0][0]
          noNum = _proposal.scores_by_strategy[1][0]
        }

        // Start Process Choices
        const choicesOutput: { [key: number]: string } = {}
        _proposal.choices?.map((choice, index: number) => {
          choicesOutput[index + 1] = choice
        })

        // Start Process Target Amount
        let amount = 0
        let description = ''
        const startIndex = _proposal.body?.indexOf('- [P') || -1
        const endIndex = _proposal.body?.indexOf(']') || -1

        if (startIndex > 0 && endIndex > 0) {
          const stringSection = _proposal.body?.slice(startIndex, endIndex + 1)
          amount = Number(stringSection?.replace('- [Proposal Target Amount: ', '').replace(']', '')) || 0
        }

        // Start Process Body
        description = _proposal.body?.slice(0, startIndex) || ''

        // Start whether user has voted in the past
        const votes = await getVotesByProposalId(id)
        const voted = votes.filter((vote) => vote.voter?.toLowerCase() === address?.toLowerCase())

        setData({
          id: _proposal.id || '',
          title: _proposal.title || '',
          description,
          startTime: _proposal.start || 0,
          endTime: _proposal.end || 0,
          author: _proposal.author || '',
          vote: _proposal.votes || 0,
          yes: yesNum,
          no: noNum,
          choices: choicesOutput,
          amount,
          userVoted: voted.length > 0,
        })
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (id) {
      fetchProposal()
    }
  }, [id])

  return { data, loading }
}

export default useFetchPendingProposalById
