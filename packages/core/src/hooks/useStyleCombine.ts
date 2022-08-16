import React from "react";

type CustomProperties = {
  [key: string]: string | number | undefined
}

type ReturnType = Partial<React.CSSProperties>;

function validProperties(properties: CustomProperties): CustomProperties {
  const entries = Object.entries(properties).filter(([, value]) => (
    typeof value === "string" || typeof value === "number"
  ))
  return Object.fromEntries(entries)
}

function useStyleCombine<P extends { style?: React.CSSProperties }>(props: P, customProperties: CustomProperties): ReturnType {
  return React.useMemo<ReturnType>(() => ({
    ...props['style'],
    ...validProperties(customProperties)
  }), [props, customProperties])
}

export default useStyleCombine;
