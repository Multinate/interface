import {
  HomeViewContainer,
  HomeViewDescription,
  HomeViewPoints,
  HomeViewSection,
  HomeViewSubtitle,
  HomeViewTitle,
} from './style'

const HomeView = () => {
  return (
    <HomeViewContainer>
      <HomeViewTitle>Multinate - Cross-chain Donation Aggregator</HomeViewTitle>
      <HomeViewDescription>
        Multinate is a web-based application that enables charity organizations to create fundraising events and accept
        donations from various supported blockchains. The platform utilizes Snapshot to create a proposal for
        fundraising, which is then executed via a Safe with validation by UMA. The execution of the smart contract
        function is verified by Optimism&apos;s attestation contract, which ensures that the charity organizations meet
        a certain level of credibility before being allowed to raise funds.
      </HomeViewDescription>

      <HomeViewSection>
        <HomeViewSubtitle>Features</HomeViewSubtitle>
        <HomeViewPoints>
          <li>
            Support for multiple blockchains: Gnosis Testnet Optimism Testnet Scroll Alpha Testnet Goerli Testnet Mumbai
            Testnet
          </li>
          <li>Secure fundraising proposals via Snapshot</li>
          <li>Validation of proposals via Optimism&apos;s attestation contract</li>
          <li>Verification of charity organization&apos;s credibility</li>
          <li>Hyperlane interchain messaging APIs and SDKs</li>
          <li>Easy public verification for donors</li>
        </HomeViewPoints>
      </HomeViewSection>
    </HomeViewContainer>
  )
}

export default HomeView
