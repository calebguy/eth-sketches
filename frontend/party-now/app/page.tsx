import PartyExplorer from "@/components/PartyExplorer";
import clsx from "clsx";
import localFont from "next/font/local";

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
        <div className={clsx("grow", "flex", "flex-col", "justify-center")}>
          <PartyExplorer />
        </div>
      </div>
      <div
        className={clsx(
          "absolute",
          "inset-0",
          "bg-slate-400",
          "opacity-80",
          "z-0"
        )}
      />
    </main>
  );
}
