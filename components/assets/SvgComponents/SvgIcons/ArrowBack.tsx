import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowBack = ({
  color,
  sizemap,
  site = 'unimarc',
  ...props
}: SvgComponentProps): React.ReactElement => {
  const unimarcSite = site === 'unimarc'
  return unimarcSite ? (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 30 30'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M15.762 3.186c-.556-.535-1.493-.504-1.928.03l-.009.01L3.173 14.635c-.249.268-.367.575-.373.959.016.35.163.743.373.971l10.651 11.408.008.009c.451.543 1.374.563 1.93.027.553-.534.575-1.462.055-1.956l-.009-.009L7.375 17h20.451c.753 0 1.374-.621 1.374-1.4 0-.779-.62-1.4-1.374-1.4H7.375l8.433-9.044.009-.009c.52-.494.498-1.428-.055-1.96z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  ) : (
    <svg
      fill='none'
      height={`${sizemap}px`}
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67'
        stroke='#282828'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}
