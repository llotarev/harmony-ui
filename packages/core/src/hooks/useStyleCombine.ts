import React from "react";
import validateTypesProperties from "@/utils/validateTypesProperties";

type CustomProperties = {
  [key: string]: string | number | undefined
}

type ReturnType = Partial<React.CSSProperties>;

function useStyleCombine<P extends { style?: React.CSSProperties }>(props: P, customProperties: CustomProperties): ReturnType {
  return React.useMemo<ReturnType>(() => ({
    ...props['style'],
    ...validateTypesProperties(customProperties, ["string", "number"])
  }), [props, customProperties])
}

export default useStyleCombine;
