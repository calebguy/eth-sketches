import partyAbi from "@/lib/abis/party";
import { eth } from "@/lib/chain";
import { convertBase64ToString } from "@/lib/strings";
import { NextResponse } from "next/server";
import { isAddress } from "viem";

export async function GET(
  request: Request,
  { params }: { params: { address: string } }
) {
  const { address } = params;
  if (!address) {
    throw new Error("Missing address");
  } else if (!isAddress(address)) {
    throw new Error("Not a valid address");
  }

  try {
    const tokenUri = await eth.readContract({
      address: address as `0x${string}`,
      abi: partyAbi,
      functionName: "tokenURI",
      args: [1],
    });
    const humanReadableUri = convertBase64ToString(tokenUri as string);
    return NextResponse.json({ metadata: JSON.parse(humanReadableUri) });
  } catch (e) {
    console.error(e);
    throw new Error("Could not get uri");
  }
}
