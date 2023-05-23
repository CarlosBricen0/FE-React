import React from 'react'
import { SvgComponentProps } from '.'

export const Smile = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props} 
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 61 61'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.875 55.917h15.25c12.709 0 17.792-5.084 17.792-17.792v-15.25c0-12.708-5.084-17.792-17.792-17.792h-15.25c-12.708 0-17.791 5.084-17.791 17.792v15.25c0 12.708 5.083 17.792 17.791 17.792Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.5}
      />
      <path
        d='M17.791 20.969c2.542 2.541 6.685 2.541 9.252 0M33.956 20.969c2.542 2.541 6.685 2.541 9.252 0M21.35 33.042h18.3a2.278 2.278 0 0 1 2.288 2.287A11.422 11.422 0 0 1 30.5 46.767a11.422 11.422 0 0 1-11.438-11.438 2.278 2.278 0 0 1 2.288-2.287Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={2.5}
      />
    </svg>
  )
}
