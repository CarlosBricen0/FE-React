import React from 'react'
import { SvgComponentProps } from '.'

export const AddList = ({
  color = 'white',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 38 34'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.282 22.808h5.775M13.282 6.219H24.75M13.37 14.303h11.468M4.107 6.752 5.254 7.9l3.44-3.44M4.107 14.78l1.147 1.147 3.44-3.44M4.107 22.808l1.147 1.147 3.44-3.44M22.147 23h10.294m-5.147 5.147V17.853'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  )
}