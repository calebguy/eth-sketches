import Pane from "@/components/Pane";
import PartyExplorer from "@/components/PartyExplorer";
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
        "md:p-20",
        "p-8",
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
        <div className={clsx("grow", "flex", "flex-col", "justify-center")}>
          <PartyExplorer />
        </div>
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
