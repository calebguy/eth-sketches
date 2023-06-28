import crowdfundFactoryAbi from "@/services/abis/crowdfund_factory";
import { eth } from "@/services/chain";
import { NextResponse } from "next/server";
import { decodeEventLog } from "viem";

//@ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const PARTY_CROWDFUND_FACTORY_ADDRESS =
  "0x2e8920950677f8545b4ef80315f48e161cb02d1c";
const PARTY_DEPLOY_BLOCK = 17480014;

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
