import React from 'react'
import { SvgComponentProps } from '.'

export const LockCircle = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 30 30'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='15'
        cy='15'
        fill={color}
        r='15'
      />
      <circle
        cx='15'
        cy='15'
        fill={color}
        r='12.625'
        stroke='white'
      />
      <g clipPath='url(#clip0_10_16)'>
        <path
          d='M19.6875 11.875H18.9062V10.3125C18.9062 8.15625 17.1562 6.40625 15 6.40625C12.8438 6.40625 11.0938 8.15625 11.0938 10.3125V11.875H10.3125C9.45312 11.875 8.75 12.5781 8.75 13.4375V21.25C8.75 22.1094 9.45312 22.8125 10.3125 22.8125H19.6875C20.5469 22.8125 21.25 22.1094 21.25 21.25V13.4375C21.25 12.5781 20.5469 11.875 19.6875 11.875ZM15 18.9062C14.1406 18.9062 13.4375 18.2031 13.4375 17.3438C13.4375 16.4844 14.1406 15.7812 15 15.7812C15.8594 15.7812 16.5625 16.4844 16.5625 17.3438C16.5625 18.2031 15.8594 18.9062 15 18.9062ZM17.4219 11.875H12.5781V10.3125C12.5781 8.97656 13.6641 7.89063 15 7.89063C16.3359 7.89063 17.4219 8.97656 17.4219 10.3125V11.875Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_10_16'>
          <rect
            fill='white'
            height='18.75'
            transform='translate(5.625 5.625)'
            width='18.75'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
