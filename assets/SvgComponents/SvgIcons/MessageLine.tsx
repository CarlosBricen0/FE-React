import React from 'react'
import { SvgComponentProps } from '.'

export const MessageLine = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 16 16'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.667 12.288h2.667L10.3 14.26a.665.665 0 001.034-.553v-1.42c2 0 3.333-1.334 3.333-3.334v-4c0-2-1.333-3.333-3.333-3.333H4.667c-2 0-3.333 1.333-3.333 3.333v4c0 2 1.333 3.334 3.333 3.334zM5.667 7h4.666'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
      <path
        d='M5.6665 7H10.3332'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
    </svg>
  )
}
