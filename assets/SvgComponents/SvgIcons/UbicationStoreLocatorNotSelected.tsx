import React from 'react'
import { SvgComponentProps } from '.'

export const UbicationStoreLocatorNotSelected = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 45 45'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle
        cx='22.5'
        cy='22.5'
        fill='url(#paint0_linear_387_18035)'
        r='22'
        stroke={color}
      ></circle>
      <path
        d='M13.535 19.49c1.925-8.66 14.455-8.65 16.37.01 1.123 5.08-1.964 9.38-4.669 12.04a4.988 4.988 0 01-7.042 0c-2.695-2.66-5.782-6.97-4.659-12.05z'
        stroke='#282828'
      ></path>
      <path
        d='M21.72 24.43c1.683 0 3.047-1.397 3.047-3.12 0-1.724-1.364-3.12-3.047-3.12s-3.047 1.396-3.047 3.12c0 1.723 1.364 3.12 3.047 3.12z'
        stroke='#282828'
      ></path>
      <defs>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint0_linear_387_18035'
          x1='22.5'
          x2='22.5'
          y1='0'
          y2='98.654'
        >
          <stop stopColor={color}></stop>
          <stop offset='0.439' stopColor={color}></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}