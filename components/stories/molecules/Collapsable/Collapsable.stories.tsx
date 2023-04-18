import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Collapsable } from './Collapsable'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Molecules/Collapsable',
  component: Collapsable
} as ComponentMeta<typeof Collapsable>

const Template: ComponentStory<typeof Collapsable> = (args) => {
  return (
    <>
      {[...Array(args['collapsableQuantity'])].map(() => {
        return <Collapsable key={args.title} {...args} />
      })}
    </>
  )
}

export const base = Template.bind({})
base.args = {
  collapsableQuantity: 1,
  backgroundColor: getGlobalStyle('--color-neutral-gray-silver'),
  title: 'Mermeladas',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui turpis volutpat sodales amet. Velit cursus
    elit sollicitudin quisque gravida imperdiet aliquet. Lobortis libero aliquam id nisl duis ac at. Sagittis tempus
    iaculis integer tincidunt vitae viverra. A auctor cum lectus tellus feugiat eu. Velit faucibus eget mauris,
    consectetur ultricies sed. Semper tempus, euismod pretium ut netus cras ac et eget. Nisi, suspendisse
    pellentesque quam ornare donec. Malesuada sit nec tincidunt sed mauris quis tellus. In aliquam vulputate
    nullam turpis condimentum. Ac leo viverra ullamcorper in mattis. Cras euismod enim id non. Amet aliquam ut
    vitae sed dui, enim sed varius. Tincidunt purus sodales proin ornare odio pretium risus sed. Adipiscing non
    scelerisque egestas tellus etiam tempor feugiat tellus. Est lectus quis aliquam et convallis. Scelerisque ac et,
    sit nulla quam.`
}
