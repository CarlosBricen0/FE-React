import React from 'react'
import { SvgComponentProps } from '.'

export const CashRefundError = ({
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
        <circle
          cx={17}
          cy={19}
          fill='#fff'
          r={4.585}
          strokeWidth={0.83}
        />
        <path
          d='M17.088 21h.006M17.09 19.91v-.137c0-.44.277-.672.553-.86.27-.18.539-.413.539-.84A1.08 1.08 0 0 0 17.09 17 1.08 1.08 0 0 0 16 18.073'
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

