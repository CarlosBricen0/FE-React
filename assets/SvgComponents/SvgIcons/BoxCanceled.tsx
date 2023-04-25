import React from 'react'
import {SvgComponentProps} from '.'

export const BoxCanceled = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 24'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M3.17 7.44 12 12.55l8.77-5.08' fill='#fff' />
      <path
        d='M3.17 7.44 12 12.55l8.77-5.08M12 21.61v-9.07'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={0.83}
      />
      <path
        d='M9.93 2.48 4.59 5.45c-1.21.67-2.2 2.35-2.2 3.73v5.65c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.18c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.15-.64-3.01-.64-4.15 0Z'
        fill='#fff'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={0.83}
      />
      <path d='M17 13.24V9.58L7.51 4.1' fill='#fff' />
      <path
        d='M17 13.24V9.58L7.51 4.1'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={0.83}
      />
      <circle
        cx={17}
        cy={17}
        fill='#fff'
        r={4.585}
        stroke={color}
        strokeWidth={0.83}
      />
      <path
        d='m15.833 18.167 2.334-2.333M18.167 18.167l-2.334-2.333'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={0.83}
      />
    </svg>
  )
}