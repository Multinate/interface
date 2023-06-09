/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Multinate, MultinateInterface } from "../Multinate";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_attestationStation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minimumAttestationScore",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_gnosisSafe",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "charity",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "targetAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "CampaignCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CampaignFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "charity",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "eligible",
        type: "bool",
      },
    ],
    name: "CharityEligibilityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "origin",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "donor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Donated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "interchainGasPaymaster",
        type: "address",
      },
    ],
    name: "InterchainGasPaymasterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "InterchainSecurityModuleSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mailbox",
        type: "address",
      },
    ],
    name: "MailboxSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "FINANCIAL_STATEMENTS_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MISSION_STATEMENT_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGISTRATION_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TAX_EXEMPT_STATUS_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "attestationStation",
    outputs: [
      {
        internalType: "contract IAttestationStation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "address payable",
        name: "charity",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "targetAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "charityScores",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_charity",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_targetAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "interchainGasPaymaster",
    outputs: [
      {
        internalType: "contract IInterchainGasPaymaster",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interchainSecurityModule",
    outputs: [
      {
        internalType: "contract IInterchainSecurityModule",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_charity",
        type: "address",
      },
    ],
    name: "isCharityEligible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mailbox",
    outputs: [
      {
        internalType: "contract IMailbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumAttestationScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextCampaignId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_interchainGasPaymaster",
        type: "address",
      },
    ],
    name: "setInterchainGasPaymaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "setInterchainSecurityModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mailbox",
        type: "address",
      },
    ],
    name: "setMailbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimumAttestationScore",
        type: "uint256",
      },
    ],
    name: "setMinimumAttestationScore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_charity",
        type: "address",
      },
    ],
    name: "updateCharityScore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001609c553480156200001657600080fd5b506040516200196438038062001964833981016040819052620000399162000091565b609880546001600160a01b03199081166001600160a01b0396871617909155609a9390935560998054909316931692909217905550620000e5565b80516001600160a01b03811681146200008c57600080fd5b919050565b60008060008060808587031215620000a857600080fd5b620000b38562000074565b935060208501519250620000ca6040860162000074565b9150620000da6060860162000074565b905092959194509250565b61186f80620000f56000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c8063715018a6116100de578063c550042111610097578063de523cf311610071578063de523cf3146103b4578063f1bd6f0a146103c7578063f2fde38b146103da578063f3c61d6b146103ed57600080fd5b8063c55004211461033a578063d2009a271461037a578063d5438eae146103a157600080fd5b8063715018a6146102a357806372c0b64e146102ab5780637903a756146102d25780638da5cb5b146102db578063ab05b757146102ec578063b191f5321461031357600080fd5b806339bb4ad91161013057806339bb4ad9146102235780633e413bee1461024e5780634d17c7401461026157806356d5d475146102745780635de556371461028757806365a0aee21461029057600080fd5b8063075843c3146101785780630e72cc061461018d578063141961bc146101a057806327448176146101cf5780632dec1b4b146101fd5780632e1a7d4d14610210575b600080fd5b61018b610186366004611313565b610400565b005b61018b61019b36600461139b565b610662565b6101b36101ae3660046113b8565b610676565b6040516101c6979695949392919061142d565b60405180910390f35b6101ef6101dd36600461139b565b609b6020526000908152604090205481565b6040519081526020016101c6565b61018b61020b36600461139b565b6107cf565b61018b61021e3660046113b8565b610b00565b606654610236906001600160a01b031681565b6040516001600160a01b0390911681526020016101c6565b609954610236906001600160a01b031681565b61018b61026f3660046113b8565b609a55565b61018b61028236600461148c565b610d38565b6101ef609a5481565b609854610236906001600160a01b031681565b61018b610f0d565b6101ef7f3e5f59afb28eefd9525b5a2a3e685a733e99fa16aeacdb37152ea65d9b1b423d81565b6101ef609c5481565b6033546001600160a01b0316610236565b6101ef7f60ecd1bdb09484e1247f8c79f400cc78f8ff2b8bc010a2332aba54e28a3339c681565b6101ef7f13b35f1f951b0047acda6ce2a2e67dfca07ec779483f93c4d74d92d60109f3a681565b61036a61034836600461139b565b609a546001600160a01b039091166000908152609b6020526040902054101590565b60405190151581526020016101c6565b6101ef7fb54de7d710bb293db28cb644cd1b5e8ed893bb2d85468f8b0e5018b1c1864c8981565b606554610236906001600160a01b031681565b606754610236906001600160a01b031681565b61018b6103d536600461139b565b610f21565b61018b6103e836600461139b565b610f32565b61018b6103fb36600461139b565b610fa8565b609a546001600160a01b0386166000908152609b602052604090205410156104805760405162461bcd60e51b815260206004820152602860248201527f5468652063686172697479206f7267616e697a6174696f6e206973206e6f7420604482015267656c696769626c6560c01b60648201526084015b60405180910390fd5b4281116104cf5760405162461bcd60e51b815260206004820152601e60248201527f446561646c696e65206d75737420626520696e207468652066757475726500006044820152606401610477565b6000821161052f5760405162461bcd60e51b815260206004820152602760248201527f54617267657420616d6f756e74206d7573742062652067726561746572207468604482015266616e207a65726f60c81b6064820152608401610477565b609c8054908190600061054183611518565b90915550506040805160e0810182526001600160a01b03888116825260208083018981528385018990526060840188905260006080850181905260a08501889052600160c08601819052878252609d90935294909420835181546001600160a01b0319169316929092178255925191929091908201906105c190826115ba565b50604082015160028201906105d690826115ba565b50606082015160038201556080820151600482015560a0820151600582015560c0909101516006909101805460ff19169115159190911790556040516001600160a01b0387169082907f2ed5f13fbff3630ac8ec2d0779b5c1af5323ce6fa6e8810ce40317252f8733f29061065290899089908990899061167a565b60405180910390a3505050505050565b61066a610fb9565b61067381611013565b50565b609d60205260009081526040902080546001820180546001600160a01b0390921692916106a290611531565b80601f01602080910402602001604051908101604052809291908181526020018280546106ce90611531565b801561071b5780601f106106f05761010080835404028352916020019161071b565b820191906000526020600020905b8154815290600101906020018083116106fe57829003601f168201915b50505050509080600201805461073090611531565b80601f016020809104026020016040519081016040528092919081815260200182805461075c90611531565b80156107a95780601f1061077e576101008083540402835291602001916107a9565b820191906000526020600020905b81548152906001019060200180831161078c57829003601f168201915b505050506003830154600484015460058501546006909501549394919390925060ff1687565b6098546040516329b42cb560e01b815260009182916001600160a01b03909116906329b42cb59061082890339087907f60ecd1bdb09484e1247f8c79f400cc78f8ff2b8bc010a2332aba54e28a3339c6906004016116b3565b600060405180830381865afa158015610845573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261086d91908101906116d7565b905061087881611098565b610882908361174e565b6098546040516329b42cb560e01b81529193506000916001600160a01b03909116906329b42cb5906108dc90339088907f13b35f1f951b0047acda6ce2a2e67dfca07ec779483f93c4d74d92d60109f3a6906004016116b3565b600060405180830381865afa1580156108f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261092191908101906116d7565b905061092c81611098565b610936908461174e565b6098546040516329b42cb560e01b81529194506000916001600160a01b03909116906329b42cb59061099090339089907f3e5f59afb28eefd9525b5a2a3e685a733e99fa16aeacdb37152ea65d9b1b423d906004016116b3565b600060405180830381865afa1580156109ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109d591908101906116d7565b90506109e0816110b2565b6109ea908561174e565b6098546040516329b42cb560e01b81529195506000916001600160a01b03909116906329b42cb590610a449033908a907fb54de7d710bb293db28cb644cd1b5e8ed893bb2d85468f8b0e5018b1c1864c89906004016116b3565b600060405180830381865afa158015610a61573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a8991908101906116d7565b9050610a94816110b2565b610a9e908661174e565b6001600160a01b0387166000818152609b6020908152604091829020849055609a549151918410158083529398507f722947cf2ea50e4d2b4771633d4cb3ed1cd2a072d5d388a56f16cc28d49e3058910160405180910390a250505050505050565b6000818152609d60205260409020600681015460ff16610b5b5760405162461bcd60e51b815260206004820152601660248201527543616d706169676e206973206e6f742061637469766560501b6044820152606401610477565b80546001600160a01b03163314610bc05760405162461bcd60e51b815260206004820152602360248201527f4f6e6c792074686520636861726974792063616e2077697468647261772066756044820152626e647360e81b6064820152608401610477565b806003015481600401541015610c185760405162461bcd60e51b815260206004820152601960248201527f54617267657420616d6f756e74206e6f742072656163686564000000000000006044820152606401610477565b42816005015410610c6b5760405162461bcd60e51b815260206004820152601b60248201527f446561646c696e6520686173206e6f74207061737365642079657400000000006044820152606401610477565b60068101805460ff19169055609954815460048084015460405163a9059cbb60e01b81526001600160a01b0393841692810192909252602482015291169063a9059cbb906044016020604051808303816000875af1158015610cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf59190611766565b50817f318daf69d77e946364e804495b2184222324b99fddeb42ab5fd25a919f596e8c8260040154604051610d2c91815260200190565b60405180910390a25050565b6065546001600160a01b03163314610d7d5760405162461bcd60e51b8152602060048201526008602482015267042dac2d2d8c4def60c31b6044820152606401610477565b600080600083806020019051810190610d969190611788565b6000828152609d60205260409020600681015493965091945092509060ff16610dfa5760405162461bcd60e51b815260206004820152601660248201527543616d706169676e206973206e6f742061637469766560501b6044820152606401610477565b8060030154828260040154610e0f919061174e565b1115610e565760405162461bcd60e51b815260206004820152601660248201527515185c99d95d08185b5bdd5b9d08195e18d95959195960521b6044820152606401610477565b42816005015411610e9f5760405162461bcd60e51b8152602060048201526013602482015272111958591b1a5b99481a185cc81c185cdcd959606a1b6044820152606401610477565b81816004016000828254610eb3919061174e565b90915550506040805163ffffffff891681526020810184905284916001600160a01b038716917f249073b88ce702b9abd1ff334f555a3261c9b36e51dc61b0924fabdb511a4a42910160405180910390a350505050505050565b610f15610fb9565b610f1f60006110f9565b565b610f29610fb9565b6106738161114b565b610f3a610fb9565b6001600160a01b038116610f9f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610477565b610673816110f9565b610fb0610fb9565b610673816111be565b6033546001600160a01b03163314610f1f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610477565b6001600160a01b038116158061103257506001600160a01b0381163b15155b61104e5760405162461bcd60e51b8152600401610477906117bf565b606780546001600160a01b0319166001600160a01b0383169081179091556040517ffec811ed4e60aebdaf7a79cad8a97196bf56e35362f039705598226d30c9d24890600090a250565b8051600090156110aa57506019919050565b506000919050565b8051600090156110aa576000826000815181106110d1576110d16117e2565b016020015160f81c905060646110e88260196117f8565b6110f29190611817565b9392505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b806001600160a01b0381163b6111735760405162461bcd60e51b8152600401610477906117bf565b606680546001600160a01b0319166001600160a01b0384169081179091556040517fb87f5a0bface22cde699143559fb99f990ae54eea236995fc54178af91af859f90600090a25050565b806001600160a01b0381163b6111e65760405162461bcd60e51b8152600401610477906117bf565b606580546001600160a01b0319166001600160a01b0384169081179091556040517f7a61e573722ff8b205c8962b59d37e7d30573f368965597a844a94872204ebd790600090a25050565b6001600160a01b038116811461067357600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561128557611285611246565b604052919050565b600067ffffffffffffffff8211156112a7576112a7611246565b50601f01601f191660200190565b60006112c86112c38461128d565b61125c565b90508281528383830111156112dc57600080fd5b828260208301376000602084830101529392505050565b600082601f83011261130457600080fd5b6110f2838335602085016112b5565b600080600080600060a0868803121561132b57600080fd5b853561133681611231565b9450602086013567ffffffffffffffff8082111561135357600080fd5b61135f89838a016112f3565b9550604088013591508082111561137557600080fd5b50611382888289016112f3565b9598949750949560608101359550608001359392505050565b6000602082840312156113ad57600080fd5b81356110f281611231565b6000602082840312156113ca57600080fd5b5035919050565b60005b838110156113ec5781810151838201526020016113d4565b838111156113fb576000848401525b50505050565b600081518084526114198160208601602086016113d1565b601f01601f19169290920160200192915050565b6001600160a01b038816815260e06020820181905260009061145190830189611401565b82810360408401526114638189611401565b9150508560608301528460808301528360a083015282151560c083015298975050505050505050565b6000806000606084860312156114a157600080fd5b833563ffffffff811681146114b557600080fd5b925060208401359150604084013567ffffffffffffffff8111156114d857600080fd5b8401601f810186136114e957600080fd5b6114f8868235602084016112b5565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b60006001820161152a5761152a611502565b5060010190565b600181811c9082168061154557607f821691505b60208210810361156557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156115b557600081815260208120601f850160051c810160208610156115925750805b601f850160051c820191505b818110156115b15782815560010161159e565b5050505b505050565b815167ffffffffffffffff8111156115d4576115d4611246565b6115e8816115e28454611531565b8461156b565b602080601f83116001811461161d57600084156116055750858301515b600019600386901b1c1916600185901b1785556115b1565b600085815260208120601f198616915b8281101561164c5788860151825594840194600190910190840161162d565b508582101561166a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60808152600061168d6080830187611401565b828103602084015261169f8187611401565b604084019590955250506060015292915050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156116e957600080fd5b815167ffffffffffffffff81111561170057600080fd5b8201601f8101841361171157600080fd5b805161171f6112c38261128d565b81815285602083850101111561173457600080fd5b6117458260208301602086016113d1565b95945050505050565b6000821982111561176157611761611502565b500190565b60006020828403121561177857600080fd5b815180151581146110f257600080fd5b60008060006060848603121561179d57600080fd5b83516117a881611231565b602085015160409095015190969495509392505050565b6020808252600990820152680858dbdb9d1c9858dd60ba1b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561181257611812611502565b500290565b60008261183457634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220d08e2007b9bda1287bbb48d7af9ee9b2f26dc0d1fedc112c908af9c8ecf1d0fd64736f6c634300080f0033";

type MultinateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultinateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multinate__factory extends ContractFactory {
  constructor(...args: MultinateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _attestationStation: PromiseOrValue<string>,
    _minimumAttestationScore: PromiseOrValue<BigNumberish>,
    _gnosisSafe: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multinate> {
    return super.deploy(
      _attestationStation,
      _minimumAttestationScore,
      _gnosisSafe,
      _usdc,
      overrides || {}
    ) as Promise<Multinate>;
  }
  override getDeployTransaction(
    _attestationStation: PromiseOrValue<string>,
    _minimumAttestationScore: PromiseOrValue<BigNumberish>,
    _gnosisSafe: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _attestationStation,
      _minimumAttestationScore,
      _gnosisSafe,
      _usdc,
      overrides || {}
    );
  }
  override attach(address: string): Multinate {
    return super.attach(address) as Multinate;
  }
  override connect(signer: Signer): Multinate__factory {
    return super.connect(signer) as Multinate__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultinateInterface {
    return new utils.Interface(_abi) as MultinateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multinate {
    return new Contract(address, _abi, signerOrProvider) as Multinate;
  }
}
