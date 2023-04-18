import React from 'react'
import {SvgComponentProps} from '.'

export const CloseVariant = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 24'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5 16.299 21 10.5 21 0 16.299 0 10.5Zm10.5-8.646a8.646 8.646 0 1 0 0 17.292 8.646 8.646 0 0 0 0-17.292ZM5.963 5.79a.799.799 0 0 1 1.13 0L10.5 9.198l3.407-3.407a.799.799 0 0 1 1.13 0l.117.118a.799.799 0 0 1 0 1.13l-3.407 3.407 3.462 3.46a.8.8 0 0 1 0 1.13l-.118.118a.8.8 0 0 1-1.13 0l-3.461-3.46-3.461 3.46a.799.799 0 0 1-1.13 0l-.117-.117a.799.799 0 0 1 0-1.13l3.46-3.461-3.406-3.407a.799.799 0 0 1 0-1.13l.117-.118Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}