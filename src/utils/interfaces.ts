export interface IRoute {
  title: string
  href: string
  icon: string
  reqWalletConnected: boolean
}

export interface ICampaign {
  id: string
  title: string
  description: string
  href: string
  raised: number
  target: number
}

export interface ITransaction {
  id: string
  campaignId: string
  title: string
  timestamp: number
  amount: number
  coinType: string
  donor: string
}

export interface IOption {
  label: string
  value: string
}

export interface IPendingProposal {
  id: string
  title: string
  description: string
  choices: { [key: number]: string }
  startTime: number
  endTime: number
  author: string
  vote: number
  yes: number
  no: number
  amount: number
  userVoted: boolean
}
