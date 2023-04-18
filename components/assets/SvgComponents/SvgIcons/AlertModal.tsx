import React from 'react'
import { SvgComponentProps } from '.'

export const AlertModal = ({
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 76 76'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_5876_509)'>
        <rect
          fill='url(#paint0_linear_5876_509)'
          height='60'
          rx='30'
          width='60'
          x='8'
          y='4'
        />
        <path
          d='M38 24V36.5'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='3'
        />
        <path
          d='M37.9863 44H38.0088'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='76'
          id='filter0_d_5876_509'
          width='76'
          x='0'
          y='0'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'/>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='4'/>
          <feGaussianBlur stdDeviation='4'/>
          <feColorMatrix type='matrix' values='0 0 0 0 0.105882 0 0 0 0 0.129412 0 0 0 0 0.219608 0 0 0 0.06 0'/>
          <feBlend
            in2='BackgroundImageFix'
            mode='normal'
            result='effect1_dropShadow_5876_509'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_5876_509'
            mode='normal'
            result='shape'
          />
        </filter>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint0_linear_5876_509'
          x1='38'
          x2='38'
          y1='4'
          y2='64'
        >
          <stop stopColor='#DA291C'/>
          <stop offset='0.444389' stopColor='#C00000'/>
        </linearGradient>
      </defs>
    </svg>
    
  )
}
