import React from 'react'
import {SvgComponentProps} from '.'

export const ArrowDown = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      height={`${sizemap}px`}
      viewBox='0 0 512 512' 
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path 
        d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-92.5-4.5l-6.9-6.9c-4.7-4.7-12.5-4.7-17.1.2L273 330.3V140c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v190.3l-82.5-85.6c-4.7-4.8-12.4-4.9-17.1-.2l-6.9 6.9c-4.7 4.7-4.7 12.3 0 17l115 115.1c4.7 4.7 12.3 4.7 17 0l115-115.1c4.7-4.6 4.7-12.2 0-16.9z' 
        fill={color}
      >
      </path>
    </svg>
  )
}