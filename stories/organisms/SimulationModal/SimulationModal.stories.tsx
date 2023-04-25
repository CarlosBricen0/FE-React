import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SimulationModal } from './SimulationModal'

export default {
  title: 'Organisms/SimulationModal',
  component: SimulationModal
} as ComponentMeta<typeof SimulationModal>
const Template: ComponentStory<typeof SimulationModal> = (args) => { return <SimulationModal {...args} /> }

const item = {
  brandName: 'Heineken',
  id: 'id',
  image: 'https://unimarc.vteximg.com.br/arquivos/ids/213450-200-200/000000000000501297-DIS-01.jpg',
  measurementUnit: 'un',
  name: 'Pack Cerveza Heineken botella 12 un de 330 cc',
  sellingPrice: '$ 9.999 c/u',
  quantity: '1'
}

export const base = Template.bind({})
base.args = {
  buttonStatus: 'initial',
  content: '',
  isOpen: true,
  labelPrimary: 'Primary Button',
  labelSecondary: 'Secondary Button',
  items: [...Array(8)].map(() => {
    return item
  }),
  title: 'Título',
  action: () => { return },
  handleKeepAddress: () => { return },
  handleModal: () => { return }
}
