import React from 'react'
import { SvgComponentProps } from '.'

export const UserCircle = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 30 30'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='15'
        cy='15'
        fill='#FAFAFA'
        r='13'
        stroke={color}
        strokeWidth='4'
      />
      <g clipPath='url(#clip0_9_5)'>
        <path
          d='M15.0001 6.25009C10.1701 6.25009 6.25011 10.1701 6.25011 15.0001C6.25011 19.8301 10.1701 23.7501 15.0001 23.7501C19.8301 23.7501 23.7501 19.8301 23.7501 15.0001C23.7501 10.1701 19.8301 6.25009 15.0001 6.25009ZM15.0001 8.87509C16.4526 8.87509 17.6251 10.0476 17.6251 11.5001C17.6251 12.9526 16.4526 14.1251 15.0001 14.1251C13.5476 14.1251 12.3751 12.9526 12.3751 11.5001C12.3751 10.0476 13.5476 8.87509 15.0001 8.87509ZM15.0001 21.3001C12.8126 21.3001 10.8789 20.1801 9.75011 18.4826C9.77636 16.7413 13.2501 15.7876 15.0001 15.7876C16.7414 15.7876 20.2239 16.7413 20.2501 18.4826C19.1214 20.1801 17.1876 21.3001 15.0001 21.3001Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_9_5'>
          <rect
            fill='white'
            height='21'
            transform='translate(4.50011 4.50009)'
            width='21'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
