import React from 'react'
import { SvgComponentProps } from '.'

export const Dot = ({
  color = 'none',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill={color}
      height={sizemap}
      viewBox='0 0 8 8'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M3.99935 0.666016C2.15768 0.666016 0.666016 2.15768 0.666016 3.99935C0.666016 5.83935 2.15768 7.33268 3.99935 7.33268C5.83935 7.33268 7.33268 5.83935 7.33268 3.99935C7.33268 2.15768 5.83935 0.666016 3.99935 0.666016Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}
