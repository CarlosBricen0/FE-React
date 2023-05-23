import React, { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './Tooltip.module.css'
import {
  Column,
  Row,
  Spacer,
  Container
} from '../../layout'
import { Icon } from '../Icon/Icon'
import { getGlobalStyle } from '../../../helpers'
import Text, { FontSize } from '../Text/Text'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'

type Align = 'start' | 'center' | 'end'
type SizeArrow = 'xs' | '2sm' | 'sm'
type ColorArrow = 'white' | 'black' | 'warning-light'
type ColorText = 'white' | 'black'
type ColorTitle = 'white' | 'black'
type Position = 'absolute' | 'relative' | 'fixed' | 'initial' | 'sticky'
type Type = 'top' | 'bottom' | 'left' | 'right'
type TextWeight = 'none' | 'hairline' | 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

export interface TooltipProps {
  align?: Align;
  alignAllItems?: Align;
  append?: ReactNode
  arrow?: boolean;
  background?: string;
  borderRadius?: string;
  bottom?: string;
  boxShadow?: string;
  closeColor?: string;
  closeIcon?: boolean;
  colorArrow?: ColorArrow;
  colorText?: ColorText;
  colorTitle?: ColorTitle;
  containerProps?: ChildrenBaseContainerProps;
  customClassName?: string;
  height?: string;
  left?: string;
  margin?: string;
  maxWidth?: string;
  padding?: string;
  position?: Position;
  positionContainer?: Position;
  right?: string;
  sizeArrow?: SizeArrow;
  sizeCloseIcon?: number;
  text?: string;
  textComponent?: React.ReactElement
  textSize?: FontSize;
  textWeight?: TextWeight;
  title?: string;
  titleSize?: FontSize;
  titleWeight?: TextWeight;
  top?: string;
  type?: Type;
  width?: string;
  onClick?: () => void;
}

export const Tooltip = ({
  align = 'center',
  alignAllItems = 'start',
  append,
  arrow = false,
  background,
  borderRadius,
  bottom,
  boxShadow,
  closeColor = getGlobalStyle('--color-base-white'),
  closeIcon = false,
  colorArrow,
  colorText,
  colorTitle,
  containerProps,
  customClassName,
  height,
  left,
  margin,
  maxWidth,
  padding,
  position = 'absolute',
  positionContainer = 'initial',
  right,
  sizeArrow = 'sm',
  sizeCloseIcon,
  text,
  textComponent = null,
  textSize,
  textWeight,
  title,
  titleSize,
  titleWeight,
  top,
  type,
  width,
  onClick,
  ...props
}: TooltipProps): React.ReactElement => {

  return (
    <Row
      {...containerProps}
      justifyContent='center'
      position={positionContainer}
    >
      <Column
        {...props}
        className={classNames(styles.container, customClassName)}
        onClick={onClick}
        style={{
          background,
          borderRadius,
          bottom,
          boxShadow,
          height,
          left,
          margin,
          maxWidth,
          padding,
          position,
          right,
          top,
          width
        }}
      >
        <Row justifyContent='center' >
          <Row alignItems={alignAllItems} justifyContent='around'>
            {/* Texts */}
            <Column>
              {
                title && (
                  <>
                    <Text
                      customClassName={classNames(styles.title, {
                        [styles[`color--${colorTitle}`]]: colorTitle,
                        [styles[`align--${align}`]]: align,
                        [styles[`text-size--${titleSize}`]]: titleSize,
                        [styles[`text-weight--${titleWeight}`]]: titleWeight
                      })}
                    >
                      {title}
                    </Text>
                    <Spacer.Horizontal size={8} />
                  </>
                )
              }
              {/* in here we render a React.ReactElement his default value its null */}
              {
                textComponent
              }
              {
                !textComponent && (
                  <Text
                    customClassName={classNames(styles.paragraph, {
                      [styles[`color--${colorText}`]]: colorText,
                      [styles[`align--${align}`]]: align,
                      [styles[`text-size--${textSize}`]]: textSize,
                      [styles[`text-weight--${textWeight}`]]: textWeight
                    })}
                  >
                    {text}
                  </Text>
                )
              }
            </Column>
            {
              closeIcon && (
                <Icon
                  clickable='pointer'
                  color={closeColor}
                  customSize={sizeCloseIcon}
                  name='Close'
                  onClick={onClick}
                />
              )
            }
          </Row>
        </Row>
        {
          arrow && (
            <Container
              aria-label='arrow'
              className={classNames(styles.arrow, {
                [styles[`arrow--${type}`]]: type,
                [styles[`color-arrow--${colorArrow}`]]: colorArrow,
                [styles[`size-arrow--${sizeArrow}`]]: sizeArrow
              })}
            />
          )
        }
        { append }
      </Column>
    </Row>
  )
}
