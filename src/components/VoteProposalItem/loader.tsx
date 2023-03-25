import Skeleton from 'react-loading-skeleton'
import {
  VoteProposalItemContainer,
  VoteProposalItemDescription,
  VoteProposalItemSection,
  VoteProposalItemTitle,
} from './style'

const VoteProposalItemLoader = () => {
  return (
    <VoteProposalItemContainer>
      <VoteProposalItemSection width={70}>
        <VoteProposalItemTitle style={{ width: '100%' }}>
          <Skeleton />
        </VoteProposalItemTitle>
        <VoteProposalItemDescription style={{ width: '100%' }}>
          <Skeleton count={2} />
        </VoteProposalItemDescription>
      </VoteProposalItemSection>
      <VoteProposalItemSection width={30}></VoteProposalItemSection>
    </VoteProposalItemContainer>
  )
}

export default VoteProposalItemLoader
