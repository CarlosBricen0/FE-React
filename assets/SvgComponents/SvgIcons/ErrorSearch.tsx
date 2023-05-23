import React from 'react'
import { SvgComponentProps } from '.'

export const ErrorSearch = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 134 134'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='67'
        cy='67'
        fill={color || '#DA291C'}
        opacity='0.1'
        r='67'
      />
      <circle
        cx='67'
        cy='67'
        fill={color || '#DA291C'}
        opacity='0.1'
        r='54'
      />
      <path
        clipRule='evenodd'
        d='M65.5846 37.073C49.8388 37.073 37.0742 49.8375 37.0742 65.5834C37.0742 81.3293 49.8388 94.0938 65.5846 94.0938C81.3305 94.0938 94.0951 81.3293 94.0951 65.5834C94.0951 49.8375 81.3305 37.073 65.5846 37.073ZM40.2617 65.5834C40.2617 51.598 51.5992 40.2605 65.5846 40.2605C79.5701 40.2605 90.9076 51.598 90.9076 65.5834C90.9076 79.5689 79.5701 90.9063 65.5846 90.9063C51.5992 90.9063 40.2617 79.5689 40.2617 65.5834Z'
        fill='white'
        fillRule='evenodd'
      />
      <path d='M90.7949 88.5398C90.1725 87.9174 89.1634 87.9174 88.541 88.5398C87.9186 89.1622 87.9186 90.1713 88.541 90.7937L94.2077 96.4604C94.8301 97.0828 95.8392 97.0828 96.4616 96.4604C97.084 95.838 97.084 94.8289 96.4616 94.2065L90.7949 88.5398Z' fill='white' />
    </svg >
  )
}
