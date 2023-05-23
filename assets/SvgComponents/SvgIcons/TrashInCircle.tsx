import React from 'react'
import { SvgComponentProps } from '.'

export const TrashInCircle = ({ sizemap, ...props }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}`}
      viewBox='0 0 34 30'
      width={`${sizemap}`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_d_8258_390716)'>
        <rect
          fill='white'
          height='22'
          rx='11'
          width='22'
          x='4'
          y='4'
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
      <g clipPath='url(#clip0_8258_390716)'>
        <path
          d='M19.5 11.9922C17.835 11.8272 16.16 11.7422 14.49 11.7422C13.5 11.7422 12.51 11.7922 11.52 11.8922L10.5 11.9922'
          stroke='#27B190'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.25 11.485L13.36 10.83C13.44 10.355 13.5 10 14.345 10H15.655C16.5 10 16.565 10.375 16.64 10.835L16.75 11.485'
          stroke='#27B190'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.425 13.5703L18.1 18.6053C18.045 19.3903 18 20.0003 16.605 20.0003H13.395C12 20.0003 11.955 19.3903 11.9 18.6053L11.575 13.5703'
          stroke='#27B190'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.165 17.25H15.83'
          stroke='#27B190'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.75 15.25H16.25'
          stroke='#27B190'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='38'
          id='filter0_d_8258_390716'
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
            result='effect1_dropShadow_8258_390716'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_8258_390716'
            mode='normal'
            result='shape'
          />
        </filter>
        <clipPath id='clip0_8258_390716'>
          <rect
            fill='white'
            height='12'
            transform='translate(9 9)'
            width='12'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
