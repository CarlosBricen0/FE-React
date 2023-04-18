import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    iconColor: {
      control: {
        type: 'color'
      }
    }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => { return <Checkbox {...args} /> }

export const base = Template.bind({})
base.args = {
  disabled: false,
  iconColor: undefined,
  nameIcon : 'Check',
  sizeIcon: 'xs',
  type: 'checkbox',
  value: false
}
