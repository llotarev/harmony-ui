import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import cn from "classnames";

const Input = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const classes = cn([
    props.className,
    styles.input
  ]);

  return (
    <input {...props} ref={ref} className={classes}/>
  )
})

export default Input;
