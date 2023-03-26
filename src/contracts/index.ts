export enum ContractsEnum {
  ATTESTATION = 'attestation',
  MAIN = 'main',
  ERC20 = 'erc20',
  USDC = 'usdc',
  WETH = 'weth',
}

export const ContractsMapping: { [key: string]: string } = {
  [ContractsEnum.ATTESTATION]: 'attestation',
  [ContractsEnum.MAIN]: 'multinate',
  [ContractsEnum.ERC20]: 'erc20',
  [ContractsEnum.USDC]: 'usdc',
  [ContractsEnum.WETH]: 'weth',
}

export const ContractAddressMapping: { [network: number]: { [contractType: string]: string } } = {
  // Polygon Mainnet
  137: {
    [ContractsEnum.ATTESTATION]: '0xc4eA30bA18593af366D66Bc11ac36f9e37552B8e',
    [ContractsEnum.MAIN]: '0x4e7cACeE6D75BF7F63A44331a5C3D6AA1b57B634',
    [ContractsEnum.ERC20]: '0xA960261A0926F02822543561f3ae0f86839b2Ea2',
    [ContractsEnum.USDC]: '0x4aB59d8D18298261560aFcAf780E17Dc69B877d0',
    [ContractsEnum.WETH]: '0x3ca839f1E7E456464e2CEF5bd43E4e64aBFcFBff',
  },

  // Optimism Mainnet
  10: {
    [ContractsEnum.MAIN]: '0xBdA573328da513AaFe7FE5e54A5D315C765E95Fb',
    [ContractsEnum.ERC20]: '0x8f41BbAC1E5102De5F6595083229f96B5fEc8a79',
    [ContractsEnum.USDC]: '0xDc9bed60Bb580F4601a10974934f1eAcBc8Ac409',
    [ContractsEnum.WETH]: '0x917DC644D9AD060883B5387A4CDe872263a8f819',
  },
}
