import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import styles from './Text.module.css'

export type Color =
  'primary' |
  'secondary' |
  'gray' |
  'inactive' |
  'black' |
  'white' |
  'success' |
  'error' |
  'warning' |
  'tabasco' |
  'guardsman-red' |
  'blue' |
  'blue2' |
  'neutral' |
  'neutral-alvi' |
  'neutral-dark' |
  'neutral-black' |
  'gray-light' |
  'secondary-blue' |
  'primary-green' |
  'primary-green-light' |
  'grayNeutral';

export type FontSize =
  'base' |
  '2xs' |
  'xs' |
  'sm' |
  'md' |
  'lg' |
  'xl' |
  '2xl' |
  '3xl' |
  '5xl' |
  '6xl' |
  '9xl' |
  '10xl';

export interface TextProps {
  children: React.ReactNode;
  clickable?: string;
  color?: Color;
  customClassName?: string;
  customColor?: string;
  fontFamily?: string;
  fontSize?: FontSize;
  fontWeight?: 'regular' | 'semibold' | 'medium' | 'bold';
  htmlFor?: string;
  isFlex?: boolean;
  letterSpacing?: CSSProperties['letterSpacing'];
  lineClamp?: number;
  lineHeight?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textDecorationLine?: CSSProperties['textDecorationLine'];
  textOverflow?: CSSProperties['textOverflow']
  textTransform?: CSSProperties['textTransform'];
  truncate?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | number;
  type?: 'p' | 'span' | 'div' | 'label' | 'b';
  underline?: 'none' | 'hover' | 'always' | 'line-through';
  onClick?: () => void;
}

const truncateString = (children: React.ReactNode, trunk: number): string => {
  if (!children) return ''
  const count = children.toString().length
  const dot = count > trunk ? '...' : ''
  return children.toString().substring(0, trunk) + dot
}

export const Text = ({
  children,
  clickable = 'auto',
  color = 'black',
  customClassName,
  customColor,
  fontFamily,
  fontSize = 'base',
  fontWeight = 'regular',
  htmlFor,
  isFlex = true,
  letterSpacing,
  lineClamp,
  lineHeight,
  textAlign = 'left',
  textDecorationLine,
  textOverflow,
  textTransform,
  truncate,
  type = 'p',
  underline = 'none',
  onClick,
  ...props
}: TextProps): React.ReactElement => {
  return React.createElement(
    type,
    {
      className: classNames(styles.text, customClassName, {
        [styles[`text--${textAlign}`]]: textAlign,
        [styles[`text--flex`]]: isFlex,
        [styles[`text--${fontWeight}`]]: fontWeight,
        [styles['text--bold']]: fontWeight == 'bold' || type === 'b',
        [styles[`text--${fontSize}`]]: fontSize,
        [styles[`text--${color}`]]: color,
        [styles[`text__cursor--${clickable}`]]: clickable,
        [styles[`text--${underline}`]]: underline,
        [styles[`text--line-clamp`]]: lineClamp
      }),
      onClick,
      style: {
        color: customColor,
        fontFamily,
        letterSpacing,
        lineHeight,
        textDecorationLine,
        textOverflow,
        textTransform,
        WebkitLineClamp: lineClamp
      },
      htmlFor,
      ...props
    },
    typeof truncate === 'number' ? truncateString(children, truncate) : children
  )
}

export default Text