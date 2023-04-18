import React from 'react'
import { SvgComponentProps } from '.'

export const Eye = ({
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
        d='M12.9834 10.0009C12.9834 11.6509 11.6501 12.9842 10.0001 12.9842C8.35006 12.9842 7.01672 11.6509 7.01672 10.0009C7.01672 8.35091 8.35006 7.01758 10.0001 7.01758C11.6501 7.01758 12.9834 8.35091 12.9834 10.0009Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M9.99999 16.8913C12.9417 16.8913 15.6833 15.1579 17.5917 12.1579C18.3417 10.9829 18.3417 9.00794 17.5917 7.83294C15.6833 4.83294 12.9417 3.09961 9.99999 3.09961C7.05832 3.09961 4.31666 4.83294 2.40833 7.83294C1.65833 9.00794 1.65833 10.9829 2.40833 12.1579C4.31666 15.1579 7.05832 16.8913 9.99999 16.8913Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}