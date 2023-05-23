import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from './Container'

export default {
  title: 'Layout/Container',
  component: Container
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => { return <Container {...args} /> }

export const ContainerExample = Template.bind({})
ContainerExample.args = {
  isPlayground: true,
  children: 'Ejemplo de un Container',
  customHeight: '100%'
}

