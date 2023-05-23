import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputIcon } from './InputIcon'

export default {
  title: 'Molecules/InputIcon',
  component: InputIcon
} as ComponentMeta<typeof InputIcon>

const Template: ComponentStory<typeof InputIcon> = (args) => {return <InputIcon {...args} />}

export const InputIconTemplate = Template.bind({})
InputIconTemplate.args = {
  border: '1px solid #DA291C',
  borderRadius: '4px',
  clearButton: true,
  background: '',
  colorIcon: '#282828',
  customSizeIcon: 20,
  icon: 'SearchCart',
  inputWidth: '100%',
  padding: '10px',
  placeholder: 'Buscar producto en mi carro',
  placeholderFocus: 'placeholder',
  textAlignInput: 'left',
  width: '50'
}