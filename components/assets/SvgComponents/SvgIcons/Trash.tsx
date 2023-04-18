
import React from 'react'
import { SvgComponentProps } from '.'

export const Trash = ({
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
        d='M17.5 5.362a84.752 84.752 0 0 0-8.35-.416c-1.65 0-3.3.083-4.95.25l-1.7.166M7.083 4.52l.183-1.091c.134-.792.234-1.383 1.642-1.383h2.183c1.409 0 1.517.625 1.642 1.391l.183 1.084M15.709 7.996l-.542 8.391c-.092 1.309-.167 2.325-2.492 2.325h-5.35c-2.325 0-2.4-1.016-2.491-2.325l-.542-8.391M8.608 14.129h2.775M7.917 10.796h4.167'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}
