import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Overlay } from './Overlay'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Overlay',
  component: Overlay
} as ComponentMeta<typeof Overlay>

const Template: ComponentStory<typeof Overlay> = (args) => {
  return <Overlay {...args} />
}

export const underline = Template.bind({})
underline.args = {
  backgroundColor: getGlobalStyle('--color-base-black')
}

