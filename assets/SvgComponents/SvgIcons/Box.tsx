import React from 'react'
import {SvgComponentProps} from '.'

export const Box = ({
  color,
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
        d='m3.623 8.503 10.091 5.84 10.023-5.806M13.714 24.697V14.332'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1}
      />
      <path
        d='M11.349 2.834 5.246 6.23C3.863 6.994 2.73 8.914 2.73 10.49v6.457c0 1.578 1.132 3.498 2.515 4.263l6.103 3.395c1.302.72 3.44.72 4.742 0l6.103-3.395c1.383-.765 2.515-2.685 2.515-4.262V10.49c0-1.577-1.132-3.497-2.515-4.262l-6.103-3.395c-1.314-.731-3.44-.731-4.742 0Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1}
      />
      <path
        d='M19.429 15.131v-4.183L8.583 4.686'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1}
      />
    </svg>
  )
}