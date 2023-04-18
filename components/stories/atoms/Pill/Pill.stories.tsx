import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Pill } from './Pill'
import { Row } from '../../layout'

export default {
  title: 'Atoms/Pill',
  component: Pill
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> =
(args) => {

  return <Row maxWidth='min-content'>
    <Pill {...args} />
  </Row>
}

export const PillTemplate = Template.bind({})
PillTemplate.args = {
  item: { value: 'Marca Ejemplo', numberResult: 10},
  iconName: 'Close',
  onClick: () => {
    return
  }
}