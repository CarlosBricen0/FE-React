import React from 'react'
import {
  Button,
  ButtonProps,
  Icon
} from '../../atoms'

export interface QuantityVariantButtonProps {
  buttonProps: ButtonProps
  disabled?: boolean
  onChange?: () => void
  onDecrease?: () => void
  onIncrease?: () => void
  value?: number | string
}

export const QuantityVariantButton = ({
  buttonProps,
  disabled,
  onDecrease,
  onIncrease,
  value
}: QuantityVariantButtonProps) => {
  function handleDecrease() {
    if (onDecrease) {
      onDecrease()
    }
  }

  function handleIncrease() {
    if (onIncrease) {
      onIncrease()
    }
  }

  return (
    <div style={{ display: 'inline-flex', maxWidth: 200, width: '100%' }}>
      <a onClick={handleDecrease} style={{ cursor: 'pointer', margin: '2px -32px 0 0', zIndex: 1, pointerEvents: disabled ? 'none' : 'initial' }}>
        <Icon customSize={30} name='MinusCircle' />
      </a>

      <div style={{ pointerEvents: 'none', width: '100%', userSelect: 'none' }}>
        <Button {...buttonProps} label={`${value} un`} />
      </div>

      <a onClick={handleIncrease} style={{ cursor: 'pointer', margin: '2px 0 0 -36px ', zIndex: 1, pointerEvents: disabled ? 'none' : 'initial' }}>
        <Icon customSize={30} name='PlusCircle' />
      </a>
    </div>
  )
}
