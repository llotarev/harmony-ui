import React from "react";
import * as Types from './types'
import styles from './styles.module.scss'
import cn from "classnames";

const FieldControl = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    children, ...attrs
  } = props

  const classes = cn([
    props.className,
    styles.fieldControl
  ]);

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  )
})

export default FieldControl;
