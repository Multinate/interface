import { getDisplayAddress, getTimeFormat } from '@/utils/helper'
import { ITransaction } from '@/utils/interfaces'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  TransactionModalContainer,
  TransactionModalContent,
  TransactionModalItem,
  TransactionModalTitle,
} from './style'

interface IProps {
  loading: boolean
  transactions: ITransaction[]
}

const TransactionModal: FC<IProps> = ({ loading, transactions }) => {
  return (
    <TransactionModalContainer>
      <TransactionModalTitle>Activity</TransactionModalTitle>
      <TransactionModalContent>
        {loading ? (
          <>
            {new Array(5).fill(0).map((item, index: number) => (
              <Skeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {transactions.map((transaction) => (
              <TransactionModalItem key={transaction.id}>
                <p>{getDisplayAddress(transaction.donor, 5, false)}</p>
                <p>
                  {transaction.amount} {transaction.coinType}
                </p>
                <p>{getTimeFormat(transaction.timestamp, 'past')} ago</p>
              </TransactionModalItem>
            ))}
          </>
        )}
      </TransactionModalContent>
    </TransactionModalContainer>
  )
}

export default TransactionModal
