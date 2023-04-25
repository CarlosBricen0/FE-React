import React from 'react'
import { SvgComponentProps } from '.'

export const ThreePoints = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle
        cx={2.5}
        cy={2.5}
        fill={color}
        r={2.5}
      />
      <circle
        cx={2.5}
        cy={10.5}
        fill={color}
        r={2.5}
      />
      <circle
        cx={2.5}
        cy={18.5}
        fill={color}
        r={2.5}
      />
    </svg>
  )
}
