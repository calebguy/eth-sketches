"use client";

import { getTopics } from "@/lib/api";
import { Party } from "@/lib/interfaces";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useMemo, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useQuery } from "react-query";
import Pane from "./Pane";

const PartyExplorer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useQuery("topics", getTopics);
  const party = useMemo(() => data?.[selectedIndex], [selectedIndex, data]);
  const handlePageForward = () => {
    setSelectedIndex((prev) => prev + 1);
  };
  const handlePageBackward = () => {
    setSelectedIndex((prev) => prev - 1);
  };
  const canPageForward = !data ? false : selectedIndex < data.length - 1;
  const canPageBackward = selectedIndex > 0;

  return (
    <div className={clsx("w-full", "flex", "flex-col", "gap-4")}>
      {!isLoading && (
        <div className={clsx("break-all", "flex", "flex-col", "gap-3")}>
          {party && <Party party={party} />}
        </div>
      )}
      {isLoading && (
        <div
          className={clsx(
            "animate-pulse",
            "flex",
            "justify-center",
            "items-center"
          )}
        >
          <Image
            src={"card-loader.svg"}
            alt={"party-loading"}
            width={346}
            height={520}
          />
        </div>
      )}
      <div className={clsx("flex", "justify-center", "mt-4")}>
        <Pane>
          <div className={clsx("flex", "justify-between", "gap-6")}>
            <button
              onClick={handlePageBackward}
              disabled={!canPageBackward}
              className={clsx(
                "hover:text-sky-500",
                "cursor-pointer",
                "hover:bg-sky-100",
                "rounded-lg",
                "disabled:text-slate-400",
                "text-neutral-700",
                "disabled:cursor-not-allowed",
                "disabled:hover:bg-transparent",
                "hover:scale-125",
                "active:scale-100",
                "disabled:scale-100"
              )}
            >
              <BiLeftArrowAlt size={34} />
            </button>
            <button
              onClick={handlePageForward}
              disabled={!canPageForward}
              className={clsx(
                "hover:text-sky-500",
                "cursor-pointer",
                "hover:bg-sky-100",
                "rounded-lg",
                "disabled:text-slate-400",
                "text-neutral-700",
                "disabled:cursor-not-allowed",
                "disabled:hover:bg-transparent",
                "hover:scale-125",
                "active:scale-100",
                "disabled:scale-100"
              )}
            >
              <BiRightArrowAlt size={34} />
            </button>
          </div>
        </Pane>
      </div>
    </div>
  );
};

interface PartyProps extends PropsWithChildren {
  party: Party;
}

const Party: React.FC<PartyProps> = ({ party }) => {
  return (
    <div>
      <div className={clsx("flex", "justify-center", "animate-spin-3d")}>
        <Link
          href={`https://party.app/party/${party.topic.args.party}`}
          target="_blank"
        >
          <Image
            src={party?.metadata?.image || "card-loader.svg"}
            alt={"Card"}
            width={346}
            height={520}
            className={clsx("hover:scale-105", "active:scale-100")}
          />
        </Link>
      </div>
      <div
        className={clsx("mt-8", "text-2xl", "text-center", "text-slate-600")}
      >
        {party.topic.args.partyOpts.name}
      </div>
      {/* <div>{JSON.stringify(party, undefined, 2)}</div> */}
    </div>
  );
};

export default PartyExplorer;
