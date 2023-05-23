import React from 'react'
import {SvgComponentProps} from '.'

export const Book = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`} 
      viewBox='0 0 29 28'
      width={`${sizemap}px`} 
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.972 20.571V8c0-4.572 1.143-5.714 5.715-5.714h8c4.57 0 5.714 1.143 5.714 5.714v11.428c0 .16 0 .32-.012.48'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M8.23 17.143H24.4v4c0 2.206-1.793 4-4 4H8.973c-2.206 0-4-1.794-4-4V20.4a3.263 3.263 0 0 1 3.257-3.257ZM10.115 8h9.143M10.115 12h5.714'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}