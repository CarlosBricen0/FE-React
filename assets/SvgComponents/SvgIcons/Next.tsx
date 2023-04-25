import React from 'react'
import {SvgComponentProps} from '.'

export const Next = ({
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
        d='M23.996 15.884a1.665 1.665 0 00-.445-1.013L11.032 1.36A1.77 1.77 0 009.38.837c-.608.125-1.101.555-1.294 1.13a1.653 1.653 0 00.361 1.652L19.921 16 8.446 28.381a1.653 1.653 0 00-.36 1.653 1.722 1.722 0 001.293 1.13 1.77 1.77 0 001.653-.524l12.519-13.51a1.66 1.66 0 00.445-1.246z'
        fill={color}
      />
    </svg>
  )
}