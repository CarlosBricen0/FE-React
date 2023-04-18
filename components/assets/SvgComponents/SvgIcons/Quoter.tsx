import React from 'react'
import { SvgComponentProps } from '.'

export const Quoter = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={sizemap}
      viewBox='0 0 32 32'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M26.6667 11V24C26.6667 28 24.28 29.3334 21.3333 29.3334H10.6667C7.71999 29.3334 5.33333 28 5.33333 24V11C5.33333 6.66669 7.71999 5.66669 10.6667 5.66669C10.6667 6.49335 11 7.24002 11.5466 7.78668C12.0933 8.33335 12.84 8.66669 13.6667 8.66669H18.3333C19.9867 8.66669 21.3333 7.32002 21.3333 5.66669C24.28 5.66669 26.6667 6.66669 26.6667 11Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.3333 5.66669C21.3333 7.32002 19.9867 8.66669 18.3333 8.66669H13.6667C12.84 8.66669 12.0933 8.33335 11.5466 7.78668C11 7.24002 10.6667 6.49335 10.6667 5.66669C10.6667 4.01335 12.0133 2.66669 13.6667 2.66669H18.3333C19.16 2.66669 19.9067 3.00003 20.4534 3.54669C21 4.09336 21.3333 4.84002 21.3333 5.66669Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6667 17.3333H16'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6667 22.6667H21.3333'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>

  )
}
