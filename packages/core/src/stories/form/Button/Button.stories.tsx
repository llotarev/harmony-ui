import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from "@/components/form/Button";
import * as Icons from "@harmony/icons";
import Color from "@/utils/Color";
import palette from '@/accets/palettes.json'

const color = new Color()

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
      Button
      <Icons.ArrowRight height="1em"/>
    </>
  ),
  style: {
    // @ts-ignore
    '--accent-color': color.HEX(palette.Green['500']).lightness(60),
    '--accent-color-200': color.HEX(palette.Green['500']).lightness(90),
    '--accent-color-300': color.HEX(palette.Green['500']).lightness(50),
    '--accent-color-600': color.HEX(palette.Green['500']).lightness(40),
    height: '24px',
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "6px",
    padding: " 0 6px",
  }
}
