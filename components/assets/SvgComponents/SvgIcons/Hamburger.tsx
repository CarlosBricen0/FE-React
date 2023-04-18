import React from 'react'
import { SvgComponentProps } from '.'

export const Hamburger = ({
  color = 'white',
  sizemap = 24,
  site = 'unimarc',
  ...props
}: SvgComponentProps): React.ReactElement => {
  const unimarcSite = site === 'unimarc'
  return unimarcSite ? (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 24'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.2'
      />
    </svg>
  ) : (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 20 15'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.125 13.375h15.75m-15.75-6h15.75m-15.75-6h15.75'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.5}
      />
    </svg>
  )
}
