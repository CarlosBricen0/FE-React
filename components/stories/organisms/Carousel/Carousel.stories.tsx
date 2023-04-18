import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Carousel } from './Carousel'

export default {
  title: 'Organisms/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => { return <Carousel {...args} /> }
const images = [
  'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
]

const componentImage = () => {
  return images.map((image) => {
    return (
      <img
        alt='test-image'
        key={image}
        src={image}
        style={{ width: '100%', height: '100%' }}
      />
    )
  })
}

export const CarouselTemplate = Template.bind({})
CarouselTemplate.args = {
  children: componentImage(),
  autoPlay: true,
  infinite: true,
  partialVisbile: true,
  showDots: true,
  ssr: true,
  containerProps: {
    maxWidth: '500px',
    maxHeight: '500px'
  }
}

export const CarouselPreviewTemplate = Template.bind({})
CarouselPreviewTemplate.args = {
  children: componentImage()?.slice(0,4),
  preview: true,
  autoPlay: false,
  infinite: false,
  partialVisbile: true,
  showDots: true,
  ssr: true,
  containerProps: {
    maxWidth: '500px',
    maxHeight: '500px'
  }
}

export const CarouselWithMoreItems = Template.bind({})
CarouselWithMoreItems.args = {
  children: componentImage(),
  partialVisbile: true,
  showDots: true,
  ssr: true,
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 1023, min: 0 },
      items: 1
    }
  },
  containerProps: {
    maxWidth: '500px',
    maxHeight: '500px'
  }
}