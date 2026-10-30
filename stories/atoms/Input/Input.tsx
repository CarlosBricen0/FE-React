import React from 'react'
import classNames from 'classnames'

import styles from './Input.module.css'
import { getGlobalStyle } from '../../../helpers/getGlobalStyle'

type FontSize = 'base' | 'xs' | 'sm' | 'md' | 'lg'
type TextAlign = 'left' | 'center' | 'right' | 'justify'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  unstyled?: boolean;
  adornmentStyle?: object;
  adornmentText?: string;
  autoFocus?: boolean;
  background?: string;
  border?: 'quantityButton';
  borderRadius?: string;
  color?: string;
  customClassName?: string;
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  fontSize?: FontSize;
  fontWeight?: 'regular' | 'semibold' | 'medium' | 'bold'
  height?: string | number;
  id?: string;
  inputMode?: 'none' | 'search' | 'text' | 'numeric' | 'tel' | 'url' | 'email' | 'decimal';
  margin?: string;
  maxWidth?: string;
  padding?: string;
  placeholderColor?: string;
  placeholderFocus?: string;
  textAlign?: TextAlign;
  title?: string;
  type?: string;
  width?: string | number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input = React.forwardRef(function Input({
  unstyled = false,
  adornmentStyle,
  adornmentText,
  autoFocus = false,
  background = getGlobalStyle('--color-base-white'),
  border,
  borderRadius = 'initial',
  color = 'initial',
  customClassName,
  defaultValue,
  disabled = false,
  fontSize = 'base',
  fontWeight = 'regular',
  height = 'auto',
  id,
  inputMode,
  margin,
  maxWidth,
  padding,
  placeholderColor,
  placeholderFocus = '',
  textAlign,
  title,
  type,
  width = 'auto',
  onKeyPress,
  ...props
}: InputProps, ref?: React.LegacyRef<HTMLInputElement>): React.ReactElement<InputProps> {

  return (
    <>
      <input
        autoFocus={autoFocus}
        className={classNames(
          !unstyled && styles.input,
          !unstyled && [styles[`font--weight--${fontWeight}`]], !unstyled && {
            [styles[`font--size--${fontSize}`]]: fontSize,
            [styles[`input--${placeholderFocus}`]]: placeholderFocus,
            [styles[`border--quantityButton`]]: border === 'quantityButton',
            [styles[`padding--newsletter`]]: padding === 'newsletter',
            [styles[`padding-attachment-page`]]: padding === 'attachment-page',
            [styles[`input--placeholder--${placeholderColor}`]]: placeholderColor
          }, customClassName)}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        inputMode={inputMode}
        onKeyPress={onKeyPress}
        ref={ref}
        style={unstyled ? props.style : {
          background,
          borderRadius,
          height,
          textAlign,
          width,
          color,
          maxWidth,
          margin
        }}
        title={title}
        type={type}
        {...props}
      />
      {adornmentText && (
        <div
          style={{
            background,
            borderRadius,
            height,
            textAlign,
            width,
            color,
            maxWidth,
            ...adornmentStyle
          }}
        >
          <span>{adornmentText}</span>
        </div>
      )}
    </>
  )
})
