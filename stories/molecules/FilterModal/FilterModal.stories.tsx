import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterModal } from './FilterModal'
import { getGlobalStyle } from '../../../helpers/getGlobalStyle'

export default {
  title: 'Molecules/FilterModal',
  component: FilterModal
} as ComponentMeta<typeof FilterModal>

const Template: ComponentStory<typeof FilterModal> = (args) => {
  return (<FilterModal {...args}/>)
}

export const FilterModalTemplate = Template.bind({})
FilterModalTemplate.args = {
  title: 'Ordenar por',
  buttonName: 'Aplicar orden',
  color:getGlobalStyle('--color-primary-red')
}