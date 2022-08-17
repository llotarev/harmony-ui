import React from "react";

type ReturnType = ResizeObserverEntry | undefined;

function useResizeObserver<T extends HTMLElement | null>(ref: React.MutableRefObject<T>): ReturnType {

  const [resizeObserverEntry, setResizeObserverEntry] = React.useState<ResizeObserverEntry>();

  const handleResize = React.useCallback((entries: ResizeObserverEntry[]) => {
    if (entries[0]) {
      setResizeObserverEntry(entries[0])
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

  return resizeObserverEntry;
}

export default useResizeObserver;
