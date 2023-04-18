import React from 'react'
import {SvgComponentProps} from '.'

export const DropDownOpen = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 10 6'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.96004 5.02501L5.70004 1.76501C5.31504 1.38001 4.68504 1.38001 4.30004 1.76501L1.04004 5.02501'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
    </svg>

  )
}