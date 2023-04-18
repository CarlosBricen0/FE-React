import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddToCartAndQuantityTop } from './AddToCartAndQuantityTop'

export default {
  title: 'Molecules/AddToCartAndQuantityTop',
  component: AddToCartAndQuantityTop
} as ComponentMeta<typeof AddToCartAndQuantityTop>

const Template: ComponentStory<typeof AddToCartAndQuantityTop> = (args) => { return <AddToCartAndQuantityTop {...args} /> }

export const Button = Template.bind({})
Button.args = {
  disabledInput: false,
  disabledPlus: false,
  isLoading: false,
  maxWidth: '300px',
  quantity: 0
}