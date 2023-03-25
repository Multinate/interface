import {
  CampaignDetailViewContainer,
  CampaignDetailViewDescription,
  CampaignDetailViewForm,
  CampaignDetailViewProgressBar,
  CampaignDetailViewTitle,
} from './style'
import { MockCampaignData, MockCoinSelection } from '@/utils/MockData'
import { FC, useEffect, useState } from 'react'
import { ICampaign, IOption } from '@/utils/interfaces'
import Skeleton from 'react-loading-skeleton'
import ProgressBar from '@/components/ProgressBar'
import TextField from '@/components/TextField'
import DropdownField from '@/components/DropdownField'

interface IProps {
  id: string
}

const CampaignDetailView: FC<IProps> = ({ id }) => {
  const [campaignData, setCampaignData] = useState<ICampaign>()
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCoinOption, setSelectedCoinOption] = useState<IOption>(MockCoinSelection[0])

  const handleSelectCoin = (selected: IOption) => {
    setSelectedCoinOption(selected)
  }

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
  }, [id])

  return (
    <CampaignDetailViewContainer>
      <CampaignDetailViewTitle>{loading ? <Skeleton /> : campaignData?.title}</CampaignDetailViewTitle>
      <CampaignDetailViewProgressBar>
        {loading ? (
          <Skeleton count={2} />
        ) : (
          <ProgressBar currentValue={campaignData?.raised || 0} maxValue={campaignData?.target || 0} />
        )}
      </CampaignDetailViewProgressBar>
      <CampaignDetailViewDescription>
        {loading ? <Skeleton count={10} /> : campaignData?.description}
      </CampaignDetailViewDescription>
      <CampaignDetailViewForm>
        {!loading && (
          <>
            <TextField label={'Amount'}></TextField>
            <DropdownField
              label={'Coin'}
              options={MockCoinSelection}
              activeSelection={selectedCoinOption}
              handleSelection={handleSelectCoin}
            ></DropdownField>
          </>
        )}
      </CampaignDetailViewForm>
    </CampaignDetailViewContainer>
  )
}

export default CampaignDetailView
