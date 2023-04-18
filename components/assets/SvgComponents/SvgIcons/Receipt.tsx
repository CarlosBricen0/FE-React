import React from 'react'
import { SvgComponentProps } from '.'

export const Receipt = ({
  color,
  strokeWidth = '1.5',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (

    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 28 28'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.73 20.2c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.54c.01-4.03-.93-5.04-4.71-5.04H8.22C4.44 2.5 3.5 3.51 3.5 7.54V18.8c0 2.67 1.46 3.29 3.23 1.4Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.096 11.5h.01'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.898 11.5h5.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.096 7.5h.01'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.898 7.5h5.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
    </svg>

  )
}
