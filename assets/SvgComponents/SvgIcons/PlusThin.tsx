import React from 'react'
import { SvgComponentProps } from '.'

export const PlusThin = ({
  color = 'black',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 17 17'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 8.5H16M8.5 16V1'
        stroke='#F9F9F9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

