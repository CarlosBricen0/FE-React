import { Meta, Story } from '@storybook/react'
import { CodeStep, CodeStepProps } from './CodeStep/CodeStep'
import { DeliveryMediumStep, DeliveryMediumStepProps } from './DeliveryMediumStep/DeliveryMediumStep'
import { ForgotPasswordModal } from './ForgotPasswordModal'
import { ResetPasswordStep, ResetPasswordStepProps } from './ResetPasswordStep/ResetPasswordStep'

export default {
  title: 'Organisms/ForgotPasswordModal',
  component: ForgotPasswordModal
} as Meta

const DeliveryMediumTemplate: Story<DeliveryMediumStepProps> = (args) => { 
  return (
    <ForgotPasswordModal isOpen={true}>
      <DeliveryMediumStep {...args} />
    </ForgotPasswordModal>
  )
}
DeliveryMediumTemplate.args = {
  imageSrc: 'https://images.ctfassets.net/un6yvtd6uq5z/4iejdhvwSq9nkDDaDvkdH7/2f659290c677033ca42f4d5598d82858/image_81.png?h=250',
  title: '¿Olvidaste tu contraseña?',
  text: 'Ingresa tu Rut y te enviaremos la información para restablecer tu contraseña'
}

const CodeTemplate: Story<CodeStepProps> = (args) => { 
  return (
    <ForgotPasswordModal isOpen={true}>
      <CodeStep {...args} />
    </ForgotPasswordModal>
  )
}
CodeTemplate.args = {
  title: 'Codigo de verificación',
  text: 'Por tu seguridad y la de tus datos enviaremos un código para verificar tu identidad.'
}

const ResetPasswordTemplate: Story<ResetPasswordStepProps> = (args) => { 
  return (
    <ForgotPasswordModal isOpen={true}>
      <ResetPasswordStep {...args} />
    </ForgotPasswordModal>
  )
}
ResetPasswordTemplate.args = {
  title: 'Ingresa tu nueva contraseña',
  text: 'Escoge una contraseña que sea fácil de recordar y sea segura'
}