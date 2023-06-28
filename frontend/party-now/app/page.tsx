import Pane from "@/components/Pane";
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
        "min-h-screen",
        "p-24",
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
          "h-full"
        )}
      >
        <Pane>
          <div className={clsx("flex", "items-center", "gap-2")}>
            <Image
              width={64}
              height={47}
              alt={"pbidcursors"}
              src={"partybid_cursors.svg"}
            />
            <div className={clsx("text-6xl", "font-bold", "text-sky-500")}>
              PartyNow
            </div>
          </div>
        </Pane>
        <Pane>*not built by PartyDAO*</Pane>
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
