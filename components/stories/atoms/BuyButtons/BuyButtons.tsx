import React from 'react'
import classNames from 'classnames'

import styles from './BuyButtons.module.css'
import { Icon } from '..'

export interface BuyButtonsProps {
  disabled?: boolean;
  id?: string;
  site?: 'unimarc' | 'alvi';
  size?: 'md' | 'sm';
  title?: string;
  type?: 'left' | 'right';
  onClick?: () => void;
}

const siteStyles = (site: 'unimarc' | 'alvi', type: string, size: string) => {
  if (site === 'unimarc') {
    return [styles.quantity__button, {
      [styles[`quantity__button--${type}`]]: type
    }]
  }

  return [styles[`quantity__button_${site}`],
    {
      [styles[`quantity__button_${site}--${type}`]]: site && type,
      [styles[`quantity__button_${site}_${size}`]]: site && size,
      [styles[`quantity__button_${site}_${size}--${type}`]]: site && size && type
    }
  ]
}

export const BuyButtons = ({
  disabled = false,
  id,
  site = 'unimarc',
  size = 'md',
  title,
  type = 'left',
  onClick
}: BuyButtonsProps): React.ReactElement<BuyButtonsProps> => {
  const nameIcon = type == 'left' ? 'Minus' : 'Plus'

  return (
    <button
      className={classNames(...siteStyles(site, type, size))}
      disabled={disabled}
      id={id}
      onClick={onClick}
      title={title}
    >
      <Icon name={nameIcon} />
    </button>
  )
}
