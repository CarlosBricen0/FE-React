import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spacer } from './Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (args) => {return <Spacer {...args} />}
const HorizontalTemplate: ComponentStory<typeof Spacer> = (args) => {return <Spacer.Horizontal {...args} />}
const VerticalTemplate: ComponentStory<typeof Spacer> = (args) => {return <Spacer.Vertical {...args} />}

export const Default = Template.bind({})
Default.args = {
  size: 28,
  isVisible: true
}

export const Horizontal = HorizontalTemplate.bind({})
Horizontal.args = {
  size: 28,
  isVisible: true
}

export const Vertical = VerticalTemplate.bind({})
Vertical.args = {
  size: 28,
  isVisible: true
}
