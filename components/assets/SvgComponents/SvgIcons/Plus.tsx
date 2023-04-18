import React from 'react'
import { SvgComponentProps } from '.'

export const Plus = ({
  color = 'black',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 10 10'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M4.63185 1.36815C4.63185 1.16483 4.79667 1 5 1C5.19057 1 5.34725 1.14474 5.36623 1.33032L5.36659 1.33388L5.36824 1.36837L5.36816 4.63184H8.63184C8.83517 4.63184 9 4.79667 9 5C9 5.19057 8.85526 5.34725 8.66968 5.36623L8.66613 5.36659L8.63163 5.36824L5.36815 5.36815L5.36816 8.63184C5.36815 8.83517 5.20333 9 5 9C4.80943 9 4.65275 8.85526 4.63377 8.66968L4.63341 8.66612L4.63176 8.63163L4.63185 5.36815L1.36815 5.36815C1.16483 5.36815 1 5.20333 1 5C1 4.80943 1.14475 4.65275 1.33033 4.63377L1.33388 4.63341L1.36837 4.63176L4.63185 4.63184L4.63185 1.36815Z'
        fillRule='evenodd'
        strokeWidth='0.5'
      />
    </svg>
  )
}
