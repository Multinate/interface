import { useEffect, useState } from 'react'
import { MockTransactionsData } from '@/utils/MockData'
import { TransactionViewContainer, TransactionViewTitle, TransactionViewContent } from './style'
import { ITransaction } from '@/utils/interfaces'
import TransactionItem from '@/components/TransactionItem'
import TransactionItemLoader from '@/components/TransactionItem/loader'

const TransactionView = () => {
  const [transactionList, setTransactionList] = useState<ITransaction[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchTransactions = () => {
    // Mock some loading and fetching
    setLoading(true)
    setTimeout(() => {
      setTransactionList(MockTransactionsData)
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionViewContainer>
      <TransactionViewTitle>Transactions</TransactionViewTitle>
      <TransactionViewContent>
        {loading ? (
          <>
            {new Array(5).fill(0).map((item, index: number) => (
              <TransactionItemLoader key={`TransactionItemLoader_${index}`} />
            ))}
          </>
        ) : (
          <>
            {transactionList.map((transaction) => (
              <TransactionItem key={`${transaction.id}_${transaction.title}`} transaction={transaction} />
            ))}
          </>
        )}
      </TransactionViewContent>
    </TransactionViewContainer>
  )
}

export default TransactionView
