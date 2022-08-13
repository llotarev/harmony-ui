import {ComponentMeta, ComponentStory} from '@storybook/react';

import Masonry from "@/components/layout/Masonry";
import MasonryBox from "@/components/layout/MasonryBox";

export default {
  title: 'layout/Masonry: !dev',
  component: Masonry,
  argTypes: {},
} as ComponentMeta<typeof Masonry>;

const Template: ComponentStory<typeof Masonry> = (args) => {
  return (
    <Masonry {...args} >
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1657299143474-c456e8388ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
          alt="example"/>
      </MasonryBox>
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1660335767235-9a4988cc7451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
          alt="example"/>
      </MasonryBox>
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1660343002206-64524754235a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
          alt="example"/>
      </MasonryBox>
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
          alt="example"/>
      </MasonryBox>
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1649192154999-d924b3c9fb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
          alt="example"/>
      </MasonryBox>
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1649192155215-50b93456f85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
          alt="example"/>
      </MasonryBox>
      <MasonryBox>
        <img
          src="https://images.unsplash.com/photo-1649192155215-50b93456f85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
          alt="example"/>
      </MasonryBox>
    </Masonry>
  )
};

export const Example = Template.bind({});

Example.args = {};
