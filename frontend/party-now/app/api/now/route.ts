import crowdfundFactoryAbi from "@/lib/abis/crowdfund_factory";
import partyAbi from "@/lib/abis/party";
import { eth } from "@/lib/chain";
import {
  PARTY_CROWDFUND_FACTORY_ADDRESS,
  PARTY_DEPLOY_BLOCK,
} from "@/lib/constants";
import { EventData, Metadata } from "@/lib/interfaces";
import { convertBase64ToString } from "@/lib/strings";
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
  logs.reverse();

  const toReturn = [];
  for (const log of logs) {
    //@ts-ignore
    const topic: EventData = decodeEventLog({
      abi: crowdfundFactoryAbi,
      data: log.data,
      topics: log.topics,
    });
    const data: { topic: EventData; metadata?: Metadata } = {
      topic,
    };
    try {
      const uri = await eth.readContract({
        address: topic.args.party,
        abi: partyAbi,
        functionName: "tokenURI",
        args: [1],
      });
      data.metadata = JSON.parse(convertBase64ToString(uri as string));
    } catch (e) {
      console.error("could not get party card", topic.args.party);
    }
    toReturn.push(data);
  }
  return NextResponse.json({ data: toReturn });
}
