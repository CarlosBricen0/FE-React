import React from 'react'
import {SvgComponentProps} from '.'

export const DropDownCloseV2 = ({
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
        d='M14 6L8.8548 11.0525C8.24716 11.6492 7.25284 11.6492 6.6452 11.0525L1.5 6'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
    </svg>
  )
}