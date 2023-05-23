import React from 'react'
import { SvgComponentProps } from '.'

export const Receipt2 = ({ sizemap, ...props }: SvgComponentProps): React.ReactElement => {
  return (

    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 64 61'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.605 50.07c2.085-2.236 5.262-2.058 7.092.382l2.567 3.431c2.059 2.72 5.388 2.72 7.447 0l2.567-3.43c1.83-2.44 5.007-2.619 7.091-.382 4.524 4.829 8.21 3.228 8.21-3.533V17.893c.025-10.243-2.364-12.81-11.971-12.81H21.393c-9.608 0-11.997 2.567-11.997 12.81v28.62c0 6.786 3.71 8.362 8.21 3.558ZM21.078 27.958h.022M28.2 27.958h13.98M21.078 17.792h.022M28.2 17.792h13.98'
        stroke='#DA291C'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.5}
      />
      <g clipPath='url(#a)'>
        <circle
          cx={52}
          cy={38.5}
          fill='#F3D1CF'
          r={11.5}
        />
        <path
          d='M52 47.844a9.344 9.344 0 1 0 0-18.688 9.344 9.344 0 0 0 0 18.688Z'
          stroke='#DA291C'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2.5}
        />
        <path
          d='M49.19 42.027a2.627 2.627 0 0 0 2.204.992h1.322a2.204 2.204 0 1 0 0-4.409h-1.432a2.204 2.204 0 0 1 0-4.408h1.322c.992 0 1.653.22 2.204.992m-2.865-2.204v11.02'
          stroke='#DA291C'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2.5}
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            d='M0 0h23v23H0z'
            fill='#fff'
            transform='translate(40.5 27)'
          />
        </clipPath>
      </defs>
    </svg>

  )
}
