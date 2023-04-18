import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddToCartAndQuantity } from './AddToCartAndQuantity'

export default {
  title: 'Molecules/AddToCartAndQuantity',
  component: AddToCartAndQuantity
} as ComponentMeta<typeof AddToCartAndQuantity>

const Template: ComponentStory<typeof AddToCartAndQuantity> = (args) => { return <AddToCartAndQuantity {...args} /> }

export const Button = Template.bind({})
Button.args = {
  disabled: false,
  isLoading: false,
  quantity: 0,
  statusButton: 'initial',
  variant: 'input'
}

export const ButtonType = Template.bind({})
ButtonType.args = {
  disabled: false,
  isLoading: false,
  quantity: 20,
  statusButton: 'initial',
  variant: 'button'
}