import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { TransactionItemContainer, TransactionItemData } from './style'

const TransactionItemLoader: FC = () => {
  return (
    <TransactionItemContainer>
      <TransactionItemData style={{ width: '50%' }}>
        <p style={{ width: '80%' }}>
          <Skeleton />
        </p>
        <label>Name</label>
      </TransactionItemData>

      <TransactionItemData style={{ width: '25%' }}>
        <p style={{ width: '80%' }}>
          <Skeleton />
        </p>
        <label>Amount</label>
      </TransactionItemData>

      <TransactionItemData style={{ width: '25%', alignItems: 'flex-end' }}>
        <p style={{ width: '80%' }}>
          <Skeleton />
        </p>
        <label>Time</label>
      </TransactionItemData>
    </TransactionItemContainer>
  )
}

export default TransactionItemLoader
