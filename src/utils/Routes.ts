import { IRoute } from './interfaces'
import HomeIcon from '@/assets/images/icons/Home.svg'
import TransactionIcon from '@/assets/images/icons/Transaction.svg'
import CreateIcon from '@/assets/images/icons/Create.svg'
import VoteIcon from '@/assets/images/icons/Vote.svg'

const Routes: IRoute[] = [
  {
    title: 'Campaigns',
    href: '/campaigns',
    reqWalletConnected: false,
    icon: HomeIcon,
  },
  {
    title: 'Transactions',
    href: '/transactions',
    reqWalletConnected: true,
    icon: TransactionIcon,
  },
  {
    title: 'Create',
    // href: 'https://demo.snapshot.org/#/multinate.eth/create/0',
    href: '/create',
    reqWalletConnected: true,
    icon: CreateIcon,
  },
  {
    title: 'Vote',
    href: 'https://demo.snapshot.org/#/multinate.eth',
    reqWalletConnected: true,
    icon: VoteIcon,
  },
]

export default Routes
