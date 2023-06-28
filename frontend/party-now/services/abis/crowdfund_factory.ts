const crowdfundFactoryAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract AuctionCrowdfund",
        name: "crowdfund",
        type: "address",
      },
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
        indexed: false,
        internalType: "struct AuctionCrowdfundBase.AuctionCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
    ],
    name: "AuctionCrowdfundCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract BuyCrowdfund",
        name: "crowdfund",
        type: "address",
      },
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
            name: "maximumPrice",
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
            name: "onlyHostCanBuy",
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
        indexed: false,
        internalType: "struct BuyCrowdfund.BuyCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
    ],
    name: "BuyCrowdfundCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract CollectionBatchBuyCrowdfund",
        name: "crowdfund",
        type: "address",
      },
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
            internalType: "contract IERC721",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "nftTokenIdsMerkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
          },
          {
            internalType: "uint96",
            name: "maximumPrice",
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
        indexed: false,
        internalType:
          "struct CollectionBatchBuyCrowdfund.CollectionBatchBuyCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
    ],
    name: "CollectionBatchBuyCrowdfundCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract CollectionBuyCrowdfund",
        name: "crowdfund",
        type: "address",
      },
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
            internalType: "contract IERC721",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
          },
          {
            internalType: "uint96",
            name: "maximumPrice",
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
        indexed: false,
        internalType:
          "struct CollectionBuyCrowdfund.CollectionBuyCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
    ],
    name: "CollectionBuyCrowdfundCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract InitialETHCrowdfund",
        name: "crowdfund",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract Party",
        name: "party",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address payable",
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
            internalType: "bool",
            name: "disableContributingForExistingCard",
            type: "bool",
          },
          {
            internalType: "uint96",
            name: "minTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "maxTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint16",
            name: "exchangeRateBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "fundingSplitBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "fundingSplitRecipient",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
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
        ],
        indexed: false,
        internalType: "struct InitialETHCrowdfund.InitialETHCrowdfundOptions",
        name: "crowdfundOpts",
        type: "tuple",
      },
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
            internalType: "contract IERC721[]",
            name: "preciousTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "preciousTokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint40",
            name: "rageQuitTimestamp",
            type: "uint40",
          },
        ],
        indexed: false,
        internalType: "struct InitialETHCrowdfund.ETHPartyOptions",
        name: "partyOpts",
        type: "tuple",
      },
    ],
    name: "InitialETHCrowdfundCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract ReraiseETHCrowdfund",
        name: "crowdfund",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract Party",
            name: "party",
            type: "address",
          },
          {
            internalType: "address payable",
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
            internalType: "bool",
            name: "disableContributingForExistingCard",
            type: "bool",
          },
          {
            internalType: "uint96",
            name: "minTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "maxTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint16",
            name: "exchangeRateBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "fundingSplitBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "fundingSplitRecipient",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
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
        ],
        indexed: false,
        internalType: "struct ETHCrowdfundBase.ETHCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
    ],
    name: "ReraiseETHCrowdfundCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract RollingAuctionCrowdfund",
        name: "crowdfund",
        type: "address",
      },
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
        indexed: false,
        internalType: "struct AuctionCrowdfundBase.AuctionCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "allowedAuctionsMerkleRoot",
        type: "bytes32",
      },
    ],
    name: "RollingAuctionCrowdfundCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract AuctionCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createAuctionCrowdfund",
    outputs: [
      {
        internalType: "contract AuctionCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract BuyCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
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
            name: "maximumPrice",
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
            name: "onlyHostCanBuy",
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
        internalType: "struct BuyCrowdfund.BuyCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createBuyCrowdfund",
    outputs: [
      {
        internalType: "contract BuyCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract CollectionBatchBuyCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
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
            internalType: "contract IERC721",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "nftTokenIdsMerkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
          },
          {
            internalType: "uint96",
            name: "maximumPrice",
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
        internalType:
          "struct CollectionBatchBuyCrowdfund.CollectionBatchBuyCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createCollectionBatchBuyCrowdfund",
    outputs: [
      {
        internalType: "contract CollectionBatchBuyCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract CollectionBuyCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
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
            internalType: "contract IERC721",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
          },
          {
            internalType: "uint96",
            name: "maximumPrice",
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
        internalType:
          "struct CollectionBuyCrowdfund.CollectionBuyCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createCollectionBuyCrowdfund",
    outputs: [
      {
        internalType: "contract CollectionBuyCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract InitialETHCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address payable",
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
            internalType: "bool",
            name: "disableContributingForExistingCard",
            type: "bool",
          },
          {
            internalType: "uint96",
            name: "minTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "maxTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint16",
            name: "exchangeRateBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "fundingSplitBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "fundingSplitRecipient",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
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
        ],
        internalType: "struct InitialETHCrowdfund.InitialETHCrowdfundOptions",
        name: "crowdfundOpts",
        type: "tuple",
      },
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
            internalType: "contract IERC721[]",
            name: "preciousTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "preciousTokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint40",
            name: "rageQuitTimestamp",
            type: "uint40",
          },
        ],
        internalType: "struct InitialETHCrowdfund.ETHPartyOptions",
        name: "partyOpts",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createInitialETHCrowdfund",
    outputs: [
      {
        internalType: "contract InitialETHCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ReraiseETHCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract Party",
            name: "party",
            type: "address",
          },
          {
            internalType: "address payable",
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
            internalType: "bool",
            name: "disableContributingForExistingCard",
            type: "bool",
          },
          {
            internalType: "uint96",
            name: "minTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "maxTotalContributions",
            type: "uint96",
          },
          {
            internalType: "uint16",
            name: "exchangeRateBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "fundingSplitBps",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "fundingSplitRecipient",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "duration",
            type: "uint40",
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
        ],
        internalType: "struct ETHCrowdfundBase.ETHCrowdfundOptions",
        name: "opts",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createReraiseETHCrowdfund",
    outputs: [
      {
        internalType: "contract ReraiseETHCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract RollingAuctionCrowdfund",
        name: "crowdfundImpl",
        type: "address",
      },
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
      {
        internalType: "bytes32",
        name: "allowedAuctionsMerkleRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "createGateCallData",
        type: "bytes",
      },
    ],
    name: "createRollingAuctionCrowdfund",
    outputs: [
      {
        internalType: "contract RollingAuctionCrowdfund",
        name: "inst",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export default crowdfundFactoryAbi;
