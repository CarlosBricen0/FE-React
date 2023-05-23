import React from 'react'
import { SvgComponentProps } from '.'

export const CheckThin = ({
  sizemap,
  color,
  ...props
}:SvgComponentProps) : React.ReactElement =>{
  return (
    <svg
      { ...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 32 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 15.002c-.623-.625-1.226-1.174-1.84-.543a1.644 1.644 0 0 0 .015 2.298l9.284 9.282a1.566 1.566 0 0 0 2.235-.012l18.14-18.56c.623-.636.292-.832-.334-1.465-.62-.623-1.379.372-2 1L21 14.447l-9.5 10.055-4.5-4.5-4-5Z'
        fill={color}
      />
    </svg>

  )
}