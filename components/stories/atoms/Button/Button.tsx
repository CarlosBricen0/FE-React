import classNames from 'classnames'
import React, { createElement, CSSProperties } from 'react'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { getGlobalStyle } from '../../../helpers'
import styles from './Button.module.css'
import { Icon } from '../Icon/Icon'
import { Text } from '../'

export type ButtonStatus = 'initial' | 'loading' | 'disabled' | 'disabled-red';
export type Type = 'primary' | 'secondary' | 'primary-ca' | 'secondary-ca' | 'sub-category' | 'plain' | 'semibold' | 'primary-alvi' | 'primary-out-hover' | 'primary-green' | 'secondary-green'
export type Size = 'xs' | 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  actionType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  background?: string;
  border?: CSSProperties['border'];
  borderRadius?: string;
  buttonRef?: React.Ref<HTMLButtonElement>;
  color?: string;
  customClassName?: string;
  fontSize?: string;
  fontWeight?: string;
  fullWidth?: true | false;
  height?: string;
  id?: string;
  label: string;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: CSSProperties['padding'];
  site?: Site;
  size?: Size;
  status?: ButtonStatus;
  type?: Type;
  underline?: typeof Text.arguments.underline;
  width?: string;
  iconName?: keyof (typeof Icons);
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface LabelButtonProps {
  color: string;
  iconName?: keyof (typeof Icons);
  customClassName?:string;
  label: string;
  status: string;
}

const brandWhite = getGlobalStyle('--color-base-white')

const typeColors = {
  primary: brandWhite,
  secondary: getGlobalStyle('--color-primary-red'),
  'primary-ca': brandWhite,
  'secondary-ca': getGlobalStyle('--color-secondary-blue'),
  'sub-category': brandWhite
}

const typedColorsAlvi = {
  'primary': brandWhite,
  'secondary': getGlobalStyle('--color-neutral-gray-dark')
}

export const Button = ({
  actionType,
  background,
  border,
  borderRadius,
  buttonRef,
  color,
  customClassName,
  fontSize,
  fontWeight,
  fullWidth = false,
  height,
  iconName,
  id,
  label,
  margin,
  maxWidth,
  minWidth = '200px',
  padding,
  site = 'unimarc',
  size = 'medium',
  status = 'initial',
  type = 'primary',
  underline = 'none',
  width = 'auto',
  onClick,
  onMouseEnter,
  onMouseLeave
}: ButtonProps): React.ReactElement<ButtonProps> => {

  const classSite = site === 'alvi' ? styles[`button__alvi__${type}`] : ''
  const fontColor = site === 'alvi' ? typedColorsAlvi[type] : typeColors[type]

  return (
    <button
      aria-label={label}
      className={classNames(styles.button, customClassName, classSite, {
        [styles[`button__${type}`]]: type,
        [styles[`button--${size}`]]: size,
        [styles[`button--${status}`]]: status,
        [styles[`button--${underline}`]]: underline,
        [styles[`button--fullwidth`]]: fullWidth,
        [styles[`button--icon`]]: iconName && status !== 'loading'
      })}
      disabled={status === 'disabled' || status === 'disabled-red' || status === 'loading'}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={buttonRef}
      style={{
        background,
        border,
        borderRadius,
        color,
        fontSize,
        fontWeight,
        height,
        margin,
        maxWidth,
        minWidth,
        padding,
        width
      }}
      type={actionType}
    >
      <GetLabelButton
        color={fontColor}
        customClassName={styles.icon}
        iconName={iconName}
        label={label}
        status={status}
      />
    </button>
  )
}

const GetLabelButton = ({
  color,
  iconName,
  label,
  status
}: LabelButtonProps): React.ReactElement => {
  if (status === 'initial' || status === 'disabled' || status === 'disabled-red') {
    if(iconName){
      return (
        <>
          <label>{label}</label>
          <Icon
            clickable='pointer'
            color='white'
            customSize={20}
            name={iconName}
          />
        </>
      )
    }
    return <>{label}</>
  }

  return (createElement(getComponent(Icons)('Loading'), { color, sizemap: 22 }))
}

const getComponent = <T, U extends keyof T>(obj: T) => {
  return (
    key: U
  ) => { return obj[key] }
}
