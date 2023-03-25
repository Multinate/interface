import { Web3Provider } from '@ethersproject/providers'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const useWeb3Provider = () => {
  const [provider, setProvider] = useState<any>()
  const { address } = useAccount()

  useEffect(() => {
    if (window.ethereum && address) {
      const _provider = new Web3Provider(window.ethereum)
      setProvider(_provider)
    }
  }, [address])

  return { provider }
}

export default useWeb3Provider
