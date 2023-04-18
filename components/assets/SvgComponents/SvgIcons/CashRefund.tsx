import React from 'react'
import { SvgComponentProps } from '.'

export const CashRefund = ({
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
      <g clipPath='url(#a)'>
        <path
          d='M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2-3 2Z'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.833}
        />
        <path
          d='M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H10m2 0v1.5m0-9V8'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={0.833}
        />
        <circle
          cx={18}
          cy={18}
          fill='#fff'
          r={5}
        />
        <path
          d='M15.5 16.33h3.631a.79.79 0 0 1 .79.789v.87'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit={10}
          strokeWidth={0.73}
        />
        <path
          d='m16.33 15.5-.83.83.83.83M19.92 19.921H16.29a.79.79 0 0 1-.789-.789v-.87'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit={10}
          strokeWidth={0.73}
        />
        <path
          d='m19.091 20.75.83-.83-.83-.83'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit={10}
          strokeWidth={0.73}
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

