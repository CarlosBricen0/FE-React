import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Title } from './Title'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Title',
  component: Title
} as ComponentMeta<typeof Title>

const color = getGlobalStyle('--color-neutral-black')
const fontWeight = getGlobalStyle('--font-weight-normal')

const Template: ComponentStory<typeof Title> = (args) => {return <Title {...args} />}

export const H1 = Template.bind({})
H1.args = {
  color,
  fontWeight,
  headingLevel: 'h1',
  size: 'large',
  text: 'Title text h1',
  textAlign: 'left'
}

export const H2 = Template.bind({})
H2.args = {
  color,
  fontWeight,
  headingLevel: 'h2',
  size: 'large',
  text: 'Title text h2',
  textAlign: 'left'
}

export const H3 = Template.bind({})
H3.args = {
  color,
  fontWeight,
  headingLevel: 'h3',
  size: 'large',
  text: 'Title text h3',
  textAlign: 'left'
}

export const H4 = Template.bind({})
H4.args = {
  color,
  fontWeight,
  headingLevel: 'h4',
  size: 'large',
  text: 'Title text h4',
  textAlign: 'left'
}

export const H5 = Template.bind({})
H5.args = {
  headingLevel: 'h5',
  text: 'Title text h5',
  textAlign: 'left',
  fontWeight,
  color,
  size: 'large'
}

export const H6 = Template.bind({})
H6.args = {
  color,
  fontWeight,
  headingLevel: 'h6',
  size: 'large',
  text: 'Title text h6',
  textAlign: 'left'
}

export const Large = Template.bind({})
Large.args = {
  color,
  fontWeight,
  headingLevel: 'h1',
  size: 'large',
  text: 'Title text Large',
  textAlign: 'left'
}

export const Small = Template.bind({})
Small.args = {
  color,
  fontWeight,
  headingLevel: 'h1',
  size: 'small',
  text: 'Title text Small',
  textAlign: 'left'
}

export const custom = Template.bind({})
custom.args = {
  color,
  fontWeight,
  headingLevel: 'h1',
  text: 'Title text h1',
  textAlign: 'left',
  customFontSize: '25px',
  customHeight: '30px'
}