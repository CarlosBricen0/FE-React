import React from 'react'
import { SvgComponentProps } from '.'

export const Logout2 = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 16 17'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.93332 5.54C6.13999 3.14 7.37332 2.16 10.0733 2.16H10.16C13.14 2.16 14.3333 3.35334 14.3333 6.33334V10.68C14.3333 13.66 13.14 14.8533 10.16 14.8533H10.0733C7.39332 14.8533 6.15999 13.8867 5.93999 11.5267'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.1'
      />
      <path
        d='M10 8.5H2.41333'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.1'
      />
      <path
        d='M3.89999 6.26666L1.66666 8.5L3.89999 10.7333'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.1'
      />
    </svg>
  )
}