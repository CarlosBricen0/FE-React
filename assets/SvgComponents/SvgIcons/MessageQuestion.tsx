import React from 'react'
import { SvgComponentProps } from '.'

export const MessageQuestion = ({
  color,
  strokeWidth = '1.5',
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 32 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.6666 24.5734H17.3333L11.3999 28.52C10.5199 29.1067 9.33329 28.48 9.33329 27.4134V24.5734C5.33329 24.5734 2.66663 21.9067 2.66663 17.9067V9.90663C2.66663 5.90663 5.33329 3.23996 9.33329 3.23996H22.6666C26.6666 3.23996 29.3333 5.90663 29.3333 9.90663V17.9067C29.3333 21.9067 26.6666 24.5734 22.6666 24.5734Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16 15.1466V14.8667C16 13.96 16.5601 13.48 17.1201 13.0933C17.6667 12.72 18.2133 12.24 18.2133 11.36C18.2133 10.1333 17.2267 9.14664 16 9.14664C14.7734 9.14664 13.7867 10.1333 13.7867 11.36'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}

      />
      <path
        d='M15.994 18.3333H16.006'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
      />
    </svg>

  )
}