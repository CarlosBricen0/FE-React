import React from 'react'
import classNames from 'classnames'
import { Icon } from '../Icon/Icon'
import styles from './RadioSelector.module.css'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { getGlobalStyle } from '../../../helpers'

export type TypeRadio = 'green'

export interface RadioSelectorProps extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  checked?: boolean;
  customClassName?: string;
  disabled?: boolean;
  isStoreLocator?: boolean;
  nameIcon?: keyof (typeof Icons);
  site?: 'alvi' | 'unimarc';
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
  site = 'unimarc',
  type,
  value,
  onClick,
  ...props
}: RadioSelectorProps, ref?: React.LegacyRef<HTMLInputElement>): React.ReactElement<RadioSelectorProps>{

  const classes = site === 'alvi' ? styles.radio__alvi : styles.radio

  return (
    <div className={classNames(styles.container, customClassName)} onClick={onClick}>
      <input 
        checked={checked}
        className={classNames(classes,{[styles[`radio__${type}`]]: type})}
        disabled={disabled}
        ref={ref}
        role='radio'
        type='radio'
        value={value}
        {...props}
        readOnly
      />
      { (isStoreLocator && site === 'alvi') ? 
        <Icon
          color={getGlobalStyle('--color-alvi-neutral-gray-light')}
          customSize={45}
          name={nameIcon}
          site='alvi'
        /> 
        :
        <label htmlFor={styles.radio}></label>
      }
    </div>
  )
})