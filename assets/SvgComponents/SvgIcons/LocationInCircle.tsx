import React from 'react'
import { SvgComponentProps } from '.'

export const LocationInCircle = ({sizemap, ...props}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 44 45'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <ellipse
        cx='22'
        cy='22.5'
        fill='#F5F5F5'
        rx='22'
        ry='22.5'
      />
      <path
        d='M21.7201 24.4299C23.403 24.4299 24.7673 23.0331 24.7673 21.3099C24.7673 19.5868 23.403 18.1899 21.7201 18.1899C20.0371 18.1899 18.6729 19.5868 18.6729 21.3099C18.6729 23.0331 20.0371 24.4299 21.7201 24.4299Z'
        stroke='#666666'
      />
      <path d='M13.5354 19.49C15.4595 10.83 27.9902 10.84 29.9045 19.5C31.0277 24.58 27.9414 28.88 25.236 31.54C23.2729 33.48 20.1671 33.48 18.1942 31.54C15.4986 28.88 12.4123 24.57 13.5354 19.49Z' stroke='#666666'/>
    </svg>
  )
}

