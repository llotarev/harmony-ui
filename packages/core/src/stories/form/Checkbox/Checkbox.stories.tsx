import {ComponentMeta, ComponentStory} from '@storybook/react';

import Checkbox from "@/components/form/Checkbox";

export default {
  title: 'form/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
    },
    checked: {
      control: {type: 'boolean'},
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Example = Template.bind({});

Example.args = {};
