import React from 'react'
import { Meta, Story } from '@storybook/react'
import { PromotionalModal, PromotionalModalProps } from './PromotionalModal'

export default {
  title: 'Organisms/PromotionalModal',
  component: PromotionalModal
} as Meta

const Template: Story<PromotionalModalProps> = (args) => { return <PromotionalModal {...args} /> }

export const PromotionalModalTemplate = Template.bind({})
PromotionalModalTemplate.args = {
  open: true,
  imageSrc: 'https://images.ctfassets.net/un6yvtd6uq5z/5FSeXsMd2gdUao8Vf4mG5O/b70dd6863226aed87fd187b089dc197e/image.png',
  redirectTo: 'https://www.google.com'
} as PromotionalModalProps