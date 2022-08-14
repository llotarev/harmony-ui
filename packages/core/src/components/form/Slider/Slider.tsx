import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import cn from "classnames";
import Input from "@/components/form/Input";
import useElementSize from "@/hooks/useElementSize";

const Slider: React.FC<Types.Props> = (props) => {

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const elementSize = useElementSize<HTMLInputElement | null>(inputRef);

  const style = React.useMemo<React.CSSProperties>(() => {
    return {
      ...props.style,
      ['--slider-track-width']: `${elementSize.width}px`
    }
  }, [props.style, elementSize]);

  const classes = cn([
    props.className,
    styles.slider
  ]);

  return (
    <Input {...props} type="range" ref={inputRef} style={style} className={classes}/>
  )
};

export default Slider;
