import React from 'react'
import { SvgComponentProps } from './'

export const ExclamationMark = ({color = 'none', sizemap}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 76 76'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter={color}>
        <rect
          fill={color}
          height='60'
          rx='30'
          width='60'
          x='8'
          y='8'
        ></rect>
        <path
          d='M38 28v12.5'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='3'
        ></path>
        <path
          d='M37.986 48h.023'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
        ></path>
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='76'
          id='filter0_d_1728_20996'
          width='76'
          x='0'
          y='0'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation='4'></feGaussianBlur>
          <feColorMatrix values='0 0 0 0 0.105882 0 0 0 0 0.129412 0 0 0 0 0.219608 0 0 0 0.06 0'></feColorMatrix>
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1728_20996'
          ></feBlend>
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_1728_20996'
            result='shape'
          ></feBlend>
        </filter>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint0_linear_1728_20996'
          x1='38'
          x2='38'
          y1='8'
          y2='68'
        >
          <stop stopColor='#DA291C'></stop>
          <stop offset='0.444' stopColor='#C00000'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
