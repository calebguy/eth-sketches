"use client";

import { getTopics } from "@/services/api";
import { EventData } from "@/services/interfaces";
import clsx from "clsx";
import { PropsWithChildren, useMemo, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import { useQuery } from "react-query";
import Pane from "./Pane";

const PartyExplorer = () => {
  const { data, isLoading } = useQuery("topics", getTopics);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const item = useMemo(() => data?.[selectedIndex], [selectedIndex, data]);

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
      <Pane block>
        {!isLoading && (
          <div className={clsx("break-all", "flex", "flex-col", "gap-3")}>
            {item && <Party event={item} />}
          </div>
        )}
        {isLoading && (
          <div
            className={clsx(
              "animate-pulse",
              "bg-slate-300",
              "p-4",
              "rounded-lg",
              "flex",
              "justify-center",
              "items-center"
            )}
          >
            <div
              className={clsx("animate-spin", "inline-block", "text-slate-400")}
            >
              <VscLoading size={24} />
            </div>
          </div>
        )}
      </Pane>
      <div className={clsx("flex", "justify-center")}>
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
  event: EventData;
}

const Party: React.FC<PartyProps> = ({ event }) => {
  return (
    <div>
      <Title title={"Event"}>{event.eventName}</Title>
      <Title title={"Creator"}>{event.args.creator}</Title>
      <Title title={"Topic"}>{event.args.crowdfund}</Title>
      <Title title={"Party Address"}>{event.args.party}</Title>
      <Title title={"Party Name"}>{event.args.partyOpts.name}</Title>
      <Title title={"Party Symbol"}>{event.args.partyOpts.symbol}</Title>

      <div className={clsx("mt-1")}>
        <Title title={"Hosts"}>
          {event.args.partyOpts.governanceOpts.hosts.map((host) => (
            <div key={host}>{host}</div>
          ))}
        </Title>
      </div>

      {/* <div className={clsx("mt-2")}>{JSON.stringify(event, undefined, 2)}</div> */}
    </div>
  );
};

interface TitleProps extends PropsWithChildren {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title, children }) => {
  return (
    <div className={clsx("flex", "flex-col")}>
      <span className={clsx("text-slate-500")}>{title}:</span>
      <span>{children}</span>
    </div>
  );
};

export default PartyExplorer;
