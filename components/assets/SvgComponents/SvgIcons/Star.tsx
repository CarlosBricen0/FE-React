import React from 'react'
import { SvgComponentProps } from '.'

export const Star = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 8 9'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.61958 1.17082C3.73932 0.802296 4.26068 0.802296 4.38042 1.17082L5.03276 3.17852C5.08631 3.34333 5.2399 3.45492 5.41319 3.45492H7.52421C7.9117 3.45492 8.07281 3.95076 7.75932 4.17852L6.05147 5.41935C5.91128 5.52121 5.85261 5.70175 5.90616 5.86656L6.5585 7.87427C6.67824 8.24279 6.25645 8.54924 5.94297 8.32148L4.23511 7.08065C4.09492 6.97879 3.90508 6.97879 3.76489 7.08065L2.05703 8.32148C1.74355 8.54924 1.32176 8.24279 1.4415 7.87426L2.09384 5.86656C2.14739 5.70175 2.08872 5.52121 1.94853 5.41935L0.240677 4.17852C-0.0728089 3.95076 0.0883014 3.45492 0.475791 3.45492H2.58681C2.7601 3.45492 2.91369 3.34333 2.96724 3.17852L3.61958 1.17082Z'
        fill={color}
      />
    </svg>
  )
}
