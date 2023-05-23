import React from 'react'
import { SvgComponentProps } from '.'

export const InfoThin = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={sizemap}
      viewBox='0 0 80 80'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M40.0001 6.66683C58.3334 6.66683 73.3334 21.6668 73.3334 40.0002C73.3334 58.3335 58.3334 73.3335 40.0001 73.3335C21.6667 73.3335 6.66675 58.3335 6.66675 40.0002C6.66675 21.6668 21.6667 6.66683 40.0001 6.66683Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        d='M40 53.3335V36.6668'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        d='M39.9817 26.6665H40.0116'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
      />
    </svg>
  )
}
