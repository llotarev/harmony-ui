import {ComponentMeta, ComponentStory} from '@storybook/react';

import Input from "@/components/form/Input";

export default {
  title: 'form/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Example = Template.bind({});

Example.args = {
  type: "text",
  disabled: false,
  placeholder: "Enter text..."
};
