import { IRoute } from "./interfaces";
import HomeIcon from "@/assets/images/icons/Home.svg";
import TransactionIcon from "@/assets/images/icons/Transaction.svg";

const Routes: IRoute[] = [
  {
    title: 'Campaigns',
    href: '/campaigns',
    icon: HomeIcon
  },
  {
    title: 'Transactions',
    href: '/transactions',
    icon: TransactionIcon
  }
]

export default Routes;