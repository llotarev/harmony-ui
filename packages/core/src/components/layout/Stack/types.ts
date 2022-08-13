import React from "react";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  orientation: 'horizontal' | 'vertical'
}
