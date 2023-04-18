import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowRightSideNav = ({
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
        d='m1 13.5 5.052-5.351a1.699 1.699 0 0 0 0-2.298L1 .5'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
    </svg>
  )
}
