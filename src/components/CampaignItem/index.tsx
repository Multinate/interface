import { ICampaign } from '@/utils/interfaces'
import { FC } from 'react'
import CountUp from 'react-countup'
import {
  CampaignItemContainer,
  CampaignItemDescription,
  CampaignItemPercentage,
  CampaignItemPercentageText,
  CampaignItemSection,
  CampaignItemTitle,
} from './style'

interface IProps {
  campaign: ICampaign
}

const CampaignItem: FC<IProps> = ({ campaign }) => {
  return (
    <CampaignItemContainer>
      <CampaignItemSection width={80}>
        <CampaignItemTitle>{campaign.title}</CampaignItemTitle>
        <CampaignItemDescription>
          {campaign.description.length > 150 ? `${campaign.description.slice(0, 150)}...` : campaign.description}
        </CampaignItemDescription>
      </CampaignItemSection>
      <CampaignItemSection width={20} style={{ marginLeft: '20px', alignItems: 'flex-end' }}>
        <CampaignItemPercentage>
          <CountUp start={0} end={Number(campaign.raised)} decimals={0} duration={2} />%
        </CampaignItemPercentage>
        <CampaignItemPercentageText>raised!</CampaignItemPercentageText>
      </CampaignItemSection>
    </CampaignItemContainer>
  )
}

export default CampaignItem
