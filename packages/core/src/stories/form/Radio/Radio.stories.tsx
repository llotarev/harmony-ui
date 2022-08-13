import {ComponentMeta, ComponentStory} from '@storybook/react';

import Radio from "@/components/form/Radio";

export default {
  title: 'form/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
    },
    checked: {
      control: {type: 'boolean'},
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Example = Template.bind({});

Example.args = {};
