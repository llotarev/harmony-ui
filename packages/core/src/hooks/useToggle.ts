import React from "react";

type PropsType = {
  state?: boolean
}

type ReturnType = {
  state: boolean
  toggle(): void
};

function useToggle(props: PropsType): ReturnType {
  const [state, setState] = React.useState<boolean>(!!props.state);

  const toggle = React.useCallback(() => {
    setState(state => !state);
  }, []);

  return {state, toggle};
}

export default useToggle;
