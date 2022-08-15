import {ComponentMeta, ComponentStory} from '@storybook/react';

import Counter from "@/components/form/Counter";
import React from "react";

export default {
  title: 'form/Counter',
  component: Counter,
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
    },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {

  const [state, setState] = React.useState(10);

  return <Counter {...args} value={state} onChange={setState}/>;
};

export const Example = Template.bind({});

Example.args = {};
