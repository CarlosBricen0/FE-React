import * as React from 'react'
import { SvgComponentProps } from '.'

export const Filter = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M14.85 4.35a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12.878 5.4H1.05a1.05 1.05 0 1 1 0-2.1h11.828a4.352 4.352 0 0 1 8.444 0h1.628a1.05 1.05 0 1 1 0 2.1h-1.628a4.352 4.352 0 0 1-8.444 0ZM9.15 11.55a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm1.972-1.05H22.95a1.05 1.05 0 1 1 0 2.1H11.122a4.352 4.352 0 0 1-8.444 0H1.05a1.05 1.05 0 1 1 0-2.1h1.628a4.352 4.352 0 0 1 8.444 0Z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M14.85 18.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm-1.972 1.05H1.05a1.05 1.05 0 1 1 0-2.1h11.828a4.352 4.352 0 0 1 8.444 0h1.628a1.05 1.05 0 1 1 0 2.1h-1.628a4.352 4.352 0 0 1-8.444 0Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}

