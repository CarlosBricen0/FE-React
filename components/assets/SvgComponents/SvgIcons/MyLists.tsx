import React from 'react'
import { SvgComponentProps } from '.'

export const MyLists = ({
  color,
  sizemap,
  strokeWidth = '1.5',
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 25'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.37 9.383h5.25m-11.24 0 .75.75 2.25-2.25m2.99 8.5h5.25m-11.24 0 .75.75 2.25-2.25'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9 22.5h6c5 0 7-2 7-7v-6c0-5-2-7-7-7H9c-5 0-7 2-7 7v6c0 5 2 7 7 7Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
