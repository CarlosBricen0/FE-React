import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {return <Button {...args} />}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Button text',
  size: 'medium',
  status: 'initial'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  label: 'Button text',
  size: 'medium',
  status: 'initial'
}

export const PrimaryGreen = Template.bind({})
PrimaryGreen.args = {
  type: 'primary-green',
  label: 'Button text',
  size: 'medium',
  status: 'initial'
}

export const SecondaryGreen = Template.bind({})
SecondaryGreen.args = {
  type: 'secondary-green',
  label: 'Button text',
  size: 'medium',
  status: 'initial'
}

export const PrimaryClubAhorro = Template.bind({})
PrimaryClubAhorro.args = {
  type: 'primary-ca',
  label: 'Button text',
  size: 'medium',
  status: 'initial'
}

export const SecondaryClubAhorro = Template.bind({})
SecondaryClubAhorro.args = {
  type: 'secondary-ca',
  label: 'Button text',
  size: 'medium',
  status: 'initial'
}

export const Plain = Template.bind({})
Plain.args = {
  type: 'plain',
  label: 'Plain',
  size: 'medium',
  status: 'initial'
}

export const SubCategory = Template.bind({})
SubCategory.args = {
  type: 'sub-category',
  label: 'Subcategory',
  size: 'medium',
  status: 'initial'
}

export const ButtonIcon = Template.bind({})
ButtonIcon.args = {
  borderRadius: '50px',
  fontWeight: getGlobalStyle('--font-weight-semibold'),
  height: '35px',
  iconName: 'Edit',
  label: '100 un',
  minWidth: '137px',
  site: 'alvi',
  size: 'medium',
  status: 'initial'
}