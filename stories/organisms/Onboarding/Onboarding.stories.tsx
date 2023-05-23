import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Onboarding } from './Onboarding'

export default {
  title: 'Organisms/Onboarding',
  argTypes: {
    site: {
      control: { type: 'select' },
      options: ['alvi', 'unimarc']
    }
  },
  component: Onboarding
} as ComponentMeta<typeof Onboarding>

const Template: ComponentStory<typeof Onboarding> = (args) => { return <Onboarding {...args} /> }

export const OnboardingTemplate = Template.bind({})

OnboardingTemplate.args = {
  site: 'alvi',
  banners: [
    {
      title: 'Bienvenido al cotizador Alvi',
      subtitle: 'Agrega productos a tu carro  y comienza a armar tu cotización',
      image: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Más productos en poco tiempo',
      subtitle: 'En tu carro haz click en el botón “ir a cotizar” para poder aumentar tus cantidades',
      image: 'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Compra fácil y rápido',
      subtitle: 'En poco tiempo podrás comprar tu cotización con descuentos especiales para ti',
      image: 'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }
  ],
  btnLabel: 'Ver mi cotización'
}