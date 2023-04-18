import React from 'react'
import { SvgComponentProps } from '.'

export const Other = ({
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
      <path
        d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.996 12h.01M11.995 12h.01M7.995 12h.008'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  )
}

