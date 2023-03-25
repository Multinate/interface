import {
  VoteProposalDetailViewContainer,
  VoteProposalDetailViewContent,
  VoteProposalDetailViewDescription,
  VoteProposalDetailViewForm,
  VoteProposalDetailViewTitle,
} from './style'
import { FC, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Button from '@/components/Button'
import useFetchPendingProposalById from '@/hooks/useFetchPendingProposalById'
import useVoteProposal from '@/hooks/useVoteProposal'
import { toast } from 'react-hot-toast'
import Router from 'next/router'

interface IProps {
  id: string
}

const VoteProposalDetailView: FC<IProps> = ({ id }) => {
  const { data, loading } = useFetchPendingProposalById(id)
  const { data: voteProposalResponse, loading: votingProposal, voteProposal } = useVoteProposal()

  useEffect(() => {
    if (voteProposalResponse && !votingProposal) {
      toast.success('You have successfully voted!')
      Router.push('/vote')
    }
  }, [voteProposalResponse, votingProposal])

  return (
    <VoteProposalDetailViewContainer>
      <VoteProposalDetailViewContent>
        <VoteProposalDetailViewTitle>{loading ? <Skeleton /> : data?.title}</VoteProposalDetailViewTitle>
        <VoteProposalDetailViewDescription>
          {loading ? <Skeleton count={10} /> : data?.description}
        </VoteProposalDetailViewDescription>
        <VoteProposalDetailViewDescription>
          {loading ? <Skeleton /> : `Target: $${data?.amount}`}
        </VoteProposalDetailViewDescription>
        <VoteProposalDetailViewDescription>
          {loading ? <Skeleton /> : `Yes: ${data?.yes} | No: ${data?.no}`}
        </VoteProposalDetailViewDescription>
        {data?.userVoted ? (
          <VoteProposalDetailViewDescription>You have voted</VoteProposalDetailViewDescription>
        ) : (
          <VoteProposalDetailViewForm>
            {votingProposal ? (
              <Button isLoading={true} key={0} label="Processing..." handleClick={() => {}} />
            ) : (
              <>
                {Object.entries(data?.choices || {}).map((entry) => (
                  <Button
                    isLoading={false}
                    key={entry[1]}
                    label={entry[1]}
                    handleClick={() => voteProposal(id, Number(entry[0]))}
                  />
                ))}
              </>
            )}
          </VoteProposalDetailViewForm>
        )}
      </VoteProposalDetailViewContent>
    </VoteProposalDetailViewContainer>
  )
}

export default VoteProposalDetailView
