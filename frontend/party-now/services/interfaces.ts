type CrowdfundOptions = {
  initialContributor: string;
  initialDelegate: string;
  minContribution: string;
  maxContribution: string;
  disableContributingForExistingCard: boolean;
  minTotalContributions: string;
  maxTotalContributions: string;
  exchangeRateBps: number;
  fundingSplitBps: number;
  fundingSplitRecipient: string;
  duration: number;
  gateKeeper: string;
  gateKeeperId: string;
};

type GovernanceOptions = {
  partyImpl: string;
  partyFactory: string;
  hosts: string[];
  voteDuration: number;
  executionDelay: number;
  passThresholdBps: number;
  feeBps: number;
  feeRecipient: string;
};

type PartyOptions = {
  name: string;
  symbol: string;
  customizationPresetId: string;
  governanceOpts: GovernanceOptions;
};

type ProposalEngineOptions = {
  enableAddAuthorityProposal: boolean;
  allowArbCallsToSpendPartyEth: boolean;
  allowOperatorsToSpendPartyEth: boolean;
  distributionsRequireVote: boolean;
};

export type EventData = {
  eventName: string;
  args: {
    creator: string;
    crowdfund: string;
    party: string;
    crowdfundOpts: CrowdfundOptions;
    partyOpts: PartyOptions;
    proposalEngineOpts: ProposalEngineOptions;
    preciousTokens: any[];
    preciousTokenIds: any[];
    rageQuitTimestamp: number;
  };
};
