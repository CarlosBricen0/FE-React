import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Coupon, CouponProps } from './Coupon'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Organisms/Coupon',
  component: Coupon,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Coupon>

const Template: ComponentStory<typeof Coupon> = (args) => { return (
  <div style={{backgroundColor: getGlobalStyle('--color-neutral-gray'), height: '100vh', padding: 20}}>
    <Coupon {...args} />
  </div>
) }

export const CouponTemplate = Template.bind({})
CouponTemplate.args = {
  title: '+10% dcto adicional',
  subtitle: 'Antes: $990 (Precio ref: $1.990)',
  description: 'Todas las leches Colun',
  dotsColor: getGlobalStyle('--color-neutral-gray'),
  badgeText: 'Solo tienda',
  status: 'active'
} as CouponProps

export const CouponLoader = Template.bind({})
CouponLoader.args = {
  badgeText: 'Solo tienda',
  description: 'Todas las leches Colun',
  isFetching: true,
  status: 'active',
  subtitle: 'Antes: $990 (Precio ref: $1.990)',
  title: '+10% dcto adicional'
} as CouponProps
