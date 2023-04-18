import React from 'react'
import { SvgComponentProps } from '.'

export const CalendarInfo = ({
  color = 'white',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 129 129'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle
        cx='64.5'
        cy='64.5'
        fill='#DEEAFA'
        r='64.5'
      />
      <circle
        cx='64.5'
        cy='64.5'
        fill='#02498E'
        opacity='0.1'
        r='51.5'
      />
      <path
        d='M69.8334 75.5952L59.2734 65.0352'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
      <path
        d='M69.727 65.1406L59.167 75.7006'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
      <path
        d='M59.1663 48.4987H69.833C75.1663 48.4987 75.1663 45.832 75.1663 43.1654C75.1663 37.832 72.4997 37.832 69.833 37.832H59.1663C56.4997 37.832 53.833 37.832 53.833 43.1654C53.833 48.4987 56.4997 48.4987 59.1663 48.4987Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
      <path
        d='M75.1667 43.2188C84.0467 43.6988 88.5 46.9787 88.5 59.1654V75.1654C88.5 85.8321 85.8333 91.1654 72.5 91.1654H56.5C43.1667 91.1654 40.5 85.8321 40.5 75.1654V59.1654C40.5 47.0054 44.9533 43.6988 53.8333 43.2188'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='3'
      />
    </svg>
  )
}