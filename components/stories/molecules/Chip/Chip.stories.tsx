import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Chip } from './Chip'

export default {
  title: 'Molecules/Chip',
  component: Chip
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => { return <Chip {...args} /> }

export const base = Template.bind({})
base.args = {
  label: 'Apoteósico',
  backgroundColor: '#DA291C',
  color: '#FFFFFF'
}
