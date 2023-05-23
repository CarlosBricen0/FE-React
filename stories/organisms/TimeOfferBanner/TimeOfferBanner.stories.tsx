import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TimeOfferBanner, TimeOfferBannerProps } from './TimeOfferBanner'

export default {
  title: 'Organisms/TimeOfferBanner',
  component: TimeOfferBanner,
  parameters: {
    actions: {
      handles: ['click']
    }
  }
} as ComponentMeta<typeof TimeOfferBanner>

const Template: ComponentStory<typeof TimeOfferBanner> = (args) => { return <TimeOfferBanner {...args} /> }

const imgSrcDesktop = 'https://images.ctfassets.net/un6yvtd6uq5z/2qHByoqaCaszrw2afN0DHc/b6f30d7ed557686ced9d7931295c05e0/Group_7936.png'
const imgSrcMobile = 'https://images.ctfassets.net/un6yvtd6uq5z/4Cj73Kx92wvLAhkk1wO16N/79f4237ea36ab0efd5917a1460c79358/Group_7937.png'

export const TimeOfferBannerTemplate = Template.bind({})
TimeOfferBannerTemplate.args = {
  endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
  startDate: new Date(Date.now() - 60 * 1000),
  imgSrcDesktop,
  imgSrcMobile
} as TimeOfferBannerProps

export const TimeOfferBannerTemplateCloseToEnd = Template.bind({})
TimeOfferBannerTemplateCloseToEnd.args = {
  endDate: new Date(Date.now() + 10 * 1000),
  startDate: new Date(Date.now() - 60 * 1000),
  imgSrcDesktop,
  imgSrcMobile
} as TimeOfferBannerProps

export const TimeOfferBannerTemplateCloseToStart = Template.bind({})
TimeOfferBannerTemplateCloseToStart.args = {
  endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
  startDate: new Date(Date.now() + 15 * 1000),
  imgSrcDesktop,
  imgSrcMobile
} as TimeOfferBannerProps