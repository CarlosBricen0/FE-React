import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PromiseBrand } from './PromiseBrand'

export default {
  title: 'Organisms/PromiseBrand',
  component: PromiseBrand
} as ComponentMeta<typeof PromiseBrand>

const Template: ComponentStory<typeof PromiseBrand> = (args) => { return <PromiseBrand {...args} /> }

const data = Array.from(Array(4).keys()).map(key => {
  return {
    id: key + 1,
    description: '¡Conócelas aquí! #NosCuidamosEntreTodos',
    icon: 'Covid',
    label: 'Medidas COVID 19',
    link: '#',
    title: 'Medidas COVID 19'
  }
})

export const PromiseBrandTemplate = Template.bind({})
PromiseBrandTemplate.args = {
  data,
  customStyle: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
  }
}