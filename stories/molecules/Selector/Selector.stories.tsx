import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Selector } from './Selector'

export default {
  title: 'Molecules/Selector',
  component: Selector
} as ComponentMeta<typeof Selector>

const Template: ComponentStory<typeof Selector> = (args) => { return <Selector {...args} /> }

export const SelectorTemplate = Template.bind({})
SelectorTemplate.args = {
  options: ['option1', 'option2', 'option3'],
  placeholder: 'un campo de prueba'
}