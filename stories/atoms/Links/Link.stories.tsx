import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from './Link'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Link',
  component: Link
} as ComponentMeta<typeof Link>

const fontWeight = getGlobalStyle('--font-weight-normal')

const Template: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />
}

export const underline = Template.bind({})
underline.args = {
  clickable: true,
  color: getGlobalStyle('--color-primary-red'),
  fontSize: 'base',
  fontWeight,
  href: '#',
  label: 'Unimarc',
  newTarget: false,
  underline: 'always'
}

export const color = Template.bind({})
color.args = {
  clickable: true,
  color: getGlobalStyle('--color-base-black'),
  fontSize: 'base',
  fontWeight,
  href: '#',
  label: 'Unimarc',
  newTarget: false,
  underline: 'none'
}

export const newTarget = Template.bind({})
newTarget.args = {
  clickable: true,
  color: getGlobalStyle('--color-primary-red'),
  label: 'Unimarc',
  newTarget: true,
  underline: 'none',
  fontWeight,
  fontSize: 'base',
  href: '#'
}

export const label = Template.bind({})
label.args = {
  clickable: true,
  color: getGlobalStyle('--color-text-secondary'),
  label: 'Unimarc new',
  newTarget: true,
  underline: 'none',
  fontWeight,
  fontSize: 'base',
  href: '#'
}

export const href = Template.bind({})
href.args = {
  clickable: true,
  color: getGlobalStyle('--color-primary-red'),
  label: 'Unimarc',
  newTarget: true,
  fontWeight,
  fontSize: 'base',
  underline: 'none',
  href: 'https://www.unimarc.cl'
}
