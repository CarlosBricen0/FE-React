import React from 'react'
import { SvgComponentProps } from '.'

export const BagTick = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 32 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.8267 21.3333L14.8267 23.3333L19.16 19.3333'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M11.7466 2.66666L6.91992 7.50666'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M20.2533 2.66666L25.08 7.50666'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M2.66663 10.4667C2.66663 7.99999 3.98663 7.79999 5.62663 7.79999H26.3733C28.0133 7.79999 29.3333 7.99999 29.3333 10.4667C29.3333 13.3333 28.0133 13.1333 26.3733 13.1333H5.62663C3.98663 13.1333 2.66663 13.3333 2.66663 10.4667Z'
        stroke={color}
        strokeWidth='1.5'
      />
      <path
        d='M4.66663 13.3333L6.54663 24.8533C6.97329 27.44 7.99996 29.3333 11.8133 29.3333H19.8533C24 29.3333 24.6133 27.52 25.0933 25.0133L27.3333 13.3333'
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}