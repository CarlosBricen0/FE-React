import * as React from 'react'
import { SvgComponentProps } from '.'

export const OrderBar = ({
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
        d='M8.70781 5.59998L5.60779 2.5L2.50781 5.59998'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M5.60938 17.5V2.5'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M11.293 14.4004L14.393 17.5004L17.493 14.4004'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M14.3906 2.5V17.5'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>

  )
}

