import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import Input from "@/components/form/Input";
import useStyleCombine from "@/hooks/useStyleCombine";
import useClassCombine from "@/hooks/useClassCombine";
import useResizeObserver from "@/hooks/useResizeObserver";

const Slider: React.FC<Types.Props> = (props) => {

  const sliderRef = React.useRef(null);
  const sliderEntry = useResizeObserver(sliderRef);

  const styleCombine = useStyleCombine(props, {
    '--slider-track-width': sliderEntry?.contentRect.width + 'px'
  });

  const classes = useClassCombine(props, [
    styles.slider
  ])

  return (
    <Input {...props} type="range" ref={sliderRef} style={styleCombine} className={classes}/>
  )
};

export default Slider;
