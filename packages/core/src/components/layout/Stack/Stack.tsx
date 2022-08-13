import React from "react";
import * as Types from './types'
import styles from './styles.module.scss'
import cn from "classnames";

const Stack = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    children, orientation, ...attrs
  } = props

  const classes = cn([
    attrs.className,
    styles.stackLayout, {
      [styles[['stackLayout', orientation].join('-')]]: orientation
    }])

  return (
    <div {...attrs} ref={ref} className={classes}>
      {children}
    </div>
  )
})

Stack.defaultProps = {
  orientation: 'horizontal'
}

export default Stack;