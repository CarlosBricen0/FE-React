import React from 'react'
import { SvgComponentProps } from '.'

export const ErrorIcon = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 60 60'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30 20V32.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
      />
      <path
        d='M29.9863 40H30.0087'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      />
    </svg>

  )
}