import { useEffect, useState } from 'react'
import snapshot from '@snapshot-labs/snapshot.js'

const hub = 'https://hub.snapshot.org'
const testnetHub = 'https://testnet.snapshot.org'

const useInitSnapshot = () => {
  const [client, setClient] = useState<any>()

  useEffect(() => {
    if (!client) {
      setClient(new snapshot.Client712(testnetHub))
    }
  }, [])

  return { client }
}

export default useInitSnapshot
