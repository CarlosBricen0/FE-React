import React from 'react'
import classNames from 'classnames'
import styles from './spacer.module.css'

interface VerticalProps {
  className?: string;
  size: 1 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 56 | 64 | 96 | 28 | 160;
  isVisible?: boolean;
}

export const Vertical = ({
  className,
  size = 160,
  isVisible = false
}: VerticalProps): React.ReactElement<VerticalProps> => {
  return (
    <span
      className={classNames('spacer', {
        [styles['is-visible']]: isVisible
      }, className)}
      style={{
        display: 'block',
        width: `${size}px`,
        height: '100%'
      }}
    />
  )
}