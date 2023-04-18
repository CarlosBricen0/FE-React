import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartIcon } from './CartIcon'

export default {
  title: 'Molecules/CartIcon',
  component: CartIcon
} as ComponentMeta<typeof CartIcon>

const Template: ComponentStory<typeof CartIcon> = (args) => {return <CartIcon {...args} />}

export const CartIconTemplate = Template.bind({})
CartIconTemplate.args = {
  icon: 'Cart',
  colorIcon: 'black',
  backgroundQuantity: 'red',
  colorQuantity: 'white'
}