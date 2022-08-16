import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import Input from "@/components/form/Input";
import useClassCombine from "@/hooks/useClassCombine";

const Radio = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const classes = useClassCombine(props, [
    styles.radio
  ]);

  return (
    <Input {...props} type="radio" ref={ref} className={classes}/>
  )
})

export default Radio;
