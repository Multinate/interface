import { ITransaction } from '@/utils/interfaces'
import { useRouter } from 'next/router'
import { FC } from 'react'
import CountUp from 'react-countup'
import { TransactionItemContainer, TransactionItemData, TransactionItemDataTitle } from './style'

interface IProps {
  transaction: ITransaction
}

const TransactionItem: FC<IProps> = ({ transaction }) => {
  const router = useRouter()

  const handleGoToCampaignDetails = () => {
    router.push(`/campaigns/${transaction.campaignId}`)
  }

  return (
    <TransactionItemContainer clickable onClick={handleGoToCampaignDetails}>
      <TransactionItemData style={{ width: '50%' }}>
        <TransactionItemDataTitle>{transaction.title}</TransactionItemDataTitle>
        <label>Name</label>
      </TransactionItemData>

      <TransactionItemData style={{ width: '25%' }}>
        <p>
          <CountUp start={0} end={transaction.amount} decimals={0} duration={2} /> {transaction.coinType}
        </p>
        <label>Amount</label>
      </TransactionItemData>

      <TransactionItemData style={{ width: '25%', alignItems: 'flex-end' }}>
        <p>{transaction.timestamp}</p>
        <label>Time</label>
      </TransactionItemData>
    </TransactionItemContainer>
  )
}

export default TransactionItem
