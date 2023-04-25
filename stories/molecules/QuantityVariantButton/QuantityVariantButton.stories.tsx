import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { QuantityVariantButton } from './QuantityVariantButton'

export default {
  title: 'Molecules/QuantityVariantButton',
  component: QuantityVariantButton
} as ComponentMeta<typeof QuantityVariantButton>

const Template: ComponentStory<typeof QuantityVariantButton> = (args) => { return <QuantityVariantButton {...args} /> }

export const BigScreen = Template.bind({})
BigScreen.args = {
  buttonProps: {
    size: 'small'
  },
  value: 0
}

export const SmallScreen = Template.bind({})
SmallScreen.args = {
  buttonProps: {
    size: 'small'
  },
  value: 0
}