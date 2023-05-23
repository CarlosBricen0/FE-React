import React from 'react'
import { SvgComponentProps } from '.'

export const Message = ({
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
        d='M7.08329 15.8333H6.66663C3.33329 15.8333 1.66663 15 1.66663 10.8333V6.66667C1.66663 3.33334 3.33329 1.66667 6.66663 1.66667H13.3333C16.6666 1.66667 18.3333 3.33334 18.3333 6.66667V10.8333C18.3333 14.1667 16.6666 15.8333 13.3333 15.8333H12.9166C12.6583 15.8333 12.4083 15.9583 12.25 16.1667L11 17.8333C10.45 18.5667 9.54996 18.5667 8.99996 17.8333L7.74996 16.1667C7.61663 15.9833 7.30829 15.8333 7.08329 15.8333Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M13.3304 9.16667H13.3379'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        d='M9.9962 9.16667H10.0037'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        d='M6.66209 9.16667H6.66957'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>

  )
}
