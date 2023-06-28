import clsx from "clsx";
import { PropsWithChildren } from "react";

interface PaneProps extends PropsWithChildren {}

const Pane: React.FC<PaneProps> = ({ children }) => {
  return (
    <div className={clsx("rounded-xl", "relative", "p-6")}>
      <div
        className={clsx(
          //   "bg-slate-200",
          "bg-white",
          "opacity-90",
          "absolute",
          "inset-0",
          "rounded-xl",
          "z-0"
        )}
      />
      <div className={clsx("z-20", "relative")}>{children}</div>
    </div>
  );
};

export default Pane;
