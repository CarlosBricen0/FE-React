import React from 'react'
import { SvgComponentProps } from '.'

export const GiftCard = ({
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 36 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.39941 20.8516L29.5994 20.8516'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M6.39941 25.2582H12.7994'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <rect
        height='20.9'
        rx='3.25'
        stroke='#282828'
        strokeWidth='1.5'
        width='27.3'
        x='2.34961'
        y='8.80154'
      />
      <path
        d='M23.2608 16.0514L15.6608 8.45145M15.6608 8.45145C14.4603 5.25155 12.4616 3.25137 10.0608 2.85145C7.66005 2.45153 6.06029 4.45155 6.46083 6.45145C6.86136 8.45135 8.86029 8.45145 8.86029 8.45145H15.6608Z'
        stroke='#282828'
        strokeLinecap='round'
        strokeWidth='1.5'
      />
      <path
        d='M8.46085 16.0514L16.0609 8.45145M16.0609 8.45145C17.2614 5.25155 19.2601 3.25137 21.6609 2.85145C24.0616 2.45153 25.6614 4.45155 25.2609 6.45145C24.8603 8.45135 22.8614 8.45145 22.8614 8.45145H16.0609Z'
        stroke='#282828'
        strokeLinecap='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}
