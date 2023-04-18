import React from 'react'
import { SvgComponentProps } from '.'

export const Info = ({
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
        clipRule='evenodd'
        d='M13.35 17.55C13.35 18.2956 12.7456 18.9 12 18.9C11.2544 18.9 10.65 18.2956 10.65 17.55L10.65 10.65C10.65 9.90441 11.2544 9.3 12 9.3C12.7456 9.3 13.35 9.90441 13.35 10.65L13.35 17.55Z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M13.65 6.45C13.65 7.36127 12.9113 8.1 12 8.1C11.0887 8.1 10.35 7.36127 10.35 6.45C10.35 5.53873 11.0887 4.8 12 4.8C12.9113 4.8 13.65 5.53873 13.65 6.45Z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 -4.83988e-07 18.6274 9.53989e-08 12C6.74786e-07 5.37258 5.37259 -2.58213e-06 12 -2.00275e-06C18.6274 -1.42336e-06 24 5.37258 24 12ZM12 21.8816C17.4574 21.8816 21.8816 17.4574 21.8816 12C21.8816 6.54255 17.4574 2.11842 12 2.11842C6.54256 2.11842 2.11842 6.54255 2.11842 12C2.11842 17.4574 6.54255 21.8816 12 21.8816Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}
