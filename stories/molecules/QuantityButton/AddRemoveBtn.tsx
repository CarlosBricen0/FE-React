import React from 'react'
import { getGlobalStyle } from '../../../helpers'
import { Icon } from '../../atoms'
import styles from './QuantityButton.module.css'

export interface CircleStyleProps {
  iconColor: string;
  sizeButton?: string;
  sizeCircle?: number
}

interface AddOrRemoveProps {
  alternativeBackground?: string;
  circleStyle?: CircleStyleProps,
  disabled: boolean;
  type: 'right' | 'left';
  handleShake: (props?: unknown) => void;
  handleQuantity: (props?: unknown) => void;
}

export const AddOrRemoveBtn = ({
  circleStyle = {
    iconColor: getGlobalStyle('--color-primary-red'),
    sizeButton: '35px',
    sizeCircle: 25
  },
  alternativeBackground,
  disabled,
  type,
  handleShake,
  handleQuantity
}: AddOrRemoveProps) => {
  const iconName = type === 'right' ? 'PlusCircle' : 'MinusCircle'
  const iconColor = disabled ? getGlobalStyle('--color-primary-disabled') : circleStyle.iconColor

  return (
    <button
      aria-label={type}
      onClick={disabled ? handleShake : handleQuantity}
      style={{
        background: alternativeBackground,
        borderRadius: circleStyle.sizeButton,
        width: circleStyle.sizeButton,
        height: circleStyle.sizeButton
      }}
      type='button'
    >
      <div
        className={styles['quantityBtn--circle']}
        style={{
          height: circleStyle.sizeButton,
          width: circleStyle.sizeButton
        }}
      >
        <Icon
          clickable='pointer'
          color={iconColor}
          customSize={circleStyle.sizeCircle}
          name={iconName}
          viewBox='0 0 22 22'
        />
      </div>
    </button>
  )
}
