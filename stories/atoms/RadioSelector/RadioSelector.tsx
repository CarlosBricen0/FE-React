import React from 'react'
import classNames from 'classnames'
import styles from './RadioSelector.module.css'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'

export type TypeRadio = 'green'

export interface RadioSelectorProps extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  checked?: boolean;
  customClassName?: string;
  disabled?: boolean;
  isStoreLocator?: boolean;
  nameIcon?: keyof (typeof Icons);
  type?: TypeRadio;
  value?: string;
  onClick?: () => void;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioSelector = React.forwardRef(function RadioSelector({
  checked,
  customClassName,
  disabled = false,
  isStoreLocator = false,
  nameIcon,
  type,
  value,
  onClick,
  ...props
}: RadioSelectorProps, ref?: React.LegacyRef<HTMLInputElement>): React.ReactElement<RadioSelectorProps>{

  return (
    <div className={classNames(styles.container, customClassName)} onClick={onClick}>
      <input 
        checked={checked}
        className={classNames({[styles[`radio__${type}`]]: type})}
        disabled={disabled}
        ref={ref}
        role='radio'
        type='radio'
        value={value}
        {...props}
        readOnly
      />
    </div>
  )
})