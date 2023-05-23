import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowBack2 = ({ sizemap, ...props }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 32 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        fill='#F5F5F5'
        height='32'
        rx='16'
        width='32'
      />
      <path
        d='M18.5 22L13.4475 16.8548C12.8508 16.2472 12.8508 15.2528 13.4475 14.6452L18.5 9.5'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
    </svg>
  )
}
