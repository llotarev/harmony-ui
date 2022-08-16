import {ComponentMeta, ComponentStory} from '@storybook/react';

import Flex from "@/components/layout/Flex";
import Radio from '@/components/form/Radio';
import Button from '@/components/form/Button';
import Counter from '@/components/form/Counter';
import Checkbox from '@/components/form/Checkbox';
import useMediaQuery from "@/hooks/useMediaQuery";

export default {
  title: 'layout/Flex',
  component: Flex,
  argTypes: {
    align: {
      control: {type: 'select'},
      options: ["flex-start", "center", "flex-end"]
    },
    justify: {
      control: {type: 'select'},
      options: ["flex-start", "center", "flex-end"]
    },
    direction: {
      control: {type: 'select'},
      options: ['row', 'column', 'row-reverse', 'column-reverse']
    },
    gap: {
      control: {type: 'text'},
    }
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => {
  const isMobile = useMediaQuery('(max-width: 400px)')
  return (
    <Flex {...args}>
      <Flex direction={isMobile ? "column" : "row"} justify="center" gap="12px">
        <Checkbox>Checkbox</Checkbox>
        <Checkbox/>
        <Checkbox/>
        <Checkbox/>
        <Radio name="radio">Radio</Radio>
        <Radio name="radio"/>
        <Radio name="radio"/>
        <Radio name="radio"/>
        <Radio name="radio"/>
        <Counter/>
      </Flex>
      <Flex direction="row" justify="flex-end" gap="12px">
        <Button variant="destructive">Cancel</Button>
        <Button>Approve</Button>
      </Flex>
    </Flex>
  )
};

export const Example = Template.bind({});

Example.args = {};
