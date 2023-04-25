import React from 'react'
import { Meta, Story } from '@storybook/react'
import { LoginModal, LoginModalProps } from './LoginModal'
import { Link, Text } from '../../atoms'

export default {
  title: 'Organisms/LoginModal',
  component: LoginModal
} as Meta

const Template: Story<LoginModalProps> = (args) => { return <LoginModal {...args} /> }

export const LoginModalTemplate = Template.bind({})
LoginModalTemplate.args = {
  isOpen: true,
  imageSrc: 'https://images.ctfassets.net/un6yvtd6uq5z/4iejdhvwSq9nkDDaDvkdH7/2f659290c677033ca42f4d5598d82858/image_81.png?h=250'
} as LoginModalProps

export const LoginModalWithInfoMessageTemplate = Template.bind({})
LoginModalWithInfoMessageTemplate.args = {
  isOpen: true,
  imageSrc: 'https://images.ctfassets.net/un6yvtd6uq5z/4iejdhvwSq9nkDDaDvkdH7/2f659290c677033ca42f4d5598d82858/image_81.png?h=250',
  infoMessage: (
    <>
      <Text
        color='white'
        fontSize='md'
        isFlex={false}
        type='span'
      >
        Has superado los intentos para ingresar. Recupera tu cuenta <Link
          color='white'
          fontSize='md'
          href='#'
        >aquí</Link>
      </Text>
    </>
  )
} as LoginModalProps