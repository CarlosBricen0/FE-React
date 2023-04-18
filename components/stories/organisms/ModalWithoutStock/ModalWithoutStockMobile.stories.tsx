import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NoStockModalMobile } from './ModalWithoutStockMobile'

export default {
  title: 'Alvi/Organisms/NoStockModal',
  component: NoStockModalMobile
} as ComponentMeta<typeof NoStockModalMobile>

const Template: ComponentStory<typeof NoStockModalMobile> = (args) => {
  return <NoStockModalMobile {...args} />
}

export const NoStockModalMobileTemplate = Template.bind({})
NoStockModalMobileTemplate.args = {
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
