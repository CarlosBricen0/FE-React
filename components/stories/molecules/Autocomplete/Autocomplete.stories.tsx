import React, { ChangeEvent, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Autocomplete } from './Autocomplete'

export default {
  title: 'Molecules/Autocomplete',
  component: Autocomplete
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = (props) => {
  const [value, setValue] = useState<string>('Uni')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Autocomplete
      onChange={onChange}
      value={value}
      {...props}
    />
  )
}

export const Basic = Template.bind({})

Basic.args = {
  disabled: false,
  list: 'basic',
  options: [
    'Unimarc',
    'Alvi',
    'Mayorista 10',
    'SMU'
  ]
}
