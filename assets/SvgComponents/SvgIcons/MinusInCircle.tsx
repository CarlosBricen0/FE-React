import React from 'react'
import { SvgComponentProps } from '.'

export const MinusInCircle = ({ sizemap, ...props }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 34 30'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_d_7917_400667)'>
        <rect
          fill='white'
          height='22'
          rx='11'
          width='22'
          x='4'
          y='4'
        />
        <path
          d='M9.5 15H20.5'
          stroke='#27B190'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          height='21'
          rx='10.5'
          stroke='#27B190'
          width='21'
          x='4.5'
          y='4.5'
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='38'
          id='filter0_d_7917_400667'
          width='38'
          x='-4'
          y='-4'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'/>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset/>
          <feGaussianBlur stdDeviation='4'/>
          <feColorMatrix type='matrix' values='0 0 0 0 0.105882 0 0 0 0 0.129412 0 0 0 0 0.219608 0 0 0 0.06 0'/>
          <feBlend
            in2='BackgroundImageFix'
            mode='normal'
            result='effect1_dropShadow_7917_400667'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_7917_400667'
            mode='normal'
            result='shape'
          />
        </filter>
      </defs>
    </svg>

  )
}
