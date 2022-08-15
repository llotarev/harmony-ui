import React from "react";
import styles from './styles.module.scss';
import * as Types from './types';
import * as Icons from "@harmony/icons";
import Input from "@/components/form/Input";
import FieldControl from "@/components/form/FieldControl";
import cn from "classnames";

const Counter = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const {
    min = -Infinity,
    max = Infinity,
    step = 1,
    value = 0,
    onChange = () => null,
    ...attrs
  } = props

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(e.target.value);
    const value = count < min ? min : count > max ? max : count;

    onChange(value, e);
  }, [min, max]);

  const handleIncrement = React.useCallback(() => {
    onChange(value + step);
  }, [value, step])

  const handleDecrement = React.useCallback(() => {
    onChange(value - step);
  }, [value, step])

  const minValue = React.useMemo<boolean>(() => min >= value, [min, value]);
  const maxValue = React.useMemo<boolean>(() => max <= value, [max, value]);
  const finalValue = React.useMemo<string>(() => value.toString(), [value]);

  const classes = cn([
    props.className,
    styles.counter
  ]);

  return (
    <div className={classes}>
      <Input
        {...attrs}
        ref={ref}
        type="number"
        min={min}
        max={max}
        step={step}
        value={finalValue}
        onChange={handleChange}
        className={styles.counter_input}
      />
      <FieldControl className={styles.counter_control}>
        <button disabled={props.disabled || maxValue} type="button" onClick={handleIncrement}>
          <Icons.ArrowUp/>
        </button>
        <button disabled={props.disabled || minValue} type="button" onClick={handleDecrement}>
          <Icons.ArrowDown/>
        </button>
      </FieldControl>
    </div>
  )
});

export default Counter;
