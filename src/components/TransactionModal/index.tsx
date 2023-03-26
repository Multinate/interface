import useWindowDimensions from '@/hooks/useWindowDImensions'
import { getDisplayAddress, getTimeFormat } from '@/utils/helper'
import { ITransaction } from '@/utils/interfaces'
import { FC } from 'react'
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
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions()

  return (
    <TransactionModalContainer>
      <TransactionModalTitle>Activity</TransactionModalTitle>
      <TransactionModalContent>
        {loading ? (
          <></>
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
