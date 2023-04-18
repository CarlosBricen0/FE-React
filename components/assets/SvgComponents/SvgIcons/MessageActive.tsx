import React from 'react'
import { SvgComponentProps } from '.'

export const MessageActive = ({
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 16 16'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.667 12.288h2.666L10.3 14.26a.665.665 0 001.033-.553v-1.42c2 0 3.334-1.334 3.334-3.334v-4c0-2-1.334-3.333-3.334-3.333H4.667c-2 0-3.334 1.333-3.334 3.333v4c0 2 1.334 3.334 3.334 3.334z'
        fill='url(#paint0_linear_8211_91075)'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      ></path>
      <path
        d='M5.667 7h4.666'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      ></path>
      <defs>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint0_linear_8211_91075'
          x1='8'
          x2='8'
          y1='1.621'
          y2='14.374'
        >
          <stop stopColor='#DA291C'></stop>
          <stop offset='0.444' stopColor='#C00000'></stop>
        </linearGradient>
      </defs>
    </svg>
  )

}
