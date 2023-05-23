import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiltersBar } from './FiltersBar'

export default {
  title: 'Molecules/FiltersBar',
  component: FiltersBar
} as ComponentMeta<typeof FiltersBar>

const Template: ComponentStory<typeof FiltersBar> = (args) => { return <FiltersBar {...args}/> }

export const FiltersBarTemplate = Template.bind({})
FiltersBarTemplate.args = {}