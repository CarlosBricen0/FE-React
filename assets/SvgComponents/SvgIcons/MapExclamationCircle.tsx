import React from 'react'
import { SvgComponentProps } from '.'
import { getGlobalStyle } from '../../../helpers'

export const MapExclamationCircle = ({
  color = getGlobalStyle('--color-background-primary'),
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill='none'
      height={sizemap}
      viewBox='0 0 134 134'
      width={sizemap}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='67'
        cy='67'
        fill={color}
        opacity='0.1'
        r='67'
      />
      <circle
        cx='67'
        cy='67'
        fill={color}
        opacity='0.1'
        r='54'
      />
      <path d='M76.8039 89.0022C75.8401 89.0022 74.8763 88.8179 74.0918 88.4696L62.3246 83.0819C61.6522 82.7746 60.3298 82.7951 59.6798 83.1433L54.3902 85.9089C52.104 87.0971 49.7506 87.2609 47.9799 86.2981C46.1868 85.3558 45.1782 83.4301 45.1782 81.0128V61.1007C45.1782 59.2365 46.523 57.1265 48.2937 56.2047L57.9988 51.1242C59.635 50.2638 62.1229 50.2024 63.8039 50.9808L75.5711 56.3685C76.2435 56.6758 77.5435 56.6349 78.2159 56.3071L83.4831 53.562C85.7693 52.3738 88.1227 52.21 89.8934 53.1728C91.6865 54.1151 92.6951 56.0408 92.6951 58.4581V78.3906C92.6951 80.2548 91.3503 82.3649 89.5796 83.2867L79.8745 88.3672C79.0228 88.7769 77.9021 89.0022 76.8039 89.0022ZM61.0919 79.8042C62.0557 79.8042 63.0195 79.9885 63.8039 80.3368L75.5711 85.7245C76.2435 86.0318 77.5435 85.9908 78.2159 85.6631L87.921 80.5826C88.6382 80.2139 89.3331 79.1076 89.3331 78.3702V58.4376C89.3331 57.147 88.9296 56.1842 88.19 55.8154C87.4727 55.4467 86.3521 55.5901 85.1417 56.2251L79.8745 58.9702C78.2383 59.8306 75.7504 59.8921 74.0694 59.1136L62.3022 53.7259C61.6298 53.4186 60.3298 53.4596 59.6574 53.7874L49.9523 58.8678C49.2351 59.2365 48.5403 60.3428 48.5403 61.1007V81.0333C48.5403 82.3239 48.9437 83.2867 49.6609 83.6555C50.3782 84.0447 51.4989 83.8808 52.7316 83.2458L57.9988 80.5007C58.8729 80.0295 59.9936 79.8042 61.0919 79.8042Z' fill='white' />
      <path d='M60.9125 81.5045C59.9935 81.5045 59.2314 80.808 59.2314 79.9681V53.3367C59.2314 52.4968 59.9935 51.8003 60.9125 51.8003C61.8314 51.8003 62.5935 52.4968 62.5935 53.3367V79.9681C62.5935 80.808 61.8314 81.5045 60.9125 81.5045Z' fill='white' />
      <path d='M76.9833 87.6502C76.0643 87.6502 75.3022 86.9536 75.3022 86.1137V58.7039C75.3022 57.864 76.0643 57.1675 76.9833 57.1675C77.9022 57.1675 78.6643 57.864 78.6643 58.7039V86.1137C78.6643 86.9536 77.9022 87.6502 76.9833 87.6502Z' fill='white' />
      <path
        d='M100 39V53.34'
        stroke='white'
        strokeLinecap='round'
        strokeWidth='3.5'
      />
      <path
        d='M100 61.5356V63.5842'
        stroke='white'
        strokeLinecap='round'
        strokeWidth='3.5'
      />
      <path
        d='M35 92.2622L35 77.9222'
        stroke='white'
        strokeLinecap='round'
        strokeWidth='3.5'
      />
      <path
        d='M35 69.7266L35 67.678'
        stroke='white'
        strokeLinecap='round'
        strokeWidth='3.5'
      />
    </svg>
  )
}