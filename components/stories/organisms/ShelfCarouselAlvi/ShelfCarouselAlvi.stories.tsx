import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShelfCarouselAlvi } from './ShelfCarouselAlvi'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Alvi/Organisms/ShelfCarouselAlvi',
  component: ShelfCarouselAlvi
} as ComponentMeta<typeof ShelfCarouselAlvi>

const product = {
  brand: 'Sopraval',
  img: 'https://unimarcdev.vteximg.com.br/arquivos/ids/156183-250-250/Carne-picada-Pavo-pechuga-Sopraval-470-g.jpg',
  inOffer: true,
  isMobile: false,
  listPrice: 2490,
  ppum: '(2.990 x Kg)',
  ppumListPrice: '(5.990 x Kg)',
  price: 7690,
  title: 'Carne picada pavo pechuga, sopraval',
  format: '470 g',
  offer: '20%',
  isPromotion: true,
  typePromotion: 2,
  promotion: {
    label: 'Apoteósico',
    backgroundColor: getGlobalStyle('--color-alvi-primary-blue3'),
    color: getGlobalStyle('--color-alvi-base-white'),
    icon: 'Error',
    positionIcon: 'left'
  }
}
const productsDesktop = Array(10).fill({ ...product })
const productsMobile = Array(10).fill({ ...product, isMobile: true })

const Template: ComponentStory<typeof ShelfCarouselAlvi> = (args) => { return <ShelfCarouselAlvi {...args} /> }

export const ShelfCarouselAlviTemplate = Template.bind({})
ShelfCarouselAlviTemplate.args = {
  items: productsDesktop,
  showArrows: true,
  itemsToSlide: 4,
  itemsToShow: 4,
  containerProps: {
    maxWidth: '1120px'
  },
  carouselProps: {
    infinite: true,
    autoPlay: false,
    opacity: true
  },
  catchShelfRef: () => { return }
}

export const ShelfCarouselAlviMobileTemplate = Template.bind({})
ShelfCarouselAlviMobileTemplate.args = {
  items: productsMobile,
  itemsToSlide: 2,
  itemsToShow: 2,
  showArrows: false,
  containerProps: {
    maxWidth: '380px'
  },
  carouselProps: {
    infinite: true,
    opacity: true,
    partialVisible: true
  },
  catchShelfRef: () => { return }
}

export const ShelfNoCarouselAlviTemplate = Template.bind({})
ShelfNoCarouselAlviTemplate.args = {
  items: productsDesktop.slice(0, 4),
  itemsToSlide: 4,
  itemsToShow: 4,
  containerProps: {
    maxWidth: '1120px'
  },
  catchShelfRef: () => { return }
}