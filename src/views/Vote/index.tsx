import VoteProposalItem from '@/components/VoteProposalItem'
import VoteProposalItemLoader from '@/components/VoteProposalItem/loader'
import useFetchProposals from '@/hooks/useFetchPendingProposals'
import { VoteViewContainer, VoteViewContent, VoteViewTitle } from './style'

const VoteView = () => {
  const { data, loading } = useFetchProposals()

  return (
    <VoteViewContainer>
      <VoteViewTitle>Vote Campaigns</VoteViewTitle>
      <VoteViewContent>
        {loading ? (
          <>
            {new Array(5).fill(0).map((item, index: number) => (
              <VoteProposalItemLoader key={`VoteProposalItemLoader_${index}`} />
            ))}
          </>
        ) : (
          <>
            {data.map((proposal) => (
              <VoteProposalItem key={`${proposal.id}_${proposal.title}`} proposal={proposal} />
            ))}
          </>
        )}
      </VoteViewContent>
    </VoteViewContainer>
  )
}

export default VoteView
