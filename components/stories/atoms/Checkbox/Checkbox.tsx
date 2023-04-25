import React from 'react'
import classNames from 'classnames'
import { Icon } from '..'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { IconProps } from '../Icon/Icon'
import { Site } from '../../../shared/interfaces/Site'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  clickable?: string;
  customClass?: string;
  iconColor?: string;
  id?: string;
  disabled?: boolean;
  nameIcon?: keyof (typeof Icons);
  site?: Site;
  sizeIcon?: IconProps['sizes'];
  title?: string;
  type?: 'checkbox' | 'round';
  value: boolean;
  onClick: () => void;
}

export const Checkbox = ({
  clickable = 'auto',
  customClass,
  disabled = false,
  iconColor,
  id,
  nameIcon = 'Close',
  sizeIcon= 'xs',
  title,
  type = 'checkbox',
  value = false,
  onClick
}: CheckboxProps): React.ReactElement => {

  return (
    <>
      <input
        checked={value}
        disabled={disabled}
        id={id || styles.checkbox}
        onChange={onClick}
        title={title}
        type='checkbox'
      />
      <label htmlFor={id || styles.checkbox}>
        <Icon
          clickable={clickable}
          color={iconColor}
          name={nameIcon}
          sizes={sizeIcon}
        />
      </label>
    </>
  )
}

export default Checkbox
