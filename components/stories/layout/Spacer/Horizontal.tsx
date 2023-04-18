import React from 'react'
import classNames from 'classnames'
import styles from './spacer.module.css'
import { getGlobalStyle } from '../../../helpers'

export type Sizes = 1 | 2 | 4 | 8 | 12 | 16 | 18 | 20 | 24 | 28 | 32 | 38 | 48 | 56 | 64 | 96 | 160;

interface HorizontalProps {
  className?: string;
  backgroundColor?: string;
  size?: Sizes;
  isVisible?: boolean;
}

export const Horizontal = ({
  backgroundColor = getGlobalStyle('--color-base-transparent'),
  className,
  size = 160,
  isVisible = false
}: HorizontalProps): React.ReactElement<HorizontalProps> => {
  return (
    <span
      className={classNames('spacer', {
        [styles['is-visible']]: isVisible
      }, className)}
      style={{
        backgroundColor,
        display: 'block',
        width: '100%',
        height: `${size}px`
      }}
    />
  )
}
