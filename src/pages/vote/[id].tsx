import VoteProposalDetailView from '@/views/VoteProposalDetail'
import { useRouter } from 'next/router'

const VoteProposalDetailPage = () => {
  const router = useRouter()
  const { query } = router

  return <VoteProposalDetailView id={query.id as string} />
}

export default VoteProposalDetailPage
