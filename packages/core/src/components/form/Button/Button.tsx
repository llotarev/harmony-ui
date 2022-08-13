import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import cn from "classnames";

const Button = React.forwardRef<HTMLButtonElement, Types.Props>((props, ref) => {

  const {
    children, variant, ...attrs
  } = props

  const classes = cn([
    props.className,
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
