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
import { useAccount, useContractWrite } from 'wagmi'
import { ethers } from 'ethers'
import { ContractAddressMapping, ContractsEnum } from '@/contracts'
import { getWagmiContractParams } from '@/utils/ContractsHelper'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

interface IProps {
  id: string
}

const CampaignDetailView: FC<IProps> = ({ id }) => {
  const router = useRouter()
  const { address } = useAccount()
  const [campaignData, setCampaignData] = useState<ICampaign>()
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCoinOption, setSelectedCoinOption] = useState<IOption>(MockCoinSelection[0])
  const [amount, setAmount] = useState<string>('')
  const contractParams = getWagmiContractParams(100, ContractsEnum.DONATION)

  const {
    data: donationTxnHash,
    isLoading: isDonating,
    error: errorFromDonating,
    write: writeDonate,
    reset: resetDonate,
  } = useContractWrite({
    mode: 'recklesslyUnprepared',
    ...contractParams,
    functionName: 'donate',
    chainId: 100,
    args: [
      ContractAddressMapping[selectedCoinOption.value][ContractsEnum.ERC20],
      ethers.utils.parseUnits(amount || '0', 'ether'),
      Number(campaignData?.id),
    ],
  })

  const {
    data: withdrawTxnHash,
    isLoading: isWithdrawing,
    error: errorFromWithdrawing,
    write: writeWithdraw,
    reset: resetWithdraw,
  } = useContractWrite({
    mode: 'recklesslyUnprepared',
    ...contractParams,
    functionName: 'withdraw',
    chainId: 100,
    args: [Number(campaignData?.id)],
  })

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

  const handleAmount = (e: string) => {
    setAmount(e)
  }

  useEffect(() => {
    if (donationTxnHash && !errorFromDonating) {
      toast.success('You have donated')
      router.push('/campaigns')
    } else if (withdrawTxnHash && !errorFromWithdrawing) {
      toast.success('You have withdrawn')
      router.push('/campaigns')
    }
  }, [donationTxnHash, withdrawTxnHash])

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
                <Button label="Withdraw" isLoading={isWithdrawing} handleClick={writeWithdraw} />
              ) : (
                <>
                  <TextField label={'Amount'} type="number" handleChange={handleAmount}></TextField>
                  <DropdownField
                    label={'Coin'}
                    options={MockCoinSelection}
                    activeSelection={selectedCoinOption}
                    handleSelection={handleSelectCoin}
                  ></DropdownField>
                  <Button label={'Donate'} isLoading={isDonating} handleClick={writeDonate}></Button>
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
