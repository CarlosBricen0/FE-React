import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Acordeon } from './Acordeon'

export default {
  title: 'Molecules/Acordeon',
  component: Acordeon
} as ComponentMeta<typeof Acordeon>

const Template: ComponentStory<typeof Acordeon> = (args) => { return <Acordeon {...args} /> }

export const AcordeonTemplate = Template.bind({})
AcordeonTemplate.args = {
  titleClose: 'Ocultar tus productos',
  titleOpen: 'Mostrar tus productos',
  children: 'Aquí puede ir mucho texto o incluso un componente'
}