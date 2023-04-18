import React from 'react'
import { SvgComponentProps } from '.'

export const CheckCircle = ({
  sizemap,
  color,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 31 30'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='15.25'
        cy='15'
        fill={color}
        r='15'
      />
      <g clipPath='url(#clip0_10_29)'>
        <path
          d='M12.6875 19.1594L8.77812 15.25L7.44687 16.5719L12.6875 21.8125L23.9375 10.5625L22.6156 9.24063L12.6875 19.1594Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_10_29'>
          <rect
            fill='white'
            height='22.5'
            transform='translate(4.25 4)'
            width='22.5'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
