import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowRight = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 7 14'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.25244 12.28L5.59911 7.9333C6.11244 7.41997 6.11244 6.57997 5.59911 6.06664L1.25244 1.71997'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
    </svg>
  )
}
