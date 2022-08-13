import React from "react";
import * as Types from './types'
import styles from './styles.module.scss'
import cn from "classnames";

const MasonryBox = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    children, ...attrs
  } = props

  const classes = cn([
    attrs.className,
    styles.masonryBox,
  ])

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  )
})

export default MasonryBox;
