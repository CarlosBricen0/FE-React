import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const PlusCircle = ({
  color = getGlobalStyle('--color-text-primary'),
  sizemap,
  strokeWidth='1.5',
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='black'
      height={`${sizemap}px`}
      viewBox='0 0 22 22'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.5 11H16.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11 16.5V5.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
    </svg>

  )
}
