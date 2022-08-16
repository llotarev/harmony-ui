import React from "react";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "flat" | "text" | "destructive"
}
