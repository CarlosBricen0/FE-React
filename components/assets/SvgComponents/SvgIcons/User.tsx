import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const User = ({
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
      viewBox='0 0 24 25'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M12 1.9375C8.92792 1.9375 6.4375 4.42792 6.4375 7.5C6.4375 10.5721 8.92792 13.0625 12 13.0625C15.0721 13.0625 17.5625 10.5721 17.5625 7.5C17.5625 4.42792 15.0721 1.9375 12 1.9375ZM7.5625 7.5C7.5625 5.04924 9.54923 3.0625 12 3.0625C14.4508 3.0625 16.4375 5.04924 16.4375 7.5C16.4375 9.95076 14.4508 11.9375 12 11.9375C9.54923 11.9375 7.5625 9.95076 7.5625 7.5Z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        d='M12 14.9375C7.06284 14.9375 2.8475 18.2168 2.8475 22.5C2.8475 22.8106 3.09934 23.0625 3.41 23.0625C3.72066 23.0625 3.9725 22.8106 3.9725 22.5C3.9725 19.0431 7.45716 16.0625 12 16.0625C16.5428 16.0625 20.0275 19.0431 20.0275 22.5C20.0275 22.8106 20.2793 23.0625 20.59 23.0625C20.9007 23.0625 21.1525 22.8106 21.1525 22.5C21.1525 18.2168 16.9372 14.9375 12 14.9375Z'
        fill={color}
      />
    </svg>
  ) : (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 24 25'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M12 1.938a5.562 5.562 0 1 0 0 11.125 5.562 5.562 0 0 0 0-11.125ZM7.562 7.5a4.437 4.437 0 1 1 8.875 0 4.437 4.437 0 0 1-8.875 0Z'
        fill={getGlobalStyle('--color-neutral-gray-white')}
        fillRule='evenodd'
      />
      <path
        d='M12 14.938c-4.937 0-9.152 3.279-9.152 7.562a.562.562 0 1 0 1.125 0c0-3.457 3.484-6.438 8.027-6.438 4.543 0 8.027 2.981 8.027 6.438a.562.562 0 1 0 1.125 0c0-4.283-4.215-7.563-9.152-7.563Z'
        fill={getGlobalStyle('--color-neutral-gray-white')}
      />
    </svg>
  )
}
