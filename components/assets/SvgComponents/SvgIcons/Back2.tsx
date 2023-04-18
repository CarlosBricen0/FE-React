import React from 'react'
import {SvgComponentProps} from '.'

export const Back2 = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 20 20'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m12.5 16.6-5.433-5.433a1.655 1.655 0 0 1 0-2.333L12.5 3.4'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}