import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Picture } from './Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture

} as ComponentMeta<typeof Picture>

const Template: ComponentStory<typeof Picture> = (args) => { return <Picture {...args} /> }

export const Default = Template.bind({})
Default.args = {
  type: '',
  src: 'https://picsum.photos/id/1033/400/800',
  alt: '',
  width: '',
  height: '',
  borderRadius: '',
  border: ''
}
export const Rounded = Template.bind({})
Rounded.args = {
  borderRadius: '10%',
  src: 'https://picsum.photos/id/1033/400/800'
}

export const Border = Template.bind({})
Border.args = {
  border: '1px solid #000',
  src: 'https://picsum.photos/id/1033/400/800'
}

export const Height = Template.bind({})
Height.args = {
  type: '',
  alt: '',
  width: '',
  src: 'https://picsum.photos/id/1033/400/800',
  height: '100%',
  borderRadius: '',
  border: ''
}

export const Width = Template.bind({})
Width.args = {
  type: '',
  size: '',
  alt: '',
  height: '',
  src: 'https://picsum.photos/id/1033/800/400',
  width: '100%',
  borderRadius: '',
  border: ''
}
