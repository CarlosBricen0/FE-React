import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumbs } from './Breadcrumbs'

export default {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => {
  return <Breadcrumbs {...args} />
}

export const breadcrumbs = Template.bind({})
breadcrumbs.args = {
  links: [
    {
      label: 'Inicio',
      oneClick: '/path/path1'
    },
    {
      label: 'Vegetales',
      oneClick: '/path/path2'
    },
    {
      label: 'Fruta',
      oneClick: '/path/path3'
    },
    {
      label: 'Temporada',
      oneClick: '/path/path4'
    }
  ]
}

export const breadcrumbsWithoutLink = Template.bind({})
breadcrumbsWithoutLink.args = {
  links: [
    {
      label: 'Inicio',
      oneClick: ''
    },
    {
      label: 'Vegetales',
      oneClick: ''
    },
    {
      label: 'Fruta',
      oneClick: ''
    }
  ]
}
