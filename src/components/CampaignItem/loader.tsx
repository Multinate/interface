import Skeleton from 'react-loading-skeleton'
import {
  CampaignItemContainer,
  CampaignItemDescription,
  CampaignItemPercentage,
  CampaignItemPercentageText,
  CampaignItemSection,
  CampaignItemTitle,
} from './style'

const CampaignItemLoader = () => {
  return (
    <CampaignItemContainer>
      <CampaignItemSection width={80}>
        <CampaignItemTitle style={{ width: '100%' }}>
          <Skeleton />
        </CampaignItemTitle>
        <CampaignItemDescription style={{ width: '100%' }}>
          <Skeleton count={3} />
        </CampaignItemDescription>
      </CampaignItemSection>
      <CampaignItemSection width={20} style={{ marginLeft: '20px', alignItems: 'flex-end' }}>
        <CampaignItemPercentage style={{ width: '100%' }}>
          <Skeleton />
        </CampaignItemPercentage>
        <CampaignItemPercentageText style={{ width: '100%' }}>
          <Skeleton />
        </CampaignItemPercentageText>
      </CampaignItemSection>
    </CampaignItemContainer>
  )
}

export default CampaignItemLoader
