import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const BigScreen = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  return useMediaQuery({ minWidth: 1280 }) ? children : null
}

export const SmallScreen = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  return useMediaQuery({ maxWidth: 1279 }) ? children : null
}
