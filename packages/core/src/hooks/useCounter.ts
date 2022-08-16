import React from "react";

type PropsType = {
  min?: number
  max?: number
  step?: number
  count?: number
  onIncrement?(count: number): void
  onDecrement?(count: number): void
}

type ReturnType = {
  count: number
  isMin: boolean
  isMax: boolean
  increment(): void
  decrement(): void
}

function useCounter(props: PropsType): ReturnType {

  const {
    step = 1, min = -Infinity, max = Infinity,
    onIncrement = () => null,
    onDecrement = () => null
  } = props;

  const [count, setCount] = React.useState<number>(props.count || 0);

  const increment = React.useCallback(() => setCount(state => {
    const newState = Math.min(state + step, max);
    onIncrement(newState)

    return newState
  }), [step, max, onIncrement]);

  const decrement = React.useCallback(() => setCount(state => {
    const newState = Math.max(state - step, min);
    onDecrement(newState);

    return newState;
  }), [step, min, onDecrement]);

  const isMin = React.useMemo(() => min >= count, [min, count]);
  const isMax = React.useMemo(() => max <= count, [max, count]);

  return {
    count, isMin, isMax,
    increment,
    decrement,
  }
}


export default useCounter;
