import { CampaignDetailViewContainer, CampaignDetailViewContent, CampaignDetailViewTitle } from './style'
import { MockCampaignData } from '@/utils/MockData'
import { FC, useEffect, useState } from 'react'
import { ICampaign } from '@/utils/interfaces'
import Skeleton from 'react-loading-skeleton'

interface IProps {
  id: string
}

const CampaignDetailView: FC<IProps> = ({ id }) => {
  const [campaignData, setCampaignData] = useState<ICampaign>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchCampaign = async (id: string) => {
    // Mock some loading and fetching
    setLoading(true)
    setTimeout(() => {
      setCampaignData(MockCampaignData.filter((data) => data.id === id)[0])
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    if (id) {
      fetchCampaign(id)
    }
  }, [])

  return (
    <CampaignDetailViewContainer>
      <CampaignDetailViewTitle>{loading ? <Skeleton /> : campaignData?.title}</CampaignDetailViewTitle>
    </CampaignDetailViewContainer>
  )
}

export default CampaignDetailView
