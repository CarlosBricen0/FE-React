import React from 'react'
import {SvgComponentProps} from '.'

export const DropDownClose = ({
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
        d='M8.96004 0.974976L5.70004 4.23498C5.31504 4.61998 4.68504 4.61998 4.30004 4.23498L1.04004 0.974976'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
    </svg>

  )
}