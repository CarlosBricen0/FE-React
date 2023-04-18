import React from 'react'
import { SvgComponentProps } from '.'

export const List = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 16 16'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.33331 13H14'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M7.33331 8.33334H14'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M7.33331 3.66666H14'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M2 3.66668L2.66667 4.33334L4.66667 2.33334'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M2 8.33333L2.66667 9L4.66667 7'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M2 13L2.66667 13.6667L4.66667 11.6667'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}
