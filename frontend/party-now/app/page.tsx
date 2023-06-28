import Pane from "@/components/Pane";
import TodayParty from "@/components/TodayParty";
import localFont from "@next/font/local";
import clsx from "clsx";
import Image from "next/image";

const forza = localFont({
  src: "../public/Forza-Medium.woff2",
  variable: "--font-forza",
});

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-[calc(100dvh)]",
        "p-20",
        "font-sans",
        "bg-center",
        "bg-cover",
        "bg-no-repeat",
        "relative",
        "h-[1px]",
        forza.variable
      )}
      style={{ backgroundImage: "url(/kazoo.png)" }}
    >
      <div
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "justify-between",
          "relative",
          "z-10",
          "h-full",
          "max-w-xl",
          "border-[1px]",
          "border-red-400",
          "mx-auto"
        )}
      >
        <Pane>
          <div
            className={clsx(
              "flex",
              "md:flex-row",
              "flex-col",
              "items-center",
              "gap-2"
            )}
          >
            <Image
              width={64}
              height={47}
              alt={"pbidcursors"}
              src={"partybid_cursors.svg"}
            />
            <div
              className={clsx(
                "text-4xl",
                "md:text-6xl",
                "font-bold",
                "text-black",
                "break-words"
              )}
            >
              PartyNow
            </div>
          </div>
        </Pane>
        <TodayParty />
        <Pane>
          <div
            className={clsx(
              "flex",
              "items-center",
              "text-center",
              "leading-tight",
              "text-slate-600",
              "font-bold"
            )}
          >
            Who{"'"}s throwing a party?
          </div>
        </Pane>
      </div>
      <div
        className={clsx(
          "absolute",
          "inset-0",
          "bg-slate-400",
          "opacity-50",
          "z-0"
        )}
      />
    </main>
  );
}
