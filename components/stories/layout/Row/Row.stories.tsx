import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Row } from './Row'

export default {
  title: 'Layout/Row',
  component: Row
} as ComponentMeta<typeof Row>

const Template: ComponentStory<typeof Row> = (args) => {return <Row {...args} />}

export const RowExample = Template.bind({})
RowExample.args = {
  isPlayground: true,
  children: 'Ejemplo de un Row',
  customHeight: '100%'
}

