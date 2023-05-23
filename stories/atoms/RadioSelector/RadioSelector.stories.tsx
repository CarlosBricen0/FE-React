import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioSelector } from './RadioSelector'

export default {
  title: 'Atoms/RadioSelector',
  component: RadioSelector
} as ComponentMeta<typeof RadioSelector>

const Template: ComponentStory<typeof RadioSelector> = (args) => { return <RadioSelector {...args} /> }

export const base = Template.bind({})
base.args = {
  disabled: false,
  value: false
}

export const green = Template.bind({})
green.args = {
  checked:false,
  disabled: false,
  type:'green'
}
