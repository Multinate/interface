import { ICampaign } from '@/utils/interfaces'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const handleGoToCampaignDetails = () => {
    router.push(`/campaigns/${campaign.href}`)
  }

  return (
    <CampaignItemContainer onClick={handleGoToCampaignDetails}>
      <CampaignItemSection width={80}>
        <CampaignItemTitle>{campaign.title}</CampaignItemTitle>
        <CampaignItemDescription>
          {campaign.description.length > 150 ? `${campaign.description.slice(0, 150)}...` : campaign.description}
        </CampaignItemDescription>
      </CampaignItemSection>
      <CampaignItemSection width={20} style={{ marginLeft: '20px', alignItems: 'flex-end' }}>
        <CampaignItemPercentage>
          <CountUp start={0} end={Math.floor((campaign.raised / campaign.target) * 100)} decimals={0} duration={2} />%
        </CampaignItemPercentage>
        <CampaignItemPercentageText>raised!</CampaignItemPercentageText>
      </CampaignItemSection>
    </CampaignItemContainer>
  )
}

export default CampaignItem
