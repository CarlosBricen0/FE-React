import React from 'react'
import { SvgComponentProps } from '.'

export const Motorcycle = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill='none'
      height={`${sizemap}px`} 
      viewBox='0 0 28 28'
      width={`${sizemap}px`} 
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.714 7.09h6M1.714 9.662h3.712M1.714 12.233H4'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
      />
      <mask fill='#fff' id='a'>
        <rect
          height={4.286}
          rx={1}
          width={9.429}
          x={6.857}
          y={10.286}
        />
      </mask>
      <path
        d='M17.867 2.672 22 2.382a.4.4 0 0 1 .427.372l.219 3.135a.4.4 0 0 1-.371.427l-4.133.289a1.971 1.971 0 1 1-.275-3.933Z'
        stroke={color}
        strokeWidth={1.2}
      />
      <mask fill='#fff' id='b'>
        <path
          clipRule='evenodd'
          d='M25.357 21.21c.288-.077.477-.36.4-.65A4.714 4.714 0 0 0 16.648 23c.077.29.382.44.67.364l8.038-2.154Z'
          fillRule='evenodd'
        />
      </mask>
      <path
        d='M20.293 18.386a3.514 3.514 0 0 1 4.304 2.485l2.318-.621a5.914 5.914 0 0 0-7.243-4.182l.62 2.318Zm-2.485 4.304a3.514 3.514 0 0 1 2.485-4.304l-.621-2.318a5.914 5.914 0 0 0-4.182 7.243l2.318-.62Zm-.178 1.833 8.038-2.154-.622-2.318-8.037 2.154.62 2.318Zm-2.14-1.212c.27 1.011 1.296 1.438 2.14 1.212l-.621-2.319a.663.663 0 0 1 .799.486l-2.318.621Zm9.107-2.44a.663.663 0 0 1 .45-.82l.62 2.318c.844-.226 1.52-1.108 1.248-2.119l-2.318.621Z'
        fill={color}
        mask='url(#b)'
      />
      <path
        clipRule='evenodd'
        d='M17.514 18.845c-2.426-.124-3.8-1.18-3.8-2.56 0-.567.183-1.092.553-1.517.242-.279.564-.514.969-.692a2.999 2.999 0 0 0-1.429-.362h-2.399c-4.418 0-9.167 3.374-9.655 7.765a.95.95 0 0 0 .94 1.04h13.853a4.684 4.684 0 0 1-.052-1H2.754c.228-1.836 1.343-3.524 2.964-4.778 1.643-1.27 3.723-2.027 5.69-2.027h1.689a3.323 3.323 0 0 0-.382 1.572c0 1.14.622 2.076 1.588 2.683.703.443 1.595.72 2.621.832.158-.34.356-.662.59-.956ZM18.008 23.179a3.642 3.642 0 0 0 6.848-1.835l-1.004.27a2.643 2.643 0 0 1-4.84 1.296l-1.004.269Z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        d='m19.715 18-.858-11.143M24 18.624 21.43 6.43'
        stroke={color}
        strokeWidth={1.2}
      />
      <path
        d='m15.857 3.661-2.143-.857'
        stroke={color}
        strokeLinecap='round'
      />
      <path
        clipRule='evenodd'
        d='M4.383 22.286a3.644 3.644 0 0 0 7.092 0h-1.251a2.444 2.444 0 0 1-4.59 0H4.383Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}
