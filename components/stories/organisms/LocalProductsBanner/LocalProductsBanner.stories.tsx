import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LocalProductsBanner, LocalProductsBannerProps } from './LocalProductsBanner'

export default {
  title: 'Organisms/LocalProductsBanner',
  component: LocalProductsBanner,
  parameters: {
    actions: {
      handles: ['click']
    }
  }
} as ComponentMeta<typeof LocalProductsBanner>

const Template: ComponentStory<typeof LocalProductsBanner> = (args) => { return <LocalProductsBanner {...args} /> }
const imagesDesktopArray = [
  'https://picsum.photos/210',
  'https://picsum.photos/210',
  'https://picsum.photos/210/440',
  'https://picsum.photos/210',
  'https://picsum.photos/210'
]

export const LocalProductsBannerTemplate = Template.bind({})
LocalProductsBannerTemplate.args = {
  backgroundColor: '#FFF4E5',
  buttonLabel: 'Ver productos',
  description: 'En Unimarc, apoyamos a todas y a todos los emprendedores de Chile.',
  imagesSrcs: imagesDesktopArray,
  title: 'Pymes 100% chilenas'
} as LocalProductsBannerProps
