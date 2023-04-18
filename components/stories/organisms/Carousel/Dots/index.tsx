import React from 'react'
import classNames from 'classnames'
import styles from './dots.module.css'

interface DotsProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}

export const Dots = ({
  active,
  onClick
}: DotsProps) => {
  const className = active ? 'active' : 'inactive'

  return (
    <button
      className={classNames(
        className,
        styles['dots'],
        {
          [styles['dots--active']]: active
        }
      )}
      onClick={onClick}
    />
  )
}