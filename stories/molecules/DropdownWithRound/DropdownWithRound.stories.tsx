import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { DropdownWithRound } from './DropdownWithRound'

export default {
  title: 'Molecules/DropdownWithRound',
  component: DropdownWithRound
} as ComponentMeta<typeof DropdownWithRound>

const Template: ComponentStory<typeof DropdownWithRound> = (args) => {
  return (
    <ResponsiveContext.Provider value={{ width: args['screen'] || 1500 }}>
      <DropdownWithRound {...args} />
    </ResponsiveContext.Provider>
  )
}
const dataBody = Array.from(Array(13).keys()).map(key => {
  return {
    id: key,
    name: `test_${key}`,
    image: 'test',
    href: '#'
  }
})

export const baseDesktop = Template.bind({})
baseDesktop.args = {
  title: 'Nuestras categorías',
  isOpen: false,
  dataBody
}

export const baseMobile = Template.bind({})
baseMobile.args = {
  ...baseDesktop.args,
  screen: 900,
  numberPerRow: 3
}
