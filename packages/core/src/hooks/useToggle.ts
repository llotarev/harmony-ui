import React from "react";

type ReturnType = [boolean, React.MouseEventHandler];

function useToggle(initialState: boolean = false): ReturnType {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggleState = React.useCallback(() => {
    setState(state => !state);
  }, []);

  return [state, toggleState];
}

export default useToggle;
