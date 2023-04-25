import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BuyButtons } from './BuyButtons'

export default {
  title: 'Atoms/BuyButtons',
  component: BuyButtons
} as ComponentMeta<typeof BuyButtons>

const Template: ComponentStory<typeof BuyButtons> = (args) => { return <BuyButtons {...args} /> }

export const Left = Template.bind({})
Left.args = {
  disabled: false,
  type: 'left'
}

export const Right = Template.bind({})
Right.args = {
  disabled: false,
  type: 'right'
}