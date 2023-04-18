import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Divider } from './Divider'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

const color = getGlobalStyle('--color-neutral-gray-silver')

const Template: ComponentStory<typeof Divider> = (args) => {return (
  <Divider {...args} />
)}

export const Light = Template.bind({})
Light.args = {
  width: 90,
  verticalMargin: 20,
  thickness: 1,
  color
}

export const Regular = Template.bind({})
Regular.args = {
  width: 90,
  verticalMargin: 20,
  thickness: 2,
  color
}

export const Bold = Template.bind({})
Bold.args = {
  width: 90,
  verticalMargin: 20,
  thickness: 3,
  color
}
