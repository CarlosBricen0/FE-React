import React from 'react'
import { SvgComponentProps } from '.'

export const EyeSlash = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 20 20'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.1083 7.89258L7.8916 12.1092C7.34994 11.5676 7.0166 10.8259 7.0166 10.0009C7.0166 8.35091 8.34994 7.01758 9.99994 7.01758C10.8249 7.01758 11.5666 7.35091 12.1083 7.89258Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M14.8501 4.80742C13.3918 3.70742 11.7251 3.10742 10.0001 3.10742C7.05845 3.10742 4.31678 4.84076 2.40845 7.84075C1.65845 9.01575 1.65845 10.9908 2.40845 12.1658C3.06678 13.1991 3.83345 14.0908 4.66678 14.8074'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M7.0166 16.2741C7.9666 16.6741 8.97493 16.8908 9.99993 16.8908C12.9416 16.8908 15.6833 15.1574 17.5916 12.1574C18.3416 10.9824 18.3416 9.00742 17.5916 7.83242C17.3166 7.39909 17.0166 6.99076 16.7083 6.60742'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M12.925 10.584C12.7083 11.759 11.75 12.7173 10.575 12.934'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M7.89175 12.1074L1.66675 18.3324'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M18.3334 1.66602L12.1084 7.89102'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}