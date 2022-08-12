import React from "react";

export type Crumb<T> = {
  title: React.ReactNode
  payload?: T
  nesting?: Crumb<T>
}

export type Props = React.HTMLAttributes<HTMLDivElement>;
