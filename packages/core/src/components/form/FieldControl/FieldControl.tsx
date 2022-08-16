import React from "react";
import * as Types from './types'
import styles from './styles.module.scss'
import useClassCombine from "@/hooks/useClassCombine";

const FieldControl = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    children, ...attrs
  } = props

  const classes = useClassCombine(attrs,[
    styles.fieldControl
  ]);

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  )
})

export default FieldControl;
