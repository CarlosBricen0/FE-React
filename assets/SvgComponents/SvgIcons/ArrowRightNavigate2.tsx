import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowRightNavigate2 = ({
  color,
  sizemap,
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
      <path
        d='m7.5 21.75 7.579-8.027c.895-.947.895-2.499 0-3.447L7.5 2.25'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}