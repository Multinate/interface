import { IPendingProposal } from '@/utils/interfaces'
import { useRouter } from 'next/router'
import { FC } from 'react'
import {
  VoteProposalItemContainer,
  VoteProposalItemDescription,
  VoteProposalItemSection,
  VoteProposalItemTitle,
  VoteProposalItemVoteStatus,
} from './style'

interface IProps {
  proposal: IPendingProposal
}

const VoteProposalItem: FC<IProps> = ({ proposal }) => {
  const router = useRouter()

  const handleGoToProposal = () => {
    router.push(`/vote/${proposal.id}`)
  }

  return (
    <VoteProposalItemContainer clickable onClick={handleGoToProposal}>
      <VoteProposalItemSection width={70}>
        <VoteProposalItemTitle>{proposal.title}</VoteProposalItemTitle>
        <VoteProposalItemDescription>
          {proposal.description.length > 150 ? `${proposal.description.slice(0, 150)}...` : proposal.description}
        </VoteProposalItemDescription>
      </VoteProposalItemSection>
      <VoteProposalItemSection width={30}>
        <VoteProposalItemTitle>Target: ${proposal.amount}</VoteProposalItemTitle>
        <VoteProposalItemVoteStatus>
          <p>
            Yes: {proposal.yes} | No: {proposal.no} {proposal.userVoted ? '| Voted' : ''}
          </p>
        </VoteProposalItemVoteStatus>
      </VoteProposalItemSection>
    </VoteProposalItemContainer>
  )
}

export default VoteProposalItem
