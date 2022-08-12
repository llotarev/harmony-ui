import {ComponentMeta, ComponentStory} from '@storybook/react';

import BreadCrumbs, {BreadCrumbsTypes, mapCrumbs} from "@/components/common/BreadCrumbs";
import Crumb from "@/components/common/Crumb";

export default {
  title: 'common/BreadCrumbs',
  component: BreadCrumbs,
  argTypes: {},
} as ComponentMeta<typeof BreadCrumbs>;


const crumbs: BreadCrumbsTypes.Crumb<number> = {
  title: "root",
  payload: 1,
  nesting: {
    title: "home",
    payload: 2,
    nesting: {
      title: "Download",
      payload: 3,
      nesting: {
        title: "lol",
        payload: 4,
        nesting: {
          title: "final",
          payload: 5
        }
      }
    },
  },
}


const Template: ComponentStory<typeof BreadCrumbs> = (args) => {
  return (
    <BreadCrumbs {...args}>
      {mapCrumbs(crumbs).map((crumb) => (
        <Crumb
          key={crumb.payload}
          crumb={crumb}
          onTitleClick={(e, crumb) => console.log(crumb)}
          onDividerClick={(e, nesting) => console.log(nesting)}
        >
          {crumb.title}
        </Crumb>
      ))}
    </BreadCrumbs>
  )
};

export const Example = Template.bind({});


Example.args = {};


