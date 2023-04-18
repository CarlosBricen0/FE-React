import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Notification, NotificationProps } from './Notification'

export default {
  title: 'Molecules/Notification',
  component: Notification
} as Meta

const Template: Story<NotificationProps> = (args) => { return <Notification {...args} /> }

export const NotificationTemplate = Template.bind({})
NotificationTemplate.args = {
  message: 'Has superado los intentos para ingresar. Recupera tu cuenta aquí',
  show: true
} as NotificationProps

