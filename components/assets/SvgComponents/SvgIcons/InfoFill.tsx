import React from 'react'
import { SvgComponentProps } from '.'

export const InfoFill = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill={color}
      height={sizemap}
      viewBox='0 0 20 21'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5ZM11.25 6.75C11.25 7.44036 10.6904 8 10 8C9.30964 8 8.75 7.44036 8.75 6.75C8.75 6.05964 9.30964 5.5 10 5.5C10.6904 5.5 11.25 6.05964 11.25 6.75ZM10 9.25C9.30964 9.25 8.75 9.80964 8.75 10.5V14.25C8.75 14.9404 9.30964 15.5 10 15.5C10.6904 15.5 11.25 14.9404 11.25 14.25V10.5C11.25 9.80964 10.6904 9.25 10 9.25Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}
