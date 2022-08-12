import React from "react";
import {BreadCrumbsTypes} from "@/components/common/BreadCrumbs";

type Picked =
  | 'onClick'

export type Props<T> = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, Picked> & {
  crumb: BreadCrumbsTypes.Crumb<T>
  onTitleClick?(event: React.MouseEvent<HTMLButtonElement>, crumb: BreadCrumbsTypes.Crumb<T>): void
  onDividerClick?(event: React.MouseEvent<HTMLButtonElement>, nesting?: BreadCrumbsTypes.Crumb<T>): void
}
