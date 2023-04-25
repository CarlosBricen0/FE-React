import React from 'react'
import { SvgComponentProps } from '.'

export const Upload = ({
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={sizemap}
      viewBox='0 0 18 15'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.33464 13.3333H15.668V7.5H17.3346V14.1667C17.3346 14.3877 17.2468 14.5996 17.0906 14.7559C16.9343 14.9122 16.7223 15 16.5013 15H1.5013C1.28029 15 1.06833 14.9122 0.912046 14.7559C0.755766 14.5996 0.667969 14.3877 0.667969 14.1667V7.5H2.33464V13.3333ZM9.83464 5V10.8333H8.16797V5H4.0013L9.0013 0L14.0013 5H9.83464Z'
        fill='#9B9B9B'
      />
    </svg>
  )
}
