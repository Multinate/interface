import CampaignDetailView from '@/views/CampaignDetail'
import { useRouter } from 'next/router'

const CampaignDetailPage = () => {
  const router = useRouter()
  const { query } = router

  return <CampaignDetailView id={query.id as string} />
}

export default CampaignDetailPage
