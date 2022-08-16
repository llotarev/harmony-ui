import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import Input from "@/components/form/Input";
import useClassCombine from "@/hooks/useClassCombine";
import Flex from "@/components/layout/Flex";

const Radio = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const {
    children, label, ...attrs
  } = props

  const finalLabel = React.useMemo(() => children || label, [
    children, label
  ])

  const classes = useClassCombine(props, [
    styles.radio
  ]);

  return (
    <label htmlFor={attrs.id}>
      <Flex inline direction="row" align="center" justify="center" gap="8px">
        <Input {...attrs} type="radio" ref={ref} className={classes}/>
        {finalLabel}
      </Flex>
    </label>
  )
})

export default Radio;
