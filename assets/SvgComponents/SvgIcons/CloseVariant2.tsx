import React from 'react'
import { SvgComponentProps } from '.'

export const CloseVariant2 = ({
  color,
  strokeWidth = '1.5',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 28 28'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14 25.43c6.286 0 11.429-5.143 11.429-11.43 0-6.285-5.143-11.428-11.429-11.428-6.286 0-11.429 5.143-11.429 11.429 0 6.286 5.143 11.428 11.429 11.428ZM10.766 17.235l6.468-6.468M17.234 17.235l-6.468-6.468'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}