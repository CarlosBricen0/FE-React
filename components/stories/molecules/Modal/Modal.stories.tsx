import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'

export default {
  title: 'Molecules/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />
}

export const modal = Template.bind({})
modal.args = {
  maxWidth: '315px',
  isOpen: true,
  hiddenX: false,
  errorModal:false
}

export const modalNone = Template.bind({})
modalNone.args = {
  maxWidth: '315px',
  isOpen: false,
  hiddenX: false
}
