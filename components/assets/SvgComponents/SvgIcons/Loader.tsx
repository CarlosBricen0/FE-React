import React from 'react'
import {SvgComponentProps} from '.'

export const Loader = ({
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
        clipRule='evenodd'
        d='M21.817 30.043A15.2 15.2 0 1116 .8a1.559 1.559 0 110 3.118A12.082 12.082 0 1028.082 16a1.559 1.559 0 113.118 0 15.2 15.2 0 01-9.383 14.043z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}