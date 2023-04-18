import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconBox } from './IconBox'

export default {
  title: 'Molecules/IconBox',
  component: IconBox
} as ComponentMeta<typeof IconBox>

const Template: ComponentStory<typeof IconBox> = (args) => {return <IconBox {...args} />}

export const IconBoxTemplate = Template.bind({})
IconBoxTemplate.args = {
  icon: 'Truck',
  title: 'Despacho a domicilio',
  detail: 'Calle ejemplo 1011, depto 101, Comuna, Región'
}