import React from "react";

export type Variant = "outline" | "flat" | "text" | "destructive"

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}
