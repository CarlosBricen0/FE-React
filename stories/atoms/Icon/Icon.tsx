import React, { createElement } from 'react'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { getGlobalStyle } from '../../../helpers'

export type SizeIcon = 'xs' | '2xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export interface IconProps {
  clickable?: string;
  color?: string;
  customSize?: number;
  name: keyof (typeof Icons);
  sizes?: SizeIcon;
  strokeWidth?: string;
  viewBox?: string;
  onClick?: () => void;
}

const iconSize = {
  xs: 14,
  '2xs': 20,
  sm: 25,
  md: 35,
  lg: 50,
  xl: 70,
  '2xl': 80
}

export const Icon = ({
  clickable = 'auto',
  color = getGlobalStyle('--color-icons-primary'),
  customSize,
  name = 'Error',
  sizes = 'xs',
  strokeWidth,
  onClick,
  ...props
}: IconProps): React.ReactElement => {

  const sizemap = customSize || iconSize[sizes]
  const id = name
  const role = name

  return createElement(Icons[name], {
    color,
    id,
    role,
    sizemap,
    strokeWidth,
    style: {
      cursor: clickable
    },
    onClick,
    ...props
  })
}