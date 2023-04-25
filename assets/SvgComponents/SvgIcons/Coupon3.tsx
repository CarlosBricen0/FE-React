import React from 'react'
import { SvgComponentProps } from '.'

export const Coupon3 = ({
  sizemap,
  color,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 24'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        clipPath='url(#a)'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={0.833}
      >
        <path d='M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}