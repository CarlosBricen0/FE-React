import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Draggable } from './Draggable'

export default {
  title: 'Atoms/Draggable',
  component: Draggable
} as ComponentMeta<typeof Draggable>

const Template: ComponentStory<typeof Draggable> = (args) => {
  return (
    <Draggable {...args} ><div style={{ width: 100, height: 100, backgroundColor: 'grey' }}>Test</div></Draggable>
  )
}

export const Base = Template.bind({})
Base.args = {
  moveY: true,
  moveX: true
}