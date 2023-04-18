import * as React from 'react'
import { SvgComponentProps } from '.'

export const FilterBar = ({
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
      viewBox='0 0 20 20'
    >
      <g clipPath='url(#clip0_2334_81656)'>
        <path
          d='M18.332 5.41699H13.332'
          stroke='#282828'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
        <path
          d='M5.0013 5.41699H1.66797'
          stroke='#282828'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
        <path
          d='M8.33464 8.33333C9.94547 8.33333 11.2513 7.0275 11.2513 5.41667C11.2513 3.80584 9.94547 2.5 8.33464 2.5C6.7238 2.5 5.41797 3.80584 5.41797 5.41667C5.41797 7.0275 6.7238 8.33333 8.33464 8.33333Z'
          stroke='#282828'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
        <path
          d='M18.3333 14.583H15'
          stroke='#282828'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
        <path
          d='M6.66797 14.583H1.66797'
          stroke='#282828'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
        <path
          d='M11.6667 17.5003C13.2775 17.5003 14.5833 16.1945 14.5833 14.5837C14.5833 12.9728 13.2775 11.667 11.6667 11.667C10.0558 11.667 8.75 12.9728 8.75 14.5837C8.75 16.1945 10.0558 17.5003 11.6667 17.5003Z'
          stroke='#282828'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
      </g>
      <defs>
        <clipPath id='clip0_2334_81656'>
          <rect
            fill='white'
            height='20'
            width='20'
          />
        </clipPath>
      </defs>
    </svg>

  )
}

