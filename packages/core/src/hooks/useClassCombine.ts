import React from "react";
import cn, {Argument} from "classnames";

type ReturnType = string

function useClassCombine<P extends { className?: string }>(props: P, ...classes: Array<Argument>): ReturnType {
  return React.useMemo(() => cn(props["className"], classes), [props, classes])
}

export default useClassCombine;
