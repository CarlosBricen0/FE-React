import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => { return <Dropdown {...args} /> }

export const DropdownTemplate = Template.bind({})
DropdownTemplate.args = {
  options: [
    'Metropolitana',
    'Campo 1',
    'Campo 2',
    'Campo 3',
    'Campo 4',
    'Campo 5',
    'Campo 6',
    'Campo 7'
  ],
  placeholder: 'un campo de prueba'
}