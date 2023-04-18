import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OrderByRadioButtonList } from './OrderByRadioButtonList'

export default {
  title: 'Molecules/OrderByRadioButtonList',
  component: OrderByRadioButtonList
} as ComponentMeta<typeof OrderByRadioButtonList>

const Template: ComponentStory<typeof OrderByRadioButtonList> = (args) => { return <OrderByRadioButtonList {...args}/> }

export const FilterRadioButtonListTemplate = Template.bind({})
FilterRadioButtonListTemplate.args = {}