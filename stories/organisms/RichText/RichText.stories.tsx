import React from 'react'
import { Meta, Story } from '@storybook/react'
import {
  HeadingStyleProps,
  LinkProps,
  RichText,
  RichTextProps
} from './RichText'
import { pageData } from '../../../__mocks__/RichText'

export default {
  title: 'Organisms/RichText',
  component: RichText
} as Meta

const Template: Story<RichTextProps> = (args) => { return <RichText {...args} /> }

export const RichTextTemplate = Template.bind({})
RichTextTemplate.args = {
  richTextData: pageData
} as RichTextProps

export const RichTextCustomStylesTemplate = Template.bind({})
const customLink: LinkProps = { color: 'red', underline: false }
const customHeadings: Array<HeadingStyleProps> = [
  {
    size: { desktop: '40px', mobile: '20px' },
    heading: 'h1',
    bold: 'semibold',
    center: false
  },
  {
    size: { desktop: '35', mobile: '15px' },
    heading: 'h2',
    bold: 'bold',
    center: true
  }
]

RichTextCustomStylesTemplate.args = {
  richTextData: pageData,
  link: customLink,
  headingStyles: customHeadings

} as RichTextProps
