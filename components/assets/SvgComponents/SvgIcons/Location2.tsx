import React from 'react'
import { SvgComponentProps } from '.'

export const Location2 = ({sizemap, ...props}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 20 20'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 11.1916C11.436 11.1916 12.6 10.0276 12.6 8.59164C12.6 7.1557 11.436 5.99164 10 5.99164C8.56408 5.99164 7.40002 7.1557 7.40002 8.59164C7.40002 10.0276 8.56408 11.1916 10 11.1916Z'
        stroke='#666666'
        strokeWidth='1.5'
      />
      <path
        d='M3.01663 7.07502C4.65829 -0.141644 15.35 -0.133311 16.9833 7.08336C17.9416 11.3167 15.3083 14.9 13 17.1167C11.325 18.7334 8.67496 18.7334 6.99163 17.1167C4.69163 14.9 2.05829 11.3084 3.01663 7.07502Z'
        stroke='#666666'
        strokeWidth='1.5'
      />
    </svg>
  )
}
