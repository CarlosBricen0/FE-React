import React from 'react'
import { SvgComponentProps } from '.'

export const Polygon = ({ sizemap }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={sizemap}
      viewBox='0 0 17 15'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8.19957 0L16.2174 15H0.181765L8.19957 0Z' fill='url(#paint0_linear_5415_126113)'/>
      <defs>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint0_linear_5415_126113'
          x1='8.19957'
          x2='8.19957'
          y1='0'
          y2='20'
        >
          <stop stopColor='#FFE59C'/>
          <stop offset='1' stopColor='#EEC656'/>
        </linearGradient>
      </defs>
    </svg>

  )
}
