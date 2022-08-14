import {ComponentMeta, ComponentStory} from '@storybook/react';

import Slider from "@/components/form/Slider";

export default {
  title: 'form/Slider',
  component: Slider,
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Example = Template.bind({});

Example.args = {
  type: "text",
  disabled: false,
  placeholder: "Placeholder"
};
