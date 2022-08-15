import React from "react";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "middle" | "end"
  orientation?: "horizontal" | "vertical"
}
