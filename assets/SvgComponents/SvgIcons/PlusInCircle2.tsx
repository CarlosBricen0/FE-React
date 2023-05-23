import React from 'react'
import { SvgComponentProps } from '.'

export const PlusInCircle2 = ({ sizemap, ...props }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 30 30'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        fill='#F6FFFD'
        height='29'
        rx='14.5'
        stroke='#27B190'
        width='29'
        x='0.5'
        y='0.5'
      />
      <path d='M16.0195 14.4961H20.707V16.582H16.0195V21.3164H13.9336V16.582H9.25781V14.4961H13.9336V9.71484H16.0195V14.4961Z' fill='#27B190'/>
    </svg>

  )
}
