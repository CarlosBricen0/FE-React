import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Backbone } from './Backbone'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Backbone',
  component: Backbone
} as ComponentMeta<typeof Backbone>

const Template: ComponentStory<typeof Backbone> = (args) => {return <Backbone {...args} />}

const backgroundColor = getGlobalStyle('--color-loaders-background')
const foregroundColor = getGlobalStyle('--color-loaders-fore-ground')

export const GenericHorizontally = Template.bind({})
GenericHorizontally.args = {
  backgroundColor,
  foregroundColor,
  height: 200,
  speed: 2,
  type: 'Generic',
  width: 100
}

export const GenericVertically = Template.bind({})
GenericVertically.args = {
  backgroundColor,
  foregroundColor,
  height: 400,
  speed: 2,
  type: 'Generic',
  width: 50
}
