import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RenderStringHtml } from './RenderStringHtml'
import { htmlTest } from '../../../__mocks__/RenderStringHtml'

export default {
  title: 'Molecules/RenderStringHtml',
  component: RenderStringHtml
} as ComponentMeta<typeof RenderStringHtml>

const Template: ComponentStory<typeof RenderStringHtml> = (args) => { return <RenderStringHtml {...args} /> }

export const RenderHtml = Template.bind({})

RenderHtml.args = {
  htmlString : htmlTest
}