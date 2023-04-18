import React from 'react'
import { SvgComponentProps } from '.'

export const ArrowRightNavigate = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={`${sizemap}px`}
      viewBox='0 0 8 16'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7.99807 7.94234C7.98421 7.75401 7.90578 7.57563 7.7753 7.43569L1.51614 0.68036C1.30845 0.455945 0.993275 0.356214 0.689352 0.41874C0.385429 0.481265 0.13894 0.696547 0.0427469 0.98348C-0.0534459 1.27041 0.0152743 1.5854 0.223018 1.80977L5.96058 8.0004L0.223018 14.191C0.0152743 14.4154 -0.0534459 14.7304 0.0427469 15.0173C0.13894 15.3042 0.385429 15.5195 0.689352 15.582C0.993275 15.6446 1.30845 15.5448 1.51614 15.3204L7.7753 8.56509C7.93336 8.3954 8.01375 8.17067 7.99807 7.94234V7.94234Z' fill={color} />
    </svg>
  )
}