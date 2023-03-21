export interface IRoute {
  title: string
  href: string
  icon: string
}

export interface ICampaign {
  id: string
  title: string
  description: string
  href: string
  raised: number
  target: number
}
