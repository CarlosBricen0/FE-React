import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorView } from './ErrorView'

export default {
  title: 'Organisms/ErrorView',
  component: ErrorView
} as ComponentMeta<typeof ErrorView>

const Template: ComponentStory<typeof ErrorView> = (args) => { return <ErrorView { ...args } /> }

export const ErrorViewDefault = Template.bind({})
ErrorViewDefault.args = {
  errorType: '500',
  body1: 'Tuvimos un problema',
  body2: 'Pronto lo solucionaremos. Intenta recargando la página',
  buttonLabel: 'Recargar',
  title: 'Lo sentimos'
}

export const ErrorViewCustom = Template.bind({})
ErrorViewCustom.args = {
  errorType: '404',
  errorImage:{
    img: 'https://unimarcdev.vtexassets.com/arquivos/404-desktop.png',
    width: {
      desktop: '500',
      mobile: '165'
    },
    height: {
      desktop: '500',
      mobile: '165'
    },
    title: 'custom image for testing purporses'
  },
  body1: 'Tuvimos un problema',
  body2: 'Pronto lo solucionaremos. Intenta recargando la página',
  buttonLabel: 'Recargar',
  title: 'Lo sentimos'
}