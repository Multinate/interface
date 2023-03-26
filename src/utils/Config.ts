const config = {
  optimism: process.env.NEXT_PUBLIC_OPTIMISMGOERLI || '',
  goerli: process.env.NEXT_PUBLIC_GOERLI || '',
  mumbai: process.env.NEXT_PUBLIC_MUMBAI || '',
  snapshot_spacename: process.env.NEXT_PUBLIC_SNAPSHOT_SPACE_NAME || '',
  snapshot_graphql: process.env.NEXT_PUBLIC_SNAPSHOT_GRAPHQL || '',
  contract_address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
}

export default config
