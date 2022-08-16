import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import useClassCombine from "@/hooks/useClassCombine";

const Button = React.forwardRef<HTMLButtonElement, Types.Props>((props, ref) => {

  const {
    children, variant, ...attrs
  } = props

  const classes = useClassCombine(attrs, [
    styles.button, {
      [styles[['button', variant].join('-')]]: variant,
    }
  ]);

  return (
    <button {...attrs} ref={ref} className={classes}>
      {children}
    </button>
  )
})

export default Button;
