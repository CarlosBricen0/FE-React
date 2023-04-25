import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NoStockProducts } from './ModalWithoutStock'

export default {
  title: 'Alvi/Organisms/NoStockProducts',
  component: NoStockProducts
} as ComponentMeta<typeof NoStockProducts>

const Template: ComponentStory<typeof NoStockProducts> = (args) => {
  return <NoStockProducts {...args} />
}

export const NoStockProductsTemplate = Template.bind({})
NoStockProductsTemplate.args = {
  isOpen: true,
  data: {
    'failed': [
      {
        'message': 'El ítem Producto Fizzmod SKU Fizzmod no tiene inventario'
      },
      {
        'message': 'El ítem Producto Fizzmod SKU Fizzmod no tiene inventario'
      }
    ]
  },
  onClick: () => { return }
}
