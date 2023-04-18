import React from 'react'
import {SvgComponentProps} from '.'

export const ArrowUp = ({
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
        d='M24.636 24.502c.77.013 1.435-.65 1.39-1.336l-.001-.014.001-15.608a1.366 1.366 0 00-.382-.956c-.25-.245-.626-.433-.935-.456L9.139 5.061l-.012-.002c-.7-.088-1.389.527-1.43 1.298-.04.767.578 1.461 1.295 1.467h.012l12.337.857L6.39 22.637a1.387 1.387 0 00-.05 1.96c.532.57 1.41.6 1.96.086l14.95-13.955.007 12.366v.012c-.044.716.61 1.384 1.378 1.396z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}