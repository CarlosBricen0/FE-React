import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ToggleSwitch } from './ToggleSwitch'

export default {
  title: 'Atoms/ToggleSwitch',
  component: ToggleSwitch
} as ComponentMeta<typeof ToggleSwitch>

const Template: ComponentStory<typeof ToggleSwitch> = (args) => {
  const [state, setState] = useState(args.value)

  args.onClick = () => {return setState(!state)}
  args.value = state

  return (<ToggleSwitch {...args} />)
}

export const base = Template.bind({})
base.args = {
  leftLabel: 'True',
  rightLabel: 'False',
  value: true
}