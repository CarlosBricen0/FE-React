import React, { createElement } from 'react'
import { BackboneProps, BackboneTypes } from '../../../assets/SvgComponents/SvgBackbone'
import { getGlobalStyle } from '../../../helpers'

interface CustomBackboneProps extends Partial<Omit<BackboneProps, 'type'>> {
  type?: keyof (typeof BackboneTypes);
}

export const Backbone = ({
  backgroundColor = getGlobalStyle('--color-loaders-background'),
  borderRadius,
  foregroundColor = getGlobalStyle('--color-loaders-fore-ground'),
  height = 160,
  speed = 2,
  type = 'Generic',
  width = 400,
  ...props
}: CustomBackboneProps): React.ReactElement => {
  return createElement(
    BackboneTypes[type],
    { type, speed, width, height, backgroundColor, foregroundColor, borderRadius, ...props }
  )
}