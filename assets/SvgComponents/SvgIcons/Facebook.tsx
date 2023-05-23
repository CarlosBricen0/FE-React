import React from 'react'
import { SvgComponentProps } from '.'

export const Facebook = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg 
      {...props} 
      fill={color} 
      height={`${sizemap}px`}
      viewBox='0 0 24 24' 
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    > 
      <path 
        clipRule='evenodd'  
        d='M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM13.2508 12.5271V19.0557H10.5495V12.5274H9.2V10.2776H10.5495V8.92678C10.5495 7.0914 11.3116 6 13.4766 6H15.279V8.25006H14.1524C13.3096 8.25006 13.2538 8.56447 13.2538 9.15125L13.2508 10.2773H15.2918L15.053 12.5271H13.2508Z' 
        fill={color} 
        fillRule='evenodd'
      />
    </svg>
  )
}
