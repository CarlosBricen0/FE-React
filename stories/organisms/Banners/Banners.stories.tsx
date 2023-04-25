import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Banners } from './Banners'

export default {
  title: 'Organisms/Banners',
  component: Banners,
  parameters: {
    actions: {
      handles: ['click']
    }
  }
} as ComponentMeta<typeof Banners>

const Template: ComponentStory<typeof Banners> = (args) => { return <Banners {...args} /> }

export const UnoSoloBannersTemplate = Template.bind({})
UnoSoloBannersTemplate.args = {
  layout: 'uno solo',
  bannerOnlyOne: { banner: 'https://unimarcdev.vtexassets.com/arquivos/banner-uno-solo.png' }
}

export const GridX3BannersTemplate = Template.bind({})
GridX3BannersTemplate.args = {
  layout: 'grid',
  bannerOnlyOne: { banner: 'https://unimarcdev.vtexassets.com/arquivos/banner-uno-solo.png' },
  bannersGrid: Array(3).fill(
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      url: 'www.google.com'
    }
  ),
  catchPromoData: () => {return}
}

export const GridX4BannersTemplate = Template.bind({})
GridX4BannersTemplate.args = {
  layout: 'grid',
  bannerOnlyOne: { banner: 'https://unimarcdev.vtexassets.com/arquivos/banner-uno-solo.png' },
  bannersGrid: Array(4).fill(
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      url: 'www.google.com'
    }
  ),
  catchPromoData: () => {return}
}

export const CarouselLayout = Template.bind({})
CarouselLayout.args = {
  layout: 'carousel',
  bannersCarousel: Array(6).fill(
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      url: 'www.google.com'
    }
  ),
  catchPromoData: () => {return},
  itemsToShow: 3,
  showDots: true,
  zoomIn: false
}

export const CollageLayoutDesktop = Template.bind({})
CollageLayoutDesktop.args = {
  layout: 'collage',
  bannersGrid: [
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    }
  ],
  catchPromoData: () => {return},
  maxWidth: '1100px'
}

export const CollageLayoutMobile = Template.bind({})
CollageLayoutMobile.args = {
  layout: 'collage',
  bannersGrid: [
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    },
    {
      img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=265&h=300&q=60',
      url: 'www.google.com',
      onRedirect: () => {return}
    }
  ],
  catchPromoData: () => {return}
}
