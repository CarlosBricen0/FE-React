import React from 'react'
import classNames from 'classnames'
import styles from './title.module.css'
import { getGlobalStyle } from '../../../helpers'

type FontWeight = 'regular' | 'normal' | 'semibold' | 'medium' | 'bold';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface TitleProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  color?: string;
  customClassName?: string;
  customFontSize?: string;
  customHeight?: string;
  fontWeight?: FontWeight;
  headingLevel?: HeadingLevel;
  size?: 'large' | 'small';
  text?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const Title = ({
  backgroundColor,
  children,
  color = getGlobalStyle('--color-base-black'),
  customClassName,
  customFontSize,
  customHeight = 'auto',
  fontWeight = 'regular',
  headingLevel = 'h1',
  size = 'large',
  text,
  textAlign = 'left'
}: TitleProps): React.ReactElement => {
  const isCustom = customFontSize || customHeight
  return React.createElement(
    headingLevel,
    {
      className: classNames(styles.title, customClassName, {
        [styles[`title__${headingLevel}`]]: headingLevel,
        [styles[`title--${textAlign}`]]: headingLevel && textAlign,
        [styles[`title--${fontWeight}`]]: headingLevel && fontWeight,
        [styles[`title--${size}]`]]: headingLevel && size && !isCustom
      }),
      style: {
        color,
        backgroundColor,
        fontSize: customFontSize,
        fontHeight: customHeight
      }
    },
    children || text
  )
}
