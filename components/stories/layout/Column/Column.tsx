import React from 'react'
import { BaseContainer, ChildrenBaseContainerProps } from '../BaseContainer/BaseContainer'

export const Column = React.forwardRef(function Column({
  absoluteDefault = 'topLeft',
  alignItems = 'start',
  borderEdge = 'none',
  borderRadius = 'initial',
  boxSizing = 'border-box',
  customHeight = 'auto',
  customWidth = '100',
  isPlayground = Boolean(process.env.isPlayground),
  isWrap = false,
  justifyContent = 'start',
  maxHeight = 'initial',
  maxWidth = 'initial',
  minHeight = 'initial',
  background = '',
  padding,
  position = 'initial',
  tagName = 'div',
  ...props
}: ChildrenBaseContainerProps, ref): React.ReactElement<ChildrenBaseContainerProps> {
  return (
    <BaseContainer
      flexDirection='column'
      {...{
        absoluteDefault,
        alignItems,
        borderEdge,
        borderRadius,
        boxSizing,
        customHeight,
        background,
        customWidth,
        isPlayground,
        isWrap,
        justifyContent,
        maxHeight,
        maxWidth,
        minHeight,
        padding,
        position,
        tagName,
        ref,
        ...props
      }}
    />
  )
})