import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import * as Icons from '@harmony/icons'
import Input from "@/components/form/Input";
import cn from "classnames";

const Checkbox = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const classes = cn([
    props.className,
    styles.checkbox
  ]);

  return (
    <label htmlFor={props.id} className={classes}>
      <Input {...props} type="checkbox" ref={ref} className={styles.checkbox_input}/>
      <Icons.CheckMark className={styles.checkbox_checkmark}/>
    </label>

  )
})

export default Checkbox;
