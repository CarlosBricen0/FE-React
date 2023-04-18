import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowBackNavigate = ({
  color,
  sizemap,
  viewBox='0 0 8 16',
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox={viewBox}
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0.00192595 7.94197C0.0157898 7.75365 0.0942236 7.57527 0.2247 7.43532L6.48386 0.679994C6.69155 0.455579 7.00672 0.355848 7.31065 0.418373C7.61457 0.480899 7.86106 0.696181 7.95725 0.983114C8.05345 1.27005 7.98473 1.58503 7.77698 1.8094L2.03942 8.00003L7.77698 14.1906C7.98473 14.415 8.05345 14.73 7.95725 15.0169C7.86106 15.3039 7.61457 15.5192 7.31065 15.5817C7.00672 15.6442 6.69155 15.5445 6.48386 15.3201L0.2247 8.56473C0.0666448 8.39503 -0.0137474 8.1703 0.00192595 7.94197V7.94197Z' fill={color} />
    </svg>
  )
}