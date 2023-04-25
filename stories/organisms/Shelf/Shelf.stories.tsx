import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Shelf } from './Shelf'
import { ShelfProps } from '..'

export default {
  title: 'Organisms/Shelf',
  component: Shelf,
  argTypes: {
    typePromotion: {
      options:[2,4,3],
      control:{
        type:'select',
        labels:{
          2: 'Porcentual',
          4: 'Nx$',
          3: 'Mxn'
        }
      }
    }
  }
} as ComponentMeta<typeof Shelf>

const Template: ComponentStory<typeof Shelf> = (args) => { return <Shelf {...args} /> }

export const ShelfTemplate = Template.bind({})
ShelfTemplate.args = {
  brand: 'Heineken',
  stock: true,
  format: '330ml',
  img: 'https://unimarc.vteximg.com.br/arquivos/ids/213450-200-200/000000000000501297-DIS-01.jpg',
  inOffer: true,
  isMobile: true,
  isPromotion: true,
  listPrice: 12290,
  offer: '20%',
  orientation: 'vertical',
  ppum: '(2.990 x Kg)',
  ppumListPrice: '(5.990 x Kg)',
  price: 7690,
  promotion: {
    label: 'Apoteósico',
    backgroundColor: '#DA291C',
    color: '#FFFFFF',
    icon: 'Error',
    positionIcon: 'left'
  },
  title: 'Pack Cerveza Heineken botella 12 un de 330 cc',
  typePromotion: 2,
  couponLoading: true,
  version: 2
} as ShelfProps