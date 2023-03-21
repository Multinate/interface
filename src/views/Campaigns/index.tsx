import { CampaignViewContainer, CampaignViewContent, CampaignViewTitle } from './style'
import { MockCampaignData } from '@/utils/MockData'
import CampaignItem from '@/components/CampaignItem'

const CampaignView = () => {
  return (
    <CampaignViewContainer>
      <CampaignViewTitle>Campaigns</CampaignViewTitle>
      <CampaignViewContent>
        {MockCampaignData.map((campaign) => (
          <CampaignItem key={`${campaign.id}_${campaign.title}`} campaign={campaign} />
        ))}
      </CampaignViewContent>
    </CampaignViewContainer>
  )
}

export default CampaignView
