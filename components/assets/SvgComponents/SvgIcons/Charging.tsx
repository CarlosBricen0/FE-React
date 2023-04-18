import React from 'react'
import { SvgComponentProps } from '.'

export const Charging = ({
  sizemap,
  color,
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
      <g clipPath='url(#a)' stroke={color}>
        <path
          d='M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2-3 2Z'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.833}
        />
        <path
          d='M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H10m2 0v1.5m0-9V8'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.833}
        />
        <path
          d='M7 23V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2-3 2Z'
          fill='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.833}
        />
        <path
          d='M16 10h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H12m2 0v1.5m0-9V10'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.833}
        />
        <circle
          cx={20}
          cy={21}
          fill='#fff'
          r={2.75}
          strokeWidth={0.5}
        />
        <path
          d='M19 22.11 21.11 20M21.11 22.11 19 20'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.83}
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' fill='#fff' />
        </clipPath>
      </defs>
    </svg>
  )
}

