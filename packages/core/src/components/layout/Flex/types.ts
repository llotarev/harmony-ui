import React from "react";

export type Direction = "column" | "row" | "row-reverse" | "column-reverse"
export type AlignJustify = "flex-start" | "center" | "flex-end"

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string
  align?: AlignJustify
  justify?: AlignJustify
  direction?: Direction
  inline?: boolean
}
