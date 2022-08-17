import {ComponentMeta, ComponentStory} from '@storybook/react';

import Flex from "@/components/layout/Flex";
import Radio from '@/components/form/Radio';
import Button from '@/components/form/Button';
import Counter from '@/components/form/Counter';
import Checkbox from '@/components/form/Checkbox';
import * as Icon from '@harmony/icons';
import React from "react";

export default {
  title: 'layout/Flex',
  component: Flex,
  argTypes: {
    wrap: {
      control: {type: 'select'},
      options: [null, "wrap", "nowrap"]
    },
    direction: {
      control: {type: 'select'},
      options: [null, 'row', 'column', 'row-reverse', 'column-reverse']
    },
    align: {
      control: {type: 'select'},
      options: [null, "flex-start", "center", "flex-end"]
    },
    justify: {
      control: {type: 'select'},
      options: [null, "flex-start", "center", "flex-end", "space-between", "space-around"]
    },
    gap: {
      control: {type: 'text'},
    }
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => {

  const [count, setCount] = React.useState(10);

  return (
    <Flex {...args}>
      <Flex direction="column" align="flex-start" justify="center">
        <Checkbox disabled>Checkbox 1 <Icon.Lock/></Checkbox>
        <Checkbox>Checkbox 2</Checkbox>
        <Checkbox>Checkbox 3</Checkbox>
      </Flex>
      <Flex direction="column" align="flex-start" justify="center">
        <Radio name="radio" disabled>Option 1 <Icon.Lock/></Radio>
        <Radio name="radio">Option 2</Radio>
        <Radio name="radio">Option 3</Radio>
      </Flex>
      <Counter value={count} onChange={setCount}/>
      <Flex direction="row" justify="flex-end" gap="12px">
        <Button variant="destructive">Cancel</Button>
        <Button>Save <Icon.ArrowRight/></Button>
      </Flex>
    </Flex>
  )
};

export const Example = Template.bind({});

Example.args = {};
