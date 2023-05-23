import React, { ReactElement } from 'react'
import styles from './previewDots.module.css'
import { ButtonGroupProps } from 'react-multi-carousel'

interface PreviewDotsProps extends ButtonGroupProps{
  items?: Array<ReactElement>;
}
export const PreviewDots = ({ items, goToSlide }: PreviewDotsProps) => {
  return (
    <div className={styles.itemsContainer}>
      {
        items?.map((item, key) => {
          return React.createElement(
            'div',
            {
              key: item.props.src,
              className: styles.container,
              onClick: () => { goToSlide(key) }
            },
            item
          )
        })
      }
    </div>
  )
}