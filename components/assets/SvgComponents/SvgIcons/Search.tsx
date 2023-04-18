import React from 'react'
import {SvgComponentProps} from '.'

export const Search = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 54 54'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M22.827 3.978c-5.197-5.197-13.653-5.197-18.85 0-5.196 5.196-5.196 13.652 0 18.849 4.84 4.84 12.505 5.17 17.733.995l.056-.045 7.726 7.726a1.423 1.423 0 002.012-2.011l-7.727-7.727.045-.056c4.175-5.227 3.844-12.892-.995-17.731zM5.989 5.989c4.088-4.088 10.739-4.088 14.826 0s4.088 10.738 0 14.826c-4.088 4.088-10.738 4.087-14.826 0-4.088-4.087-4.088-10.738 0-14.826z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}