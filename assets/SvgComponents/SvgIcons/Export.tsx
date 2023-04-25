import React from 'react'
import { SvgComponentProps } from '.'

export const Export = ({
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
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
        d='m10.833 9.167 6.834-6.834M18.333 5.667v-4h-4M9.167 1.667H7.5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.167 1.666 5.833 5.833 5.833h5c4.167 0 5.833-1.666 5.833-5.833v-1.667'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}