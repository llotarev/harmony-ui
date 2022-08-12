import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import cn from "classnames";

const Popover = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    children, ...attrs
  } = props;

  const classes = cn([
    attrs.className,
    styles.popover,
  ]);

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default Popover;
