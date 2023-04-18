import React from 'react'
import { SvgComponentProps } from '.'

export const UserCircle2 = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 80 80'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='40'
        cy='40'
        fill={color}
        opacity='0.1'
        r='40'
      />
      <mask
        height='80'
        id='mask0_6_355'
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'alpha'
        }}
        width='80'
        x='0'
        y='0'
      >
        <circle
          cx='40'
          cy='40'
          fill={color}
          r='40'
        />
      </mask>
      <g mask='url(#mask0_6_355)'>
        <ellipse
          cx='40.0005'
          cy='70.3997'
          fill={color}
          rx='30.4'
          ry='17.6'
        />
      </g>
      <ellipse
        cx='40.0001'
        cy='33.9998'
        fill={color}
        rx='14.4'
        ry='14.4'
      />
    </svg>
  )
}
