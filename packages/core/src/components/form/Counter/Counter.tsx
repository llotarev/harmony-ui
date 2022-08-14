import React from "react";
import styles from './styles.module.scss';
import * as Types from './types';
import * as Icons from "@harmony/icons";
import Input from "@/components/form/Input";
import FieldControl from "@/components/form/FieldControl";
import cn from "classnames";

const Counter = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const classes = cn([
    props.className,
    styles.counter
  ]);

  return (
    <div className={classes}>
      <Input {...props} ref={ref} type="number" className={styles.counter_input}/>
      <FieldControl className={styles.counter_control}>
        <button disabled={props.disabled} type="button"><Icons.ArrowUp/></button>
        <button disabled={props.disabled} type="button"><Icons.ArrowDown/></button>
      </FieldControl>
    </div>
  )
});

export default Counter;
