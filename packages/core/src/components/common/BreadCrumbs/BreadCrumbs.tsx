import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import cn from "classnames";


const BreadCrumbs = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const {
    children, ...attrs
  } = props;

  const classes = cn([
    props.className,
    styles.breadCrumbs
  ]);

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  )
})

export default BreadCrumbs;
