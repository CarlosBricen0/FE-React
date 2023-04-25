import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Column } from './Column'

export default {
  title: 'Layout/Column',
  component: Column
} as ComponentMeta<typeof Column>

const Template: ComponentStory<typeof Column> = (args) => {return <Column {...args} />}

export const ColumnExample = Template.bind({})
ColumnExample.args = {
  isPlayground: true,
  children: 'Ejemplo de un Column',
  customHeight: '100%'
}

