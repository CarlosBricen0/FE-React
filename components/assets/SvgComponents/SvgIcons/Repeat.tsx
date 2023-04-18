import React from 'react'
import { SvgComponentProps } from '.'

export const Repeat = ({ sizemap }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={sizemap}
      viewBox='0 0 32 32'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.77344 6.87988H23.2268C25.4401 6.87988 27.2268 8.66655 27.2268 10.8799V15.3066'
        stroke='#292D32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
      <path
        d='M8.98678 2.66663L4.77344 6.87992L8.98678 11.0933'
        stroke='#292D32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
      <path
        d='M27.2268 25.12H8.77344C6.5601 25.12 4.77344 23.3334 4.77344 21.12V16.6934'
        stroke='#292D32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
      <path
        d='M23.0137 29.3333L27.227 25.12L23.0137 20.9066'
        stroke='#292D32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      />
    </svg>

  )
}