import React from "react";

type SizeType = {
  width: number,
  height: number
}

type ReturnType = SizeType;

function useSize<T extends HTMLElement | null>(ref: React.MutableRefObject<T>): ReturnType {

  const [size, setSize] = React.useState<SizeType>({
    width: 0,
    height: 0
  });

  const handleResize = React.useCallback((entries: ResizeObserverEntry[]) => {
    if (entries[0]) {
      setSize({
        width: entries[0].contentRect.width,
        height: entries[0].contentRect.height
      })
    }
  }, []);

  React.useLayoutEffect(() => {
    const element = ref.current;
    const resizeObserver = new ResizeObserver(handleResize);

    if (element) resizeObserver.observe(element as Element);

    return () => {
      if (element) resizeObserver.unobserve(element as Element);
    }
  }, [ref, handleResize])

  return size;
}

export default useSize;
