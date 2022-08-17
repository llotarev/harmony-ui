import React from "react";
import styles from './styles.module.scss';
import * as Types from './types';
import * as Icons from "@harmony/icons";
import Input from "@/components/form/Input";
import FieldControl from "@/components/form/FieldControl";
import useClassCombine from "@/hooks/useClassCombine";
import useCounter from "@/hooks/useCounter";
import useStyleCombine from "@/hooks/useStyleCombine";
import useResizeObserver from "@/hooks/useResizeObserver";

const Counter = React.forwardRef<HTMLInputElement, Types.Props>((props, ref) => {

  const {
    value = 0, disabled, step = 1, min = -Infinity, max = Infinity,
    onChange = () => null,
    ...attrs
  } = props

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(e.target.value);
    const value = count < min ? min : count > max ? max : count;

    onChange(value, e);
  }, [min, max]);

  const fieldControlRef = React.useRef(null);
  const fieldControlEntry = useResizeObserver(fieldControlRef);

  const counter = useCounter({
    count: value, min, max, step,
    onIncrement: onChange,
    onDecrement: onChange
  });

  const style = useStyleCombine(attrs, {
    '--field-control-width': fieldControlEntry?.contentRect.width + 'px'
  });

  const classes = useClassCombine(attrs, [
    styles.counter
  ]);

  const finalValue = React.useMemo(() => value.toString(), [value])

  return (
    <div className={classes}>
      <Input
        {...attrs}
        ref={ref}
        type="number"
        inputMode="tel"
        min={min}
        max={max}
        step={step}
        style={style}
        value={finalValue}
        disabled={disabled}
        onChange={handleChange}
        className={styles.counter_input}
      />
      <FieldControl ref={fieldControlRef} className={styles.counter_control}>
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
