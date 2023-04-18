import React from 'react'
import { SvgComponentProps } from '.'

export const SmsEdit = ({
  color,
  sizemap,
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
        d='M9.99996 17.0833H5.83329C3.33329 17.0833 1.66663 15.8333 1.66663 12.9167V7.08333C1.66663 4.16666 3.33329 2.91666 5.83329 2.91666H14.1666C16.6666 2.91666 18.3333 4.16666 18.3333 7.08333V9.58333'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M16.0083 12.3083L13.0583 15.2583C12.9416 15.375 12.8333 15.5917 12.8083 15.75L12.6499 16.875C12.5916 17.2833 12.875 17.5667 13.2833 17.5084L14.4083 17.35C14.5666 17.325 14.7916 17.2167 14.9 17.1L17.85 14.15C18.3583 13.6417 18.6 13.05 17.85 12.3C17.1083 11.5584 16.5166 11.8 16.0083 12.3083Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M15.5833 12.7333C15.8333 13.6333 16.5333 14.3333 17.4333 14.5833'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
    </svg>

  )
}
