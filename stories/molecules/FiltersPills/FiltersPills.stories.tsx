import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiltersPills } from './FiltersPills'

export default {
  title: 'Molecules/FiltersPills',
  component: FiltersPills
} as ComponentMeta<typeof FiltersPills>

const Template: ComponentStory<typeof FiltersPills> =
(args) => {
  return <FiltersPills {...args} />
}

export const FiltersPillsTemplate = Template.bind({})
FiltersPillsTemplate.args = {
  enterFilter: [
    {type:'brand',value:'Marca Ejemplo B', numberResult: 3},
    {type:'brand',value:'Marca D', numberResult: 10},
    {type:'brand',value:'Marca C', numberResult: 5},
    {type:'brand',value:'Marca Ejemplo B', numberResult: 3},
    {type:'brand',value:'Marca D', numberResult: 10},
    {type:'brand',value:'Marca C', numberResult: 5},
    {type:'brand',value:'Marca Ejemplo B', numberResult: 3},
    {type:'brand',value:'Marca D', numberResult: 10},
    {type:'brand',value:'Marca C', numberResult: 5},
    {type:'brand',value:'Marca Ejemplo B', numberResult: 3},
    {type:'brand',value:'Marca D', numberResult: 10},
    {type:'brand',value:'Marca C', numberResult: 5}
  ],
  onClickItemRemove: ({type, itemName}) => {
    return (type + itemName)
  },
  onRemoveAll: () => { return },
  textInfo: 'Filtros aplicados: '
}

export const FiltersPillsShort = Template.bind({})
FiltersPillsShort.args = {
  enterFilter: [
    {type:'brand',value:'Marca Ejemplo B', numberResult: 3},
    {type:'brand',value:'Marca D', numberResult: 10},
    {type:'brand',value:'Marca C', numberResult: 5}
  ],
  onClickItemRemove: ({type, itemName}) => {
    return (type + itemName)
  },
  onRemoveAll: () => { return },
  textInfo: 'Filtros aplicados: '
}