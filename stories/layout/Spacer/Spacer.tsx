import React from 'react'
import classNames from 'classnames'

import { Horizontal } from './Horizontal'
import { Vertical } from './Vertical'

import styles from './spacer.module.css'

interface SpacerProps {
  size: 1 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 56 | 64 | 96 | 28 | 160;
  isVisible?: boolean;
}

export const Spacer = ({
  size = 160,
  isVisible = false
}: SpacerProps): React.ReactElement<SpacerProps> => {
  return (
    <span
      className={classNames('spacer', {
        [styles['is-visible']]: isVisible
      })}
      style={{
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`
      }}
    />
  )
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical