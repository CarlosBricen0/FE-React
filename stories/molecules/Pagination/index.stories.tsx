import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pagination } from '.'

export default {
  title: 'Molecules/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />
}

export const base = Template.bind({})
base.args = {
  currentPage: 2,
  isVisableButtonLeft: true,
  isVisableButtonRight: true,
  isVisableButtons: true,
  itemsPerPage: [0, 1, 2, 3, 4, 5, 6]
}
