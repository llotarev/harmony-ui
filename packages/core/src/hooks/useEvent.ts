import React from 'react';

function useEvent(handler: Function) {
  const handlerRef = React.useRef<Function>();

  React.useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return React.useCallback((...args: any) => {
    const fn = handlerRef.current as Function;
    return fn(...args);
  }, []);
}

export default useEvent;
