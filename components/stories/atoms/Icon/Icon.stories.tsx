import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'
import { getGlobalStyle } from '../../../helpers'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'

export default {
  title: 'Atoms/Icon',
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(Icons)
    }
  },
  component: Icon
} as ComponentMeta<typeof Icon>

const color = getGlobalStyle('--color-icons-primary')

const Template: ComponentStory<typeof Icon> = (args) => {return <Icon {...args} />}

export const Little = Template.bind({})
Little.args = {
  name: 'ArrowBack',
  color,
  sizes: 'xs',
  clickable:'auto'
}

export const Small = Template.bind({})
Small.args = {
  name: 'ArrowForward',
  color,
  sizes: 'sm',
  clickable:'auto'

}

export const Medium = Template.bind({})
Medium.args = {
  name: 'ArrowUp',
  color: '#FC4E55',
  sizes: 'md',
  clickable:'auto'
}

export const Large = Template.bind({})
Large.args = {
  name: 'Back',
  color: '#FC4E55',
  sizes: 'lg',
  clickable:'auto'

}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  name: 'Twitter',
  color: '#FC4E55',
  sizes: 'xl',
  clickable:'auto'
}
