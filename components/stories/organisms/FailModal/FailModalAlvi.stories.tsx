import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FailModal } from './index'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Alvi/Organisms/FailModal',
  component: FailModal
} as ComponentMeta<typeof FailModal>

const Template: ComponentStory<typeof FailModal> = (args) => { return <FailModal {...args} /> }

export const FailModalTemplate = Template.bind({})
FailModalTemplate.args = {
  widthContentModal: '100',
  buttonLabel: 'Recargar',
  buttonText: 'Cambiar dirección',
  colorTitle: getGlobalStyle('--color-base-black'),
  title: 'Dirección sin cobertura de despacho',
  site: 'alvi',
  labelSecondary: 'Mantener',
  titlePosition: 'center',
  handleModal: () => { return },
  onClick: () => { return },
  handleKeepAddress: () => { return },
  action: () => { return },
  contentPosition:'center',
  content: 'No podemos despachar a tu dirección. Si quieres continuar comprando cambia tu dirección.'
}