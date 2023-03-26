import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, mainnet, WagmiConfig } from 'wagmi'
import { optimismGoerli, polygonMumbai, arbitrumGoerli, goerli, optimism, polygon, arbitrum } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import Layout from '@/components/Layout'
import GlobalStyle from '@/styles/GlobalStyles'
import { Toaster } from 'react-hot-toast'

const { chains, provider } = configureChains(
  [goerli, optimismGoerli, polygonMumbai, arbitrumGoerli, optimism, polygon, arbitrum, mainnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID || '' }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'MultiNate',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <GlobalStyle />
        <Layout>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
