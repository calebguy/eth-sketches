"use client";

import { getMetadata, getTopics } from "@/lib/api";
import { EventData } from "@/lib/interfaces";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useMemo, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import { useQuery } from "react-query";
import Pane from "./Pane";

const PartyExplorer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useQuery("topics", getTopics);
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
  const { data, isLoading, error } = useQuery(
    ["metadata", event.args.party],
    () => getMetadata(event.args.party)
  );
  return (
    <div>
      {isLoading && <CardLoader />}
      {!isLoading && data && (
        <div className={clsx("flex", "justify-center")}>
          <Link href={data.external_url} target="_blank">
            <Image
              src={data.image}
              alt={"Card"}
              width={346}
              height={520}
              className={clsx("hover:scale-105", "active:scale-100")}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

const CardLoader = () => {
  return (
    <div
      className={clsx(
        "h-[330px]",
        "w-[220px]",
        "animate-pulse",
        "bg-slate-200",
        "mx-auto",
        "rounded-3xl",
        "mt-1",
        "p-2.5",
        "flex",
        "flex-col",
        "justify-between"
      )}
    >
      <div className={clsx("flex", "justify-between")}>
        <div
          className={clsx(
            "bg-slate-100",
            "animate-pulse",
            "rounded-full",
            "w-[90px]",
            "h-[90px]"
          )}
        />
        <div
          className={clsx(
            "justify-between",
            "flex",
            "flex-col",
            "items-end",
            "gap-2"
          )}
        >
          <div
            className={clsx(
              "bg-slate-100",
              "animate-pulse",
              "rounded-xl",
              "h-[14px]",
              "w-[80px]"
            )}
          />
          <div className={clsx("flex", "flex-col", "gap-1", "items-center")}>
            <div
              className={clsx(
                "bg-slate-100",
                "animate-pulse",
                "rounded-full",
                "h-[35px]",
                "w-[45px]"
              )}
            />
            <div
              className={clsx(
                "bg-slate-100",
                "animate-pulse",
                "rounded-xl",
                "h-[18px]",
                "w-[40px]"
              )}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "bg-slate-100",
          "h-[210px]",
          "w-full",
          "rounded-xl",
          "shrink-0"
        )}
      />
    </div>
  );
};

export default PartyExplorer;
