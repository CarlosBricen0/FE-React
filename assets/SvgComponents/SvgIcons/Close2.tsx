import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const Close2 = ({
  color,
  sizemap,
  site = 'unimarc',
  ...props
}: SvgComponentProps): React.ReactElement => {
  const unimarcSite = site === 'unimarc'
  return unimarcSite ? (
    <svg
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 32 32'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        fill='#F5F5F5'
        height='32'
        rx='16'
        width='32'
      />
      <path
        clipRule='evenodd'
        d='M22.5727 9.42775C22.296 9.15104 21.8473 9.15104 21.5706 9.42775L16.0002 14.9981L10.4302 9.42811L10.3756 9.37877C10.0973 9.15213 9.68704 9.16846 9.42775 9.42775C9.15104 9.70447 9.15104 10.1531 9.42775 10.4298L14.9981 16.0002L9.42811 21.5703L9.37878 21.6248C9.15213 21.9031 9.16846 22.3134 9.42775 22.5727C9.70447 22.8494 10.1531 22.8494 10.4298 22.5727L16.0002 17.0023L21.5702 22.5723L21.6248 22.6217C21.9031 22.8483 22.3134 22.832 22.5727 22.5727C22.8494 22.296 22.8494 21.8473 22.5727 21.5706L17.0023 16.0002L22.5723 10.4302L22.6217 10.3756C22.8483 10.0973 22.832 9.68704 22.5727 9.42775Z'
        fill='#666666'
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

