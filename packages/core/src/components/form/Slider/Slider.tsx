import React from "react";
import styles from './styles.module.scss'
import * as Types from './types'
import Input from "@/components/form/Input";
import useSize from "@/hooks/useSize";
import useStyleCombine from "@/hooks/useStyleCombine";
import useClassCombine from "@/hooks/useClassCombine";

const Slider: React.FC<Types.Props> = (props) => {

  const ref = React.useRef<Types.Ref>(null);
  const {width} = useSize<Types.Ref>(ref);

  const styleCombine = useStyleCombine<Types.Props>(props, {
    '--slider-track-width': width + 'px'
  });

  const classes = useClassCombine<Types.Props>(props, [
    styles.slider
  ])

  return (
    <Input {...props} type="range" ref={ref} style={styleCombine} className={classes}/>
  )
};

export default Slider;
