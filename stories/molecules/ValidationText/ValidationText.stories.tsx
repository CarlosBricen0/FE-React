import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ValidationText, ValidationTextProps } from './ValidationText'

export default {
  title: 'Molecules/ValidationText',
  component: ValidationText
} as ComponentMeta<typeof ValidationText>

const Template: ComponentStory<typeof ValidationText> = (args) => { return <ValidationText {...args} /> }

export const ValidationTextTemplate = Template.bind({})
ValidationTextTemplate.args = {
  color: 'green',
  fontSize: 'md',
  gap: 8,
  iconName: 'Dot',
  iconSize: 8,
  text: 'Mobile: +569 1234 1234'
} as ValidationTextProps
