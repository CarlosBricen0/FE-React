import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from './Text'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Text',
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => { return <Text {...args} /> }

export const base = Template.bind({})
base.args = {
  type: 'p',
  textAlign: 'left',
  fontSize: 'base',
  fontWeight: getGlobalStyle('--font-weight-normal'),
  children: 'Hola Seba probando',
  truncate: 10
}
