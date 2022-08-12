import {ComponentMeta, ComponentStory} from '@storybook/react';

import Counter from "@/components/form/Counter";

export default {
  title: 'form/Counter',
  component: Counter,
  argTypes: {},
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Example = Template.bind({});

Example.args = {
  placeholder: "0"
};
