import { CampaignViewContainer, CampaignViewContent, CampaignViewTitle } from './style'
import { MockCampaignData } from '@/utils/MockData'
import CampaignItem from '@/components/CampaignItem'
import CampaignItemLoader from '@/components/CampaignItem/loader'
import { useEffect, useState } from 'react'
import { ICampaign } from '@/utils/interfaces'

const CampaignView = () => {
  const [campaignList, setCampaignList] = useState<ICampaign[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchCampaigns = async () => {
    // Mock some loading and fetching
    setLoading(true)
    setTimeout(() => {
      setCampaignList(MockCampaignData)
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    fetchCampaigns()
  }, [])

  return (
    <CampaignViewContainer>
      <CampaignViewTitle>Campaigns</CampaignViewTitle>
      <CampaignViewContent>
        {loading ? (
          <>
            {new Array(5).fill(0).map((item, index: number) => (
              <CampaignItemLoader key={`CampaignItemLoader_${index}`} />
            ))}
          </>
        ) : (
          <>
            {MockCampaignData.map((campaign) => (
              <CampaignItem key={`${campaign.id}_${campaign.title}`} campaign={campaign} />
            ))}
          </>
        )}
      </CampaignViewContent>
    </CampaignViewContainer>
  )
}

export default CampaignView
