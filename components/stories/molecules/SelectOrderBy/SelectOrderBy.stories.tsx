import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectOrderBy } from './SelectOrderBy'

export default {
  title: 'Molecules/SelectOrderBy',
  component: SelectOrderBy
} as ComponentMeta<typeof SelectOrderBy>

const Template: ComponentStory<typeof SelectOrderBy> = (args) => { return <SelectOrderBy {...args} /> }

export const SelectByTemplate = Template.bind({})
SelectByTemplate.args = {
  options: [
    { orderKey: 'z', value: 'test1' },
    { orderKey: 'x', value: 'test2' },
    { orderKey: 'q', value: 'test3' },
    { orderKey: 'e', value: 'test4' },
    { orderKey: 'b', value: 'test5' },
    { orderKey: 'n', value: 'test6' },
    { orderKey: 'm', value: 'test7' },
    { orderKey: 'y', value: 'test8' }
  ]
}