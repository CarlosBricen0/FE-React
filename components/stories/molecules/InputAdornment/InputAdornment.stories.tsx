import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputAdornment } from './InputAdornment'

export default {
  title: 'Molecules/InputAdornment',
  component: InputAdornment
} as ComponentMeta<typeof InputAdornment>

const Template: ComponentStory<typeof InputAdornment> = (args) => {return <InputAdornment {...args} />}

export const InputAdornmentTemplate = Template.bind({})
InputAdornmentTemplate.args = {
  border: '1px solid #DA291C',
  borderRadius: '4px',
  inputWidth: '100%',
  padding: '10px',
  placeholder: 'Buscar producto en mi carro',
  textAlignInput: 'left',
  width: '50',
  inputAdornmentStart: 'Adornment:',
  inputAdornmentEnd: 'X'
}