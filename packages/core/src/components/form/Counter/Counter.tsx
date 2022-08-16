import React from "react";
import styles from './styles.module.scss';
import * as Types from './types';
import * as Icons from "@harmony/icons";
import Input from "@/components/form/Input";
import FieldControl from "@/components/form/FieldControl";
import useClassCombine from "@/hooks/useClassCombine";
import useCounter from "@/hooks/useCounter";

const Counter = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const {
    value = 0, disabled, step = 1, min = -Infinity, max = Infinity,
    onChange = () => null,
    ...attrs
  } = props

  const counter = useCounter({
    count: value, min, max, step,
    onIncrement: onChange,
    onDecrement: onChange
  });

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(e.target.value);
    const value = count < min ? min : count > max ? max : count;

    onChange(value, e);
  }, [min, max]);

  const finalProps = React.useMemo(() => ({
    ref,
    type: "number",
    value: value.toString(),
    disabled, step, min, max,
  }), [ref, value, disabled, step, min, max]);

  const classes = useClassCombine(attrs, [
    styles.counter
  ]);

  return (
    <div className={classes}>
      <Input {...attrs} {...finalProps} onChange={handleChange} className={styles.counter_input}/>
      <FieldControl className={styles.counter_control}>
        <button disabled={disabled || counter.isMax} type="button" onClick={counter.increment}>
          <Icons.ArrowUp/>
        </button>
        <button disabled={disabled || counter.isMin} type="button" onClick={counter.decrement}>
          <Icons.ArrowDown/>
        </button>
      </FieldControl>
    </div>
  )
});

export default Counter;
