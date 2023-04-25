import React from 'react'
import { SvgComponentProps } from '.'

export const AlertIcon = ({
  sizemap,
  color,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 20 20'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 1.667c-4.583 0-8.333 3.75-8.333 8.333s3.75 8.333 8.333 8.333 8.333-3.75 8.333-8.333S14.583 1.667 10 1.667ZM10 13.333V9.167'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M10.005 6.667h-.008'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  )
}