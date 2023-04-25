import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const Localization = ({
  color = getGlobalStyle('--color-icons-gray'),
  sizemap = 18
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={sizemap}
      viewBox='0 0 18 18'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.6282 1.17881L3.20422 4.41382C0.729349 5.17986 0.693993 8.66825 3.15119 9.48731L6.01497 10.4419C6.81047 10.7071 7.43508 11.3317 7.70024 12.1272L8.65484 14.991C9.4739 17.4482 12.9564 17.4069 13.7283 14.9379L16.9633 4.514C17.5997 2.46339 15.6788 0.542413 13.6282 1.17881Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}
