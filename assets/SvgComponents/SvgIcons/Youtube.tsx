import React from 'react'
import { SvgComponentProps } from '.'

export const Youtube = ({
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
        d='M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.0008 7.87466C17.5516 8.02579 17.9853 8.4711 18.1325 9.03661C18.4 10.0615 18.4 12.2 18.4 12.2C18.4 12.2 18.4 14.3384 18.1325 15.3634C17.9853 15.9289 17.5516 16.3742 17.0008 16.5254C16.0027 16.8 12 16.8 12 16.8C12 16.8 7.99732 16.8 6.99913 16.5254C6.44837 16.3742 6.01462 15.9289 5.86742 15.3634C5.60001 14.3384 5.60001 12.2 5.60001 12.2C5.60001 12.2 5.60001 10.0615 5.86742 9.03661C6.01462 8.4711 6.44837 8.02579 6.99913 7.87466C7.99732 7.6 12 7.6 12 7.6C12 7.6 16.0027 7.6 17.0008 7.87466Z' 
        fill={color} 
        fillRule='evenodd'
      />
      <path 
        clipRule='evenodd' 
        d='M10.05 14.3999V10.3999L13.25 12.4L10.05 14.3999Z'
        fill={color} 
        fillRule='evenodd'
      />
    </svg>
    
  )
}
