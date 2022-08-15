import React from "react";

type Picked =
  | "step"
  | "min"
  | "max"
  | "value"
  | "onChange"

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, Picked> & {
  min?: number
  max?: number
  step?: number
  value?: number
  onChange?(value: number, e?: React.ChangeEvent<HTMLInputElement>): void
}
