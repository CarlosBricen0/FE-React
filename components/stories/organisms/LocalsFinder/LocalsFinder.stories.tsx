import React from 'react'
import { Meta, Story } from '@storybook/react'
import { LocalsFinder, LocalsFinderProps } from './LocalsFinder'

import * as LocalsFinderMocks from '../../../__mocks__/LocalsFinder/LocalsFinder.mock'

export default {
  title: 'Organisms/LocalsFinder',
  component: LocalsFinder
} as Meta

const Template: Story<LocalsFinderProps> = (args) => { return <LocalsFinder {...args} /> }

export const LocalsFinderTemplate = Template.bind({})
LocalsFinderTemplate.args = {
  children: 'some google map react',
  items: [
    LocalsFinderMocks.genLocal('Santiago'),
    LocalsFinderMocks.genLocal('Valparaiso')
  ]
} as LocalsFinderProps