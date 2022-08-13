import {ComponentMeta, ComponentStory} from '@storybook/react';

import Stack from "@/components/layout/Stack";

export default {
  title: 'layout/Stack',
  component: Stack,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      control: {type: 'select'},
      options: [
        'horizontal',
        'vertical'
      ]
    }
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => {
  return (
    <Stack {...args}>
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1657299143474-c456e8388ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
        alt="example"/>
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1660335767235-9a4988cc7451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        alt="example"/>
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1660343002206-64524754235a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        alt="example"/>
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        alt="example"/>
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1649192154999-d924b3c9fb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
        alt="example"/>
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1649192155215-50b93456f85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
        alt="example"/>
    </Stack>
  )
};

export const Example = Template.bind({});

Example.args = {};
