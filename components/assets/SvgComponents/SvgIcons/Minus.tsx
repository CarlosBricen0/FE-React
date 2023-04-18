import React from 'react'
import { SvgComponentProps } from '.'

export const Minus = ({ sizemap, color }: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 8 8'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1.2002 3.95001C1.2002 3.75671 1.36895 3.60001 1.57712 3.60001H6.42327C6.63144 3.60001 6.8002 3.75671 6.8002 3.95001C6.8002 4.14331 6.63144 4.30001 6.42327 4.30001H1.57712C1.36895 4.30001 1.2002 4.14331 1.2002 3.95001Z' strokeWidth='0.5' />
    </svg>
  )
}
