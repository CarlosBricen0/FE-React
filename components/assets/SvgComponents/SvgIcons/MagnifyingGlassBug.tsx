import React from 'react'
import { SvgComponentProps } from '.'

export const MagnifyingGlassBug = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 61 61'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m25.243 25.246 8.986 8.986M25.244 34.228l8.986-8.986M29.23 53.374c13.335 0 24.145-10.81 24.145-24.146S42.565 5.082 29.229 5.082c-13.335 0-24.146 10.81-24.146 24.146 0 13.335 10.81 24.146 24.146 24.146ZM55.917 55.915l-5.084-5.083'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.5}
      />
    </svg>
  )
}
