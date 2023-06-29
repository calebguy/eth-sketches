import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export const eth = createPublicClient({
  chain: mainnet,
  transport: http(),
});
