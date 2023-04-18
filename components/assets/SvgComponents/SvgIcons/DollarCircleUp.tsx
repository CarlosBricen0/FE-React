import React from 'react'
import { SvgComponentProps } from '.'

export const DollarCircleUp = ({
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
        d='M7.917 11.459c0 .808.625 1.458 1.391 1.458h1.567c.667 0 1.208-.567 1.208-1.275 0-.758-.333-1.034-.825-1.208L8.75 9.559c-.492-.175-.825-.442-.825-1.209 0-.7.542-1.275 1.208-1.275H10.7c.767 0 1.392.65 1.392 1.459M10 6.25v7.5'
        stroke='#00819F'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
      <path
        d='M18.333 10c0 4.6-3.733 8.333-8.333 8.333A8.336 8.336 0 0 1 1.667 10C1.667 5.4 5.4 1.667 10 1.667M18.333 5V1.667H15M14.167 5.833l4.166-4.167'
        stroke='#00819F'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
    </svg>
  )
}