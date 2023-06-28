import clsx from "clsx";
import { PropsWithChildren } from "react";

interface PaneProps extends PropsWithChildren {
  block?: boolean;
}

const Pane: React.FC<PaneProps> = ({ children, block }) => {
  return (
    <div
      className={clsx("rounded-xl", "relative", "p-6", {
        "w-full": block,
        "inline-block": !block,
      })}
    >
      <div
        className={clsx(
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
