import React from 'react'
import {SvgComponentProps} from '.'

export const SearchCart = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 20 20'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.58268 17.5C13.9549 17.5 17.4993 13.9556 17.4993 9.58332C17.4993 5.21107 13.9549 1.66666 9.58268 1.66666C5.21043 1.66666 1.66602 5.21107 1.66602 9.58332C1.66602 13.9556 5.21043 17.5 9.58268 17.5Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M18.3327 18.3333L16.666 16.6667'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}