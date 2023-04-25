import React from 'react'
import classNames from 'classnames'

import styles from './Input.module.css'
import { getGlobalStyle } from '../../../helpers'

type FontSize = 'base' | 'xs' | 'sm' | 'md' | 'lg'
type TextAlign = 'left' | 'center' | 'right' | 'justify'

export interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  adornmentStyle?: object;
  adornmentText?: string;
  autoFocus?: boolean;
  background?: string;
  border?: 'quantityButton';
  borderRadius?: string;
  color?: string;
  customClassName?: string;
  defaultValue?: string;
  disabled?: boolean;
  fontSize?: FontSize;
  fontWeight?: 'regular' | 'semibold' | 'medium' | 'bold'
  height?: string;
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
  width?: string;
  onBlur?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef(function Input({
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
          styles.input,
          [styles[`font--weight--${fontWeight}`]], {
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
        style={{
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
