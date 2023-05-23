import React from 'react'
import {SvgComponentProps} from '.'

export const ArrowForward = ({
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
        d='M16.238 28.014c.556.535 1.493.504 1.929-.03l.008-.01 10.652-11.409c.249-.268.367-.575.373-.96-.016-.35-.162-.742-.373-.97L18.176 3.227l-.007-.009c-.452-.543-1.375-.563-1.931-.027-.553.533-.575 1.462-.055 1.956l.009.009 8.433 9.044H4.174c-.753 0-1.374.621-1.374 1.4 0 .779.62 1.4 1.374 1.4h20.451l-8.433 9.044-.009.009c-.52.494-.498 1.427.055 1.96z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}