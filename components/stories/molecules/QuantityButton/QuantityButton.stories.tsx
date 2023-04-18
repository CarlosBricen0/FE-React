import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { QuantityButton } from './QuantityButton'

export default {
  title: 'Molecules/QuantityButton',
  component: QuantityButton
} as ComponentMeta<typeof QuantityButton>

const Template: ComponentStory<typeof QuantityButton> = (args) => { return <QuantityButton {...args} /> }

export const BigScreen = Template.bind({})
BigScreen.args = {
  disabled: false,
  handleAdd: { action: 'add one amount' },
  handleRemove: { action: 'subtract one amount' },
  isLoading: false,
  maxQuantity: 6,
  maxWidth: '137px',
  quantity: 4,
  site: 'unimarc',
  value: 4
}

export const SmallScreen = Template.bind({})
SmallScreen.args = {
  disabled: false,
  isLoading: false,
  maxWidth: '165px',
  site: 'alvi',
  value: 2
}