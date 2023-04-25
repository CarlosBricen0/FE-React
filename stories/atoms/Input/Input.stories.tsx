import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Atoms/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => { return <Input {...args} /> }

export const Base = Template.bind({})
Base.args = {
  disabled: false,
  placeholder: 'Hello'
}
