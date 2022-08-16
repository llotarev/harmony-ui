import React from "react";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string
  align?: "flex-start" | "center" | "flex-end"
  justify?: "flex-start" | "center" | "flex-end"
  direction?: "column" | "row" | "row-reverse" | "column-reverse"
  inline?: boolean
}
