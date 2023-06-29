import React from 'react'
import { StoryFn, Meta  } from '@storybook/react'
import { Button } from './Button'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta <typeof Button>

const Template: StoryFn<typeof Button> = (args) => {return <Button {...args} />}

export const Primary = Template.bind({})
Primary.argTypes = {
  label:{
    control:'text'
  },
  size: {
    control:'select',
    options:['xs' , 'small' , 'medium' , 'large' , 'sm' , 'md' , 'lg' , 'xl']
  },
  status: 'initial'
}
/* 
export const Plain = Template.bind({})
Plain.args = {
  label: 'Plain',
  size: 'medium',
  status: 'initial'
}

export const SubCategory = Template.bind({})
SubCategory.args = {
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
  size: 'medium',
  status: 'initial'
} */