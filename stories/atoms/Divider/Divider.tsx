import React from 'react'
import classNames from 'classnames'
import styles from './divider.module.css'
import { getGlobalStyle } from '../../../helpers'

export interface DividerProps {
  width?: number;
  verticalMargin?: number;
  thickness?: 0 | 1 | 2 | 3;
  color?: string;
}

export const Divider = ({
  thickness = 1,
  width = 100,
  verticalMargin = 20,
  color = getGlobalStyle('--color-neutral-gray-silver')
}: DividerProps): React.ReactElement<DividerProps> => {
  return (
    <div className={classNames(styles.divider)}>
      <hr
        className={classNames(styles.divider, {
          [styles[`divider--thickness-${thickness}`]]: thickness
        })}
        style={{
          width: `${width}%`,
          margin: `${verticalMargin}px 0`,
          borderColor: `${color}`
        }}
      />
    </div>
  )
}
