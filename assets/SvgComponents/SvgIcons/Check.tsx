import React from 'react'
import { SvgComponentProps } from '.'

export const Check = ({
  sizemap,
  color,
  ...props
}:SvgComponentProps) : React.ReactElement =>{
  return (
    <svg 
      { ...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 13 9' 
      width={`${sizemap}px`} 
      xmlns='http://www.w3.org/2000/svg'
    >
      <path 
        d='M11.4842 0.194998L11.4837 0.19545L4.47206 7.38966L1.11026 4.02335L1.10991 4.023C0.853313 3.76517 0.442438 3.7676 0.189805 4.02803C-0.0655601 4.29127 -0.0628707 4.71687 0.195592 4.97667L4.01829 8.80874C4.14608 8.93678 4.3111 9 4.47615 9C4.64247 9 4.80968 8.93507 4.93868 8.80397L4.93902 8.80362L12.4083 1.14157C12.6648 0.879127 12.6638 0.453706 12.4059 0.192215C12.1505 -0.0648617 11.74 -0.0642036 11.4842 0.194998Z' 
        fill={color}
      />
    </svg>

  )
}