import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const Close = ({
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
      viewBox='0 0 12 12'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M10.93 1.07a.531.531 0 00-.752 0L6 5.249 1.822 1.071l-.04-.037a.532.532 0 00-.711.788L5.248 6l-4.177 4.178-.037.04a.531.531 0 00.788.711L6 6.752l4.178 4.177.04.037a.531.531 0 00.711-.788L6.752 6l4.177-4.178.037-.04a.532.532 0 00-.037-.711z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  ) : (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 17 17'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M15.265 1 8.5 7.765 1.734 1 1 1.735 7.765 8.5 1 15.266l.734.734 6.767-6.765L15.265 16l.735-.734-6.765-6.767L16 1.735 15.265 1Z'
        fill={color || getGlobalStyle('--color-alvi-icons-gray')}
        fillRule='evenodd'
        stroke={color || getGlobalStyle('--color-alvi-icons-black')}
      />
    </svg>
  )
}