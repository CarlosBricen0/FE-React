import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const AlviAlertIcon = ({
  color = getGlobalStyle('--color-text-warning'),
  sizemap = 32,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={sizemap}
      viewBox='0 0 32 32'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 12V18.6667'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 28.5468H7.91995C3.29328 28.5468 1.35995 25.2401 3.59995 21.2001L7.75995 13.7068L11.68 6.66679C14.0533 2.38679 17.9466 2.38679 20.32 6.66679L24.24 13.7201L28.3999 21.2135C30.6399 25.2535 28.6933 28.5601 24.0799 28.5601H16V28.5468Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.9927 22.6667H16.0047'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}
