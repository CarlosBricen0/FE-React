import React from 'react'
import { SvgComponentProps } from '.'

export const Product = ({
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
      >
        <path d='M12 21a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z' strokeWidth={0.83} />
        <path
          d='M12 11V5a2 2 0 0 1 2-2h2v1a2 2 0 0 1-2 2h-2'
          strokeWidth={0.83}
        />
        <path d='M10 10.5c1.333.667 2.667.667 4 0' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}