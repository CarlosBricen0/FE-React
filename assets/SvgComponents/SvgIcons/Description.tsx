import React from 'react'
import { SvgComponentProps } from '.'

export const Description = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}  
      fill='none'
      height={`${sizemap}px`} 
      viewBox='0 0 24 24' 
      width={`${sizemap}px`} 
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        stroke={color}
        strokeWidth='1.3'
        x1='5'
        x2='20'
        y1='6.35'
        y2='6.35'
      />
      <line
        stroke={color}
        strokeWidth='1.3'
        x1='5'
        x2='15'
        y1='11.35'
        y2='11.35'
      />
      <line
        stroke={color}
        strokeWidth='1.3'
        x1='5'
        x2='10'
        y1='16.35'
        y2='16.35'
      />
    </svg>
  )
}
