import React from 'react'
import {SvgComponentProps} from '.'

export const Truck = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 24'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 14h1c1.1 0 2-.9 2-2V2H6c-1.5 0-2.81.83-3.49 2.05'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
      <path
        d='M2 17c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99A2.016 2.016 0 0016.84 5H15v7c0 1.1-.9 2-2 2h-1'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
      <path
        d='M8 22a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4zM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12zM2 8h6M2 11h4M2 14h2'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
    </svg>
  )
}
