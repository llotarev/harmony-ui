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
    '--accent-100': palette.Yellow['100'],
    '--accent-500': palette.Yellow['500'],
    '--accent-200': palette.Yellow['200'],
    '--accent-300': palette.Yellow['300'],
    '--accent-600': palette.Yellow['600'],
    '--corner-radius': '2px',
    height: 'auto',
    fontSize: "18px",
    fontWeight: 400,
    padding: "2px 12px",
  }
}
