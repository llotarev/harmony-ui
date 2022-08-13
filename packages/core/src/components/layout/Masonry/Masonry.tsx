import React from "react";
import * as Types from './types'
import styles from './styles.module.scss'
import cn from "classnames";

const Masonry = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    children, ...attrs
  } = props

  const classes = cn([
    attrs.className,
    styles.masonryLayout,
  ])

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  )
})

export default Masonry;
