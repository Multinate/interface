export enum ContractsEnum {
  ATTESTATION = 'attestation',
  MULTINATE = 'main',
  ERC20 = 'erc20',
  USDC = 'usdc',
  WETH = 'weth',
  DONATION = 'donation',
}

export const ContractsMapping: { [key: string]: string } = {
  [ContractsEnum.ATTESTATION]: 'AttestationStation',
  [ContractsEnum.MULTINATE]: 'Multinate',
  [ContractsEnum.ERC20]: 'MockERC20',
  [ContractsEnum.USDC]: 'MockUSDC',
  [ContractsEnum.WETH]: 'MockWETH',
  [ContractsEnum.DONATION]: 'SwapManager',
}

export const ContractAddressMapping: { [network: number]: { [contractType: string]: string } } = {
  // Polygon Mainnet
  137: {
    [ContractsEnum.ATTESTATION]: '0xc4eA30bA18593af366D66Bc11ac36f9e37552B8e',
    [ContractsEnum.MULTINATE]: '0x4e7cACeE6D75BF7F63A44331a5C3D6AA1b57B634',
    [ContractsEnum.ERC20]: '0xA960261A0926F02822543561f3ae0f86839b2Ea2',
    [ContractsEnum.USDC]: '0x4aB59d8D18298261560aFcAf780E17Dc69B877d0',
    [ContractsEnum.WETH]: '0x3ca839f1E7E456464e2CEF5bd43E4e64aBFcFBff',
  },

  // Optimism Mainnet
  10: {
    [ContractsEnum.MULTINATE]: '0xBdA573328da513AaFe7FE5e54A5D315C765E95Fb',
    [ContractsEnum.ERC20]: '0x8f41BbAC1E5102De5F6595083229f96B5fEc8a79',
    [ContractsEnum.USDC]: '0xDc9bed60Bb580F4601a10974934f1eAcBc8Ac409',
    [ContractsEnum.WETH]: '0x917DC644D9AD060883B5387A4CDe872263a8f819',
  },

  // Gnosis Mainnet
  100: {
    [ContractsEnum.ATTESTATION]: '0x9E92b0cbE751F081C0fD78431c65012801232602',
    [ContractsEnum.MULTINATE]: '0xddF51C4e20A05733a24837684b95626B7422d4Df',
    [ContractsEnum.ERC20]: '0xfA3422b99515d78D889C0a8Ce866A8444A589fB8',
    [ContractsEnum.USDC]: '0x07A583000b1C86b159e065D16c05fbD5A14f92A8',
    [ContractsEnum.WETH]: '0xE3641277B8450e174a2Dea656649a3A1EBcEb2BE',
    [ContractsEnum.DONATION]: '0x03cC5dcefBc0921FF285cFBE84Ce15d1359111Bc',
  },
}
