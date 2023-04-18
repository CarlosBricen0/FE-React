import React from 'react'
import {SvgComponentProps} from '.'

export const Error = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 40 40'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M17.75 10.75a2.25 2.25 0 014.5 0v11.5a2.25 2.25 0 01-4.5 0v-11.5zM17.25 29.25a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20zM20 3.53C10.904 3.53 3.53 10.905 3.53 20S10.905 36.47 20 36.47 36.47 29.095 36.47 20 29.095 3.53 20 3.53z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}