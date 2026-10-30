import classNames from 'classnames'
import React, { createElement, CSSProperties } from 'react'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import styles from './Button.module.css'
import { Icon } from '../Icon/Icon'
import type { TextProps } from '../Text/Text'

export type ButtonStatus = 'initial' | 'loading' | 'disabled' | 'disabled-red';
export type Size = 'xs' | 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "onClick" | "onMouseEnter" | "onMouseLeave"> {
  unstyled?: boolean;
  actionType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  background?: string;
  border?: CSSProperties['border'];
  borderRadius?: string;
  buttonRef?: React.Ref<HTMLButtonElement>;
  color: string;
  customClassName?: string;
  fontSize?: string;
  fontWeight?: string;
  fullWidth?: true | false;
  height?: string;
  id?: string;
  label?: string;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: CSSProperties['padding'];
  size?: Size;
  status?: ButtonStatus;
  underline?: TextProps['underline'];
  width?: string;
  iconName?: keyof (typeof Icons);
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

interface LabelButtonProps {
  color: string;
  iconName?: keyof (typeof Icons);
  customClassName?:string;
  label: string;
  status: string;
}

export const Button = ({
  unstyled = false,
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
  children,
  className,
  disabled,
  type,
  margin,
  maxWidth,
  minWidth = '200px',
  padding,
  size = 'medium',
  status = 'initial',
  underline = 'none',
  width = 'auto',
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...nativeProps
}: ButtonProps): React.ReactElement<ButtonProps> => {

  

  return (
    <button
      {...nativeProps}
      aria-label={nativeProps['aria-label'] || label}
      className={classNames(!unstyled && styles.button, customClassName, className, !unstyled && {
        [styles[`button--${size}`]]: size,
        [styles[`button--${status}`]]: status,
        [styles[`button--${underline}`]]: underline,
        [styles[`button--fullwidth`]]: fullWidth,
        [styles[`button--icon`]]: iconName && status !== 'loading'
      })}
      disabled={disabled || status === 'disabled' || status === 'disabled-red' || status === 'loading'}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={buttonRef}
      style={unstyled ? nativeProps.style : {
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
      type={actionType || type || "button"}
    >
      {children && status !== "loading" ? children : <GetLabelButton
        color={color}
        customClassName={styles.icon}
        iconName={iconName}
        label={label || ""}
        status={status}
      />}
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
