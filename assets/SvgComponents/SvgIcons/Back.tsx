import React from 'react'
import {SvgComponentProps} from '.'

export const Back = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 54 54'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.004 16.116c.028.377.184.733.445 1.013L20.968 30.64a1.77 1.77 0 001.653.523 1.722 1.722 0 001.294-1.13 1.653 1.653 0 00-.361-1.652L12.079 16 23.554 3.619a1.653 1.653 0 00.36-1.653 1.722 1.722 0 00-1.293-1.13 1.77 1.77 0 00-1.653.524L8.449 14.87a1.66 1.66 0 00-.445 1.246z'
        fill={color}
      />
    </svg>
  )
}