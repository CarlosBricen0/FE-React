import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Field, FieldProps } from './Field'
import { Divider, Input } from '../../atoms'

export default {
  title: 'Molecules/Field',
  component: Field
} as Meta

const Template: Story<FieldProps> = (args) => { return <Field {...args} /> }

export const FieldTemplate = Template.bind({})
FieldTemplate.args = {
  children: <>
    <Input textAlign='left' width='100%'/>
    <Divider verticalMargin={0}/>
  </>,
  label: 'Name',
  error: 'error message'
} as FieldProps