import React from 'react'
import ContentLoader from 'react-content-loader'
import { BackboneProps } from '.'

export const Generic = ({
  backgroundColor,
  borderRadius,
  foregroundColor,
  height,
  speed,
  viewBox,
  width
}: BackboneProps): React.ReactElement => {
  return (
    <ContentLoader
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      height={height}
      speed={speed}
      style={{
        width: `${width}%`,
        borderRadius: `${borderRadius}`
      }}
      viewBox={viewBox}
      width={width}
    >
      <rect
        height={height}
        rx='0'
        ry='0'
        width={`${width}%`}
        x='0'
        y='0'
      />
      <rect
        height='2'
        rx='0'
        ry='0'
        width='1'
        x='190'
        y='30'
      />
    </ContentLoader>
  )
}