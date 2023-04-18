import { CSSProperties } from 'react'

/**
 * @param lineThrough contains the index of the component that should be line through, 0 -> title, 1 -> subtitle, 2 -> lead
 * @returns
 */

export const transformCouponLineThrough = (
  lineThrough: string[]
) => {
  const styles: {
    titleTextDecoration?: CSSProperties['textDecorationLine'];
    loadTextDecoration?: CSSProperties['textDecorationLine'];
    subtitleTextDecoration?: CSSProperties['textDecorationLine'];
  } = {}

  for (const line of lineThrough) {
    switch (line) {
      case '0':
        styles.titleTextDecoration = 'line-through'
        break
      case '1':
        styles.loadTextDecoration = 'line-through'
        break
      case '2':
        styles.subtitleTextDecoration = 'line-through'
        break
    }
  }

  return styles
}
