import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import styles from './baseContainer.module.css'

type AbsoluteDefault = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
export type AlignItems = 'center' | 'start' | 'end' | 'baseline' | 'stretch'
type BorderEdge = 'none' | 'right' | 'left' | 'all' | 'bottom'
export type JustifyContent = 'center' | 'start' | 'end' | 'between' | 'around'
type Overflow = 'scroll' | 'hidden' | 'auto' | 'visible'
export type Position = 'initial' | 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky'
type TagName = 'body' | 'header' | 'footer' | 'main' | 'section' | 'aside' | 'div' | string

export interface BaseContainerProps extends React.HTMLProps<HTMLDivElement> {
  absoluteDefault?: AbsoluteDefault;
  alignItems?: AlignItems;
  alignSelf?: AlignItems;
  background?: string;
  backgroundColor?: string;
  block?: boolean;
  border?: string;
  borderColor?: string;
  borderEdge?: BorderEdge;
  borderRadius?: string;
  boxShadow?: string;
  boxSizing?: 'border-box' | 'content-box'
  children?: React.ReactNode;
  clickable?: string;
  customClassName?: string;
  customHeight?: string;
  customWidth?: string;
  flexDirection?: 'row' | 'column' | false;
  gap?: CSSProperties['gap'];
  grid?: boolean;
  gridTemplateColumns?: number;
  hidden?: boolean;
  isPlayground?: boolean;
  isWrap?: boolean;
  justifyContent?: JustifyContent;
  left?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  overflow?: Overflow;
  padding?: string;
  position?: Position;
  role?: string;
  scrollbarHidden?: boolean;
  tagName?: TagName;
  top?: string;
  touchAction?: CSSProperties['touchAction'];
  visibility?: CSSProperties['visibility'];
  zIndex?: string;
  val?: boolean | (() => void);
  onClick?: (e?: unknown) => void;
  onBlur?: (e?: unknown) => void;
}

export type ChildrenBaseContainerProps = Omit<BaseContainerProps, 'flexDirection' | 'ref'>

export const BaseContainer = React.forwardRef(function BaseContainer({
  absoluteDefault = 'topLeft',
  alignItems = 'center',
  alignSelf,
  background,
  backgroundColor,
  block = false,
  border,
  borderEdge = 'none',
  borderRadius,
  borderColor= 'none',
  boxShadow,
  boxSizing,
  children,
  clickable = 'auto',
  customClassName,
  customHeight = 'auto',
  customWidth = '100',
  flexDirection,
  gap,
  grid,
  gridTemplateColumns,
  hidden,
  isPlayground = false,
  isWrap = false,
  justifyContent = 'center',
  left,
  margin,
  maxHeight = 'initial',
  maxWidth = 'initial',
  minHeight = 'initial',
  minWidth = 'initial',
  overflow,
  padding,
  position = 'initial',
  role = '',
  scrollbarHidden,
  tagName = 'div',
  top,
  touchAction,
  visibility,
  zIndex,
  onClick = () => { return null },
  ...props
}: BaseContainerProps, ref): React.ReactElement {
  const currentWidth = props.width ?? (/max-/.test(customWidth) ? 'max-content' : `${customWidth}%`)
  const currentPosition = position && top ? `${top}px` : ''
  return React.createElement(
    tagName,
    {
      className: classNames(styles.container, customClassName, {
        [styles['is-playground']]: isPlayground,
        [styles['is-wrap']]: isWrap,
        [styles[`justify-${justifyContent}`]]: justifyContent,
        [styles[`align-${alignItems}`]]: alignItems,
        [styles[`flex-direction--${flexDirection}`]]: flexDirection,
        [styles[`border-edge--${borderEdge}`]]: borderEdge,
        [styles[`absolute-default--${absoluteDefault}`]]: absoluteDefault,
        [styles[`overflow--${overflow}`]]: overflow,
        [styles['display--block']]: block,
        [styles['display--grid']]: grid,
        [styles['display--none']]: hidden,
        [styles['scrollbar--hidden']]: scrollbarHidden
      }),
      style: {
        alignSelf,
        background,
        backgroundColor,
        border,
        borderRadius,
        borderColor,
        boxShadow,
        boxSizing,
        cursor: clickable,
        gap,
        gridTemplateColumns: gridTemplateColumns && `repeat(${gridTemplateColumns}, minmax(0, 1fr))`,
        height: customHeight,
        left,
        margin,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        padding,
        position,
        top: currentPosition,
        touchAction,
        visibility,
        width: currentWidth,
        zIndex
      },
      role,
      ref,
      onClick,
      ...props
    },
    children
  )
})