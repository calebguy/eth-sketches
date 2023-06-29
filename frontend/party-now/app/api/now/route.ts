import crowdfundFactoryAbi from "@/lib/abis/crowdfund_factory";
import { eth } from "@/lib/chain";
import {
  PARTY_CROWDFUND_FACTORY_ADDRESS,
  PARTY_DEPLOY_BLOCK,
} from "@/lib/constants";
import { NextResponse } from "next/server";
import { decodeEventLog } from "viem";

//@ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function GET(request: Request) {
  const logs = await eth.getLogs({
    address: PARTY_CROWDFUND_FACTORY_ADDRESS,
    fromBlock: BigInt(PARTY_DEPLOY_BLOCK),
  });
  const topics = [];
  for (const log of logs) {
    topics.push(
      decodeEventLog({
        abi: crowdfundFactoryAbi,
        data: log.data,
        topics: log.topics,
      })
    );
  }
  return NextResponse.json({ topics });
}
