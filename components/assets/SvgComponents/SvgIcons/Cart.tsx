import React from 'react'
import { SvgComponentProps } from '.'

export const Cart = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 21 21'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m19.664 10.869 1.14-6.268a.563.563 0 0 0-.554-.663H4.97l-.486-2.673A1.312 1.312 0 0 0 3.192.188H1.5a.563.563 0 0 0 0 1.125h1.692a.187.187 0 0 1 .185.153L5.97 15.73a2.438 2.438 0 1 0 3.582.584h5.646a2.437 2.437 0 1 0 2.052-1.125H7.015l-.477-2.626h11.097a2.06 2.06 0 0 0 2.029-1.693ZM8.812 17.625a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.625 0Zm9.75 0a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0ZM5.175 5.062h14.402l-1.02 5.606a.937.937 0 0 1-.921.77H6.333L5.174 5.061Z'
        fill={color}
      />
    </svg>
  )
}