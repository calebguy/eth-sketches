const auction_crowdfund = [
  {
    inputs: [
      {
        internalType: "contract IGlobals",
        name: "globals",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "contributions",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "maxContributions",
        type: "uint96",
      },
    ],
    name: "AboveMaximumContributionsError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AlreadyBurnedError",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyHighestBidderError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AlreadyMintedError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionFinalizedError",
    type: "error",
  },
  {
    inputs: [],
    name: "AuctionNotExpiredError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "contributions",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "minContributions",
        type: "uint96",
      },
    ],
    name: "BelowMinimumContributionsError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "errData",
        type: "bytes",
      },
    ],
    name: "EthTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumBid",
        type: "uint256",
      },
    ],
    name: "ExceedsMaximumBidError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "value",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "totalContributions",
        type: "uint96",
      },
    ],
    name: "ExceedsTotalContributionsError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddressError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAuctionIdError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "bps",
        type: "uint16",
      },
    ],
    name: "InvalidBpsError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidContributorError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDelegateError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidGovernanceOptionsError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "InvalidTokenError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumBid",
        type: "uint256",
      },
    ],
    name: "MinimumBidExceedsMaximumBidError",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingHostsError",
    type: "error",
  },
  {
    inputs: [],
    name: "NoContributionsError",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPartyError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        internalType: "contract IGateKeeper",
        name: "gateKeeper",
        type: "address",
      },
      {
        internalType: "bytes12",
        name: "gateKeeperId",
        type: "bytes12",
      },
      {
        internalType: "bytes",
        name: "gateData",
        type: "bytes",
      },
    ],
    name: "NotAllowedByGateKeeperError",
    type: "error",
  },
  {
    inputs: [],
    name: "NothingToClaimError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyConstructorError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyContributorError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyDelegateCallError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "notDao",
        type: "address",
      },
    ],
    name: "OnlyPartyDaoError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "notDao",
        type: "address",
      },
    ],
    name: "OnlyPartyDaoOrHostError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyPartyHostError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWhenEmergencyActionsAllowedError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract Party",
        name: "party",
        type: "address",
      },
    ],
    name: "PartyAlreadyExistsError",
    type: "error",
  },
  {
    inputs: [],
    name: "SplitRecipientAlreadyBurnedError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v",
        type: "uint256",
      },
    ],
    name: "Uint256ToUint96CastOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Crowdfund.CrowdfundLifecycle",
        name: "lc",
        type: "uint8",
      },
    ],
    name: "WrongLifecycleError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "Bid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethUsed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethOwed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votingPower",
        type: "uint256",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousTotalContributions",
        type: "uint256",
      },
    ],
    name: "Contributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountEth",
        type: "uint256",
      },
    ],
    name: "EmergencyExecute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyExecuteDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Lost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract Party",
        name: "party",
        type: "address",
      },
    ],
    name: "Won",
    type: "event",
  },
  {
    inputs: [],
    name: "IMPL",
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
    inputs: [
      {
        internalType: "address payable",
        name: "contributor",
        type: "address",
      },
    ],
    name: "activateOrRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionId",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable[]",
        name: "contributors",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "revertOnFailure",
        type: "bool",
      },
    ],
    name: "batchActivateOrRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable[]",
        name: "contributors",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "revertOnFailure",
        type: "bool",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "initialDelegates",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "gateDatas",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFailure",
        type: "bool",
      },
    ],
    name: "batchContributeFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "bid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract Party",
            name: "partyImpl",
            type: "address",
          },
          {
            internalType: "contract IPartyFactory",
            name: "partyFactory",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "hosts",
            type: "address[]",
          },
          {
            internalType: "uint40",
            name: "voteDuration",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executionDelay",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "passThresholdBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "feeRecipient",
            type: "address",
          },
        ],
        internalType: "struct Crowdfund.FixedGovernanceOpts",
        name: "governanceOpts",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableAddAuthorityProposal",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowArbCallsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowOperatorsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "distributionsRequireVote",
            type: "bool",
          },
        ],
        internalType: "struct ProposalStorage.ProposalEngineOpts",
        name: "proposalEngineOpts",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "hostIndex",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "amount",
        type: "uint96",
      },
      {
        components: [
          {
            internalType: "contract Party",
            name: "partyImpl",
            type: "address",
          },
          {
            internalType: "contract IPartyFactory",
            name: "partyFactory",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "hosts",
            type: "address[]",
          },
          {
            internalType: "uint40",
            name: "voteDuration",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executionDelay",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "passThresholdBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "feeRecipient",
            type: "address",
          },
        ],
        internalType: "struct Crowdfund.FixedGovernanceOpts",
        name: "governanceOpts",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableAddAuthorityProposal",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowArbCallsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowOperatorsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "distributionsRequireVote",
            type: "bool",
          },
        ],
        internalType: "struct ProposalStorage.ProposalEngineOpts",
        name: "proposalEngineOpts",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "hostIndex",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "contributor",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "claims",
    outputs: [
      {
        internalType: "uint256",
        name: "refund",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "governanceTokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "gateData",
        type: "bytes",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialDelegate",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "gateData",
        type: "bytes",
      },
    ],
    name: "contributeFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "delegateCallAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "delegationsByContributor",
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
    inputs: [
      {
        components: [
          {
            internalType: "contract Party",
            name: "partyImpl",
            type: "address",
          },
          {
            internalType: "contract IPartyFactory",
            name: "partyFactory",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "hosts",
            type: "address[]",
          },
          {
            internalType: "uint40",
            name: "voteDuration",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executionDelay",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "passThresholdBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "feeRecipient",
            type: "address",
          },
        ],
        internalType: "struct Crowdfund.FixedGovernanceOpts",
        name: "governanceOpts",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableAddAuthorityProposal",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowArbCallsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowOperatorsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "distributionsRequireVote",
            type: "bool",
          },
        ],
        internalType: "struct ProposalStorage.ProposalEngineOpts",
        name: "proposalEngineOpts",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "hostIndex",
        type: "uint256",
      },
    ],
    name: "disableEmergencyExecute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "targetCallData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountEth",
        type: "uint256",
      },
    ],
    name: "emergencyExecute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyExecuteDisabled",
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
    name: "expiry",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract Party",
            name: "partyImpl",
            type: "address",
          },
          {
            internalType: "contract IPartyFactory",
            name: "partyFactory",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "hosts",
            type: "address[]",
          },
          {
            internalType: "uint40",
            name: "voteDuration",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executionDelay",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "passThresholdBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "feeRecipient",
            type: "address",
          },
        ],
        internalType: "struct Crowdfund.FixedGovernanceOpts",
        name: "governanceOpts",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableAddAuthorityProposal",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowArbCallsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowOperatorsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "distributionsRequireVote",
            type: "bool",
          },
        ],
        internalType: "struct ProposalStorage.ProposalEngineOpts",
        name: "proposalEngineOpts",
        type: "tuple",
      },
    ],
    name: "finalize",
    outputs: [
      {
        internalType: "contract Party",
        name: "party_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateKeeper",
    outputs: [
      {
        internalType: "contract IGateKeeper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gateKeeperId",
    outputs: [
      {
        internalType: "bytes12",
        name: "",
        type: "bytes12",
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
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contributor",
        type: "address",
      },
    ],
    name: "getContributorInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "ethContributed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethUsed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethOwed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votingPower",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCrowdfundLifecycle",
    outputs: [
      {
        internalType: "enum Crowdfund.CrowdfundLifecycle",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "customizationPresetId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionId",
            type: "uint256",
          },
          {
            internalType: "contract IMarketWrapper",
            name: "market",
            type: "address",
          },
          {
            internalType: "contract IERC721",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nftTokenId",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
          },
          {
            internalType: "uint96",
            name: "maximumBid",
            type: "uint96",
          },
          {
            internalType: "address payable",
            name: "splitRecipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "splitBps",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "initialContributor",
            type: "address",
          },
          {
            internalType: "address",
            name: "initialDelegate",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "minContribution",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "maxContribution",
            type: "uint96",
          },
          {
            internalType: "contract IGateKeeper",
            name: "gateKeeper",
            type: "address",
          },
          {
            internalType: "bytes12",
            name: "gateKeeperId",
            type: "bytes12",
          },
          {
            internalType: "bool",
            name: "onlyHostCanBid",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "contract Party",
                name: "partyImpl",
                type: "address",
              },
              {
                internalType: "contract IPartyFactory",
                name: "partyFactory",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "hosts",
                type: "address[]",
              },
              {
                internalType: "uint40",
                name: "voteDuration",
                type: "uint40",
              },
              {
                internalType: "uint40",
                name: "executionDelay",
                type: "uint40",
              },
              {
                internalType: "uint16",
                name: "passThresholdBps",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "feeBps",
                type: "uint16",
              },
              {
                internalType: "address payable",
                name: "feeRecipient",
                type: "address",
              },
            ],
            internalType: "struct Crowdfund.FixedGovernanceOpts",
            name: "governanceOpts",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "enableAddAuthorityProposal",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowArbCallsToSpendPartyEth",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowOperatorsToSpendPartyEth",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "distributionsRequireVote",
                type: "bool",
              },
            ],
            internalType: "struct ProposalStorage.ProposalEngineOpts",
            name: "proposalEngineOpts",
            type: "tuple",
          },
        ],
        internalType: "struct AuctionCrowdfundBase.AuctionCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "lastBid",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "market",
    outputs: [
      {
        internalType: "contract IMarketWrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxContribution",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maximumBid",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minContribution",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftContract",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftTokenId",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyHostCanBid",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "party",
    outputs: [
      {
        internalType: "contract Party",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partyOptsHash",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "splitBps",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "splitRecipient",
    outputs: [
      {
        internalType: "address payable",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalContributions",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export default auction_crowdfund;
