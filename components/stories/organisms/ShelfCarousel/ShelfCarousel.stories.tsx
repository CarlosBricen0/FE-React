import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShelfCarousel } from './ShelfCarousel'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Organisms/ShelfCarousel',
  component: ShelfCarousel
} as ComponentMeta<typeof ShelfCarousel>

const product = {
  brand: 'Heineken',
  format: '330ml',
  img: 'https://unimarc.vteximg.com.br/arquivos/ids/213450-200-200/000000000000501297-DIS-01.jpg',
  inOffer: true,
  isMobile: false,
  isPromotion: true,
  listPrice: 12290,
  offer: '20%',
  ppum: '(2.990 x Kg)',
  ppumListPrice: '(5.990 x Kg)',
  price: 7690,
  promotion: {
    backgroundColor: getGlobalStyle('--color-background-primary'),
    color: getGlobalStyle('--color-text-white'),
    icon: 'Error',
    label: 'Apoteósico',
    positionIcon: 'left'
  },
  title: 'Pack Cerveza Heineken botella 12 un de 330 cc',
  typePromotion: 2
}
const productsDesktop = Array(10).fill({ ...product })
const productsMobile = Array(10).fill({ ...product, isMobile: true })

const Template: ComponentStory<typeof ShelfCarousel> = (args) => { return <ShelfCarousel {...args} /> }

export const ShelfCarouselTemplate = Template.bind({})
ShelfCarouselTemplate.args = {
  items: productsDesktop,
  itemsToShow: 5,
  itemsToSlide: 5,
  showArrows: true,
  containerProps: {
    maxWidth: '1120px'
  },
  carouselProps: {
    autoPlay: false,
    infinite: true,
    opacity: true
  },
  catchShelfRef: () => { return }
}

export const ShelfCarouselMobileTemplate = Template.bind({})
ShelfCarouselMobileTemplate.args = {
  items: productsMobile,
  itemsToShow: 2,
  itemsToSlide: 2,
  showArrows: false,
  containerProps: {
    maxWidth: '400px'
  },
  carouselProps: {
    infinite: true,
    opacity: true,
    partialVisible: true
  },
  catchShelfRef: () => { return }
}

export const ShelfNoCarouselTemplate = Template.bind({})
ShelfNoCarouselTemplate.args = {
  items: productsDesktop.slice(0, 3),
  itemsToShow: 5,
  itemsToSlide: 5,
  containerProps: {
    maxWidth: '1120px'
  },
  catchShelfRef: () => { return }
}