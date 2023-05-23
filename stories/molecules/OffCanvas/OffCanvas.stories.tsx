import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { OffCanvas } from './OffCanvas'

export default {
  title: 'Molecules/OffCanvas',
  component: OffCanvas
} as ComponentMeta<typeof OffCanvas>

const Template: ComponentStory<typeof OffCanvas> = (args) => {
  return <OffCanvas {...args} />
}

export const offCanvas = Template.bind({})
offCanvas.args = {
  maxWidth: '315px',
  isOpen: true,
  children: <div style={{lineHeight: '26px'}}>Hola mundo esto es un div, soy enviado como <strong>children</strong> hacia el contenido del offCanvas</div>,
  footerComponent: <div style={{lineHeight: '26px'}}>Yo soy el Footer del <strong>OffCanvas</strong> y también soy un <strong>children, mi altura por defecto es de 165px</strong></div>
}
