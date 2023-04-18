import React from 'react'
import { BaseContainer, ChildrenBaseContainerProps } from '../BaseContainer/BaseContainer'

export const Row = React.forwardRef(function Row({
  absoluteDefault = 'topLeft',
  alignItems = 'start',
  borderEdge = 'none',
  borderRadius = 'initial',
  boxSizing = 'border-box',
  clickable = 'auto',
  customHeight = 'auto',
  customWidth = '100',
  isPlayground = Boolean(process.env.isPlayground),
  isWrap = false,
  justifyContent = 'start',
  maxHeight = 'initial',
  maxWidth = 'initial',
  minHeight = 'initial',
  position = 'initial',
  tagName = 'div',
  ...props
}: ChildrenBaseContainerProps, ref): React.ReactElement<ChildrenBaseContainerProps> {
  return (
    <BaseContainer
      flexDirection='row'
      {...{
        absoluteDefault,
        alignItems,
        borderEdge,
        borderRadius,
        boxSizing,
        clickable,
        customHeight,
        customWidth,
        isPlayground,
        isWrap,
        justifyContent,
        maxHeight,
        maxWidth,
        minHeight,
        position,
        tagName,
        ref,
        ...props
      }}
    />
  )
})