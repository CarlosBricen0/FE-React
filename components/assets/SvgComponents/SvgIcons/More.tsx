import React from 'react'
import {SvgComponentProps} from '.'

export const More = ({
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
        d='M16 29.067c7.216 0 13.067-5.85 13.067-13.067 0-7.217-5.85-13.067-13.067-13.067C8.783 2.933 2.933 8.783 2.933 16c0 7.216 5.85 13.067 13.067 13.067zM16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        d='M10.133 16A2.667 2.667 0 114.8 16a2.667 2.667 0 015.333 0zM18.666 16a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0zM27.2 16a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0z'
        fill={color}
      />
    </svg>
  )
}