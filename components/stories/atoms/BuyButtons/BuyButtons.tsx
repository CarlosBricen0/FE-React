import React from 'react'
import classNames from 'classnames'

import styles from './BuyButtons.module.css'
import { Icon } from '..'

export interface BuyButtonsProps {
  disabled?: boolean;
  id?: string;
  size?: 'md' | 'sm';
  title?: string;
  type?: 'left' | 'right';
  onClick?: () => void;
}

export const BuyButtons = ({
  disabled = false,
  id,
  size = 'md',
  title,
  type = 'left',
  onClick
}: BuyButtonsProps): React.ReactElement<BuyButtonsProps> => {
  const nameIcon = type == 'left' ? 'Minus' : 'Plus'

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      title={title}
    >
      <Icon name={nameIcon} />
    </button>
  )
}
