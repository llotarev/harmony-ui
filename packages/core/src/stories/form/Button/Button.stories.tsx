import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from "@/components/form/Button";
import * as Icons from "@harmony/icons";
import palette from '@/accets/palettes.json'


export default {
  title: 'form/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
    },
    variant: {
      control: {type: 'select'},
      options: [
        null,
        'outline',
        'flat',
        'text',
        'destructive',
      ]
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});
export const WithIcon = Template.bind({});
export const Custom = Template.bind({});

Example.args = {children: "Button"};

WithIcon.args = {
  children: (
    <>
      Button
      <Icons.ArrowRight/>
    </>
  )
}


Custom.args = {
  children: (
    <>
      <Icons.ArrowLeft/>
      Back
    </>
  ),
  style: {
    // @ts-ignore
    '--accent-color-500': palette.Orange['500'],
    '--accent-color-200': palette.Orange['200'],
    '--accent-color-300': palette.Orange['300'],
    '--accent-color-600': palette.Orange['600'],
    '--corner-radius': '2px',
    height: 'auto',
    fontSize: "18px",
    fontWeight: 400,
    padding: "2px 12px",
  }
}
