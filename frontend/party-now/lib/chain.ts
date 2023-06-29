import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export const eth = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
  ),
});
