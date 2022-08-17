import React from "react";
import * as Types from './types'
import styles from './styles.module.scss'
import useClassCombine from "@/hooks/useClassCombine";
import useStyleCombine from "@/hooks/useStyleCombine";

const Flex = React.forwardRef<HTMLDivElement, Types.Props>((props, ref) => {

  const {
    wrap, direction, justify, align, gap, children, inline, ...attrs
  } = props

  const classes = useClassCombine(attrs, [
    styles.flexLayout, {
      [styles['flexLayout-inline']]: inline
    }
  ])

  const style = useStyleCombine(attrs, {
    '--flex-wrap': wrap,
    '--flex-direction': direction,
    '--flex-justify': justify,
    '--flex-align': align,
    '--flex-gap': gap,
  })

  return (
    <div {...attrs} ref={ref} style={style} className={classes}>
      {children}
    </div>
  )
})

export default Flex;
