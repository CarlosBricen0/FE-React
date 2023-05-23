import React from 'react'
import {SvgComponentProps} from '.'

export const CardTicket = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`} 
      viewBox='0 0 28 28'
      width={`${sizemap}px`} 
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.286 9.714h13.142M6.857 18.857h2.286M12 18.857h4.571'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M25.143 12.606v5.805c0 4.012-1.017 5.018-5.075 5.018H7.36c-4.057 0-5.074-1.006-5.074-5.018V9.017C2.286 5.006 3.303 4 7.36 4h8.069'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='m18.857 6.857 1.714 1.714L25.143 4'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}