import React from 'react'
import { SvgComponentProps } from '.'

export const Shop = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 32 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.01331 14.96V20.9467C4.01331 26.9333 6.41331 29.3333 12.4 29.3333H19.5866C25.5733 29.3333 27.9733 26.9333 27.9733 20.9467V14.96'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M16 16C18.44 16 20.24 14.0133 20 11.5733L19.12 2.66666H12.8933L12 11.5733C11.76 14.0133 13.56 16 16 16Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M24.4133 16C27.1066 16 29.08 13.8133 28.8133 11.1333L28.44 7.46666C27.96 3.99999 26.6266 2.66666 23.1333 2.66666H19.0667L20 12.0133C20.2266 14.2133 22.2133 16 24.4133 16Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M7.51997 16C9.71997 16 11.7066 14.2133 11.92 12.0133L12.2133 9.06666L12.8533 2.66666H8.78663C5.2933 2.66666 3.95997 3.99999 3.47997 7.46666L3.11997 11.1333C2.8533 13.8133 4.82663 16 7.51997 16Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M16 22.6667C13.7733 22.6667 12.6666 23.7733 12.6666 26V29.3333H19.3333V26C19.3333 23.7733 18.2266 22.6667 16 22.6667Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>

  )
}