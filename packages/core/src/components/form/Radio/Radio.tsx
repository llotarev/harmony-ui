import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import cn from "classnames";
import Input from "@/components/form/Input";

const Radio = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const classes = cn([
    props.className,
    styles.radio
  ]);

  return (
    <Input {...props} type="radio" ref={ref} className={classes}/>
  )
})

export default Radio;
