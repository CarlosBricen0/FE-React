import React from 'react'
import {SvgComponentProps} from '.'

export const DropDownOpenV2 = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 16 17'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 11L7.1452 5.94752C7.75284 5.35083 8.74716 5.35083 9.3548 5.94752L14.5 11'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
    </svg>

  )
}