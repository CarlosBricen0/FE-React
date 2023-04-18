import React from 'react'
import { SvgComponentProps } from '.'

export const Warning = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 16 14'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M8 .25C4.023.25.8 3.272.8 7s3.223 6.75 7.2 6.75c3.976 0 7.2-3.022 7.2-6.75S11.976.25 8 .25Zm.9 4.219c0 .466-.403.843-.9.843s-.9-.377-.9-.843c0-.466.403-.844.9-.844s.9.378.9.844ZM8 6.156c-.497 0-.9.378-.9.844v2.531c0 .466.403.844.9.844s.9-.378.9-.844V7c0-.466-.403-.844-.9-.844Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
    
  )
}
