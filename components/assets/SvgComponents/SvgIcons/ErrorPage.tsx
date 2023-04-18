import React from 'react'
import { SvgComponentProps } from '.'

export const ErrorPage = ({
  color,
  sizemap
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 129 129'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='64.5'
        cy='64.5'
        fill={color || '#FFF4F4'}
        r='64.5'
      />
      <circle
        cx='64.5'
        cy='64.5'
        fill={color || '#C00000'}
        opacity='0.1'
        r='51.5'
      />
      <path
        clipRule='evenodd'
        d='M61.4 49.2C61.4 47.2118 63.0118 45.6 65 45.6C66.9882 45.6 68.6 47.2118 68.6 49.2V67.6C68.6 69.5882 66.9882 71.2 65 71.2C63.0118 71.2 61.4 69.5882 61.4 67.6V49.2Z'
        fill='white'
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M60.6 78.8C60.6 76.3699 62.5699 74.4 65 74.4C67.4301 74.4 69.4 76.3699 69.4 78.8C69.4 81.2301 67.4301 83.2 65 83.2C62.5699 83.2 60.6 81.2301 60.6 78.8Z'
        fill='white'
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M33 64C33 46.3269 47.3269 32 65 32C82.6731 32 97 46.3269 97 64C97 81.6731 82.6731 96 65 96C47.3269 96 33 81.6731 33 64ZM65 37.6491C50.4468 37.6491 38.6491 49.4468 38.6491 64C38.6491 78.5532 50.4468 90.3509 65 90.3509C79.5532 90.3509 91.3509 78.5532 91.3509 64C91.3509 49.4468 79.5532 37.6491 65 37.6491Z'
        fill='white'
        fillRule='evenodd'
      />
    </svg>
  )
}