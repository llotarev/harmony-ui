import React from "react";
import * as CSS from "@/types/css-properties";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string
  wrap?: "wrap" | "nowrap" | CSS.GlobalProperties
  direction?: "column" | "row" | "row-reverse" | "column-reverse" | CSS.GlobalProperties
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | CSS.GlobalProperties
  align?: "flex-start" | "center" | "flex-end" | "stretch" | CSS.GlobalProperties
  inline?: boolean
}
