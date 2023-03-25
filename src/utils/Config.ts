const config = {
  optimism: process.env.NEXT_PUBLIC_OPTIMISMGOERLI || '',
  goerli: process.env.NEXT_PUBLIC_GOERLI || '',
  mumbai: process.env.NEXT_PUBLIC_MUMBAI || '',
  snapshot_spacename: process.env.NEXT_PUBLIC_SNAPSHOT_SPACE_NAME || '',
}

export default config
