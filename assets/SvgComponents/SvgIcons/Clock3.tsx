import React from 'react'
import { SvgComponentProps } from '.'

export const Clock3 = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 54 54'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M27.0001 49.5C39.4265 49.5 49.5001 39.4264 49.5001 27C49.5001 14.5736 39.4265 4.5 27.0001 4.5C14.5737 4.5 4.50006 14.5736 4.50006 27C4.50006 39.4264 14.5737 49.5 27.0001 49.5Z'
        fill={color}
      />
      <path
        d='M26.9999 45C36.9411 45 44.9999 36.9411 44.9999 27C44.9999 17.0589 36.9411 9 26.9999 9C17.0588 9 8.99994 17.0589 8.99994 27C8.99994 36.9411 17.0588 45 26.9999 45Z'
        fill='white'
      />
      <path
        d='M25.8749 12.375H28.1249V27H25.8749V12.375Z'
        fill={color}
      />
      <path
        d='M35.1959 33.3611L33.3677 35.1904L26.0507 27.8733L27.88 26.043L35.1959 33.3611Z'
        fill={color}
      />
      <path
        d='M27.0001 29.25C28.2427 29.25 29.2501 28.2426 29.2501 27C29.2501 25.7574 28.2427 24.75 27.0001 24.75C25.7574 24.75 24.7501 25.7574 24.7501 27C24.7501 28.2426 25.7574 29.25 27.0001 29.25Z'
        fill={color}
      />
      <path
        d='M26.9999 28.125C27.6213 28.125 28.1249 27.6213 28.1249 27C28.1249 26.3787 27.6213 25.875 26.9999 25.875C26.3786 25.875 25.8749 26.3787 25.8749 27C25.8749 27.6213 26.3786 28.125 26.9999 28.125Z'
        fill='#A21B11'
      />
    </svg>
  )
}