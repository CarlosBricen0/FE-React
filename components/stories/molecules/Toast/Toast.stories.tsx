import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toast, ToastProps } from './Toast'

export default {
  title: 'Molecules/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => { return <Toast {...args} /> }

export const ToastTemplate = Template.bind({})
ToastTemplate.args = {
  iconUrl: 'https://images.ctfassets.net/un6yvtd6uq5z/4PROZHNIX9hkfWZZRpM0e4/95f1d0efca4549dd05ceac01d30345f9/unimarc-logo-2.png?h=250',
  message: 'Y obtén muchos más beneficios',
  showClose: true,
  title: 'Compra en nuestra app',
  button: {
    label: 'Descargar'
  }
} as ToastProps