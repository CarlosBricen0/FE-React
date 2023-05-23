import React from 'react'
import { SvgComponentProps } from '.'

export const Heart = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 16 14'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.41203 12.8733C8.18537 12.9533 7.81203 12.9533 7.58537 12.8733C5.65203 12.2133 1.33203 9.45998 1.33203 4.79332C1.33203 2.73332 2.99203 1.06665 5.0387 1.06665C6.25203 1.06665 7.32537 1.65332 7.9987 2.55998C8.67203 1.65332 9.75203 1.06665 10.9587 1.06665C13.0054 1.06665 14.6654 2.73332 14.6654 4.79332C14.6654 9.45998 10.3454 12.2133 8.41203 12.8733Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}
