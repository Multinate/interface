import {
  CampaignDetailViewContainer,
  CampaignDetailViewContent,
  CampaignDetailViewDescription,
  CampaignDetailViewForm,
  CampaignDetailViewProgressBar,
  CampaignDetailViewTitle,
  CampaignDetailViewTransactionModal,
} from './style'
import { MockCampaignData, MockCoinSelection, MockTransactionsData } from '@/utils/MockData'
import { FC, useEffect, useState } from 'react'
import { ICampaign, IOption } from '@/utils/interfaces'
import Skeleton from 'react-loading-skeleton'
import ProgressBar from '@/components/ProgressBar'
import TextField from '@/components/TextField'
import DropdownField from '@/components/DropdownField'
import TransactionModal from '@/components/TransactionModal'
import Button from '@/components/Button'
import useWithdraw from '@/hooks/useWithdraw'
import { useAccount } from 'wagmi'

interface IProps {
  id: string
}

const CampaignDetailView: FC<IProps> = ({ id }) => {
  const { address } = useAccount()
  const [campaignData, setCampaignData] = useState<ICampaign>()
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCoinOption, setSelectedCoinOption] = useState<IOption>(MockCoinSelection[0])

  const { transactionHash, isWithdrawing, error: errorFromWithdrawing, write, reset } = useWithdraw()

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

  const handleWithdraw = async () => {
    if (write && campaignData) {
      write({
        recklesslySetUnpreparedArgs: [campaignData.id],
      })
    }
  }

  const handleDonate = async () => {}

  return (
    <CampaignDetailViewContainer>
      <CampaignDetailViewContent>
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
              {address && campaignData && address.toLowerCase() === campaignData?.owner.toLowerCase() ? (
                <Button label="Withdraw" isLoading={isWithdrawing} handleClick={handleWithdraw} />
              ) : (
                <>
                  <TextField label={'Amount'} type="number" handleChange={() => {}}></TextField>
                  <DropdownField
                    label={'Coin'}
                    options={MockCoinSelection}
                    activeSelection={selectedCoinOption}
                    handleSelection={handleSelectCoin}
                  ></DropdownField>
                  <Button label={'Donate'} isLoading={false} handleClick={handleDonate}></Button>
                </>
              )}
            </>
          )}
        </CampaignDetailViewForm>
      </CampaignDetailViewContent>

      <CampaignDetailViewTransactionModal>
        <TransactionModal loading={loading} transactions={MockTransactionsData} />
      </CampaignDetailViewTransactionModal>
    </CampaignDetailViewContainer>
  )
}

export default CampaignDetailView
