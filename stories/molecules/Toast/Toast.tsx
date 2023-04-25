import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { getGlobalStyle } from '../../../helpers'
import {
  Button,
  Icon,
  Picture,
  Text
} from '../../atoms'
import { Column, Row } from '../../layout'
import styles from './Toast.module.css'

export interface ToastProps {
  button?: {
    target?: string;
    title?: string;
    url?: string;
  },
  fixedPosition?: 'top' | 'bottom';
  hideOnScroll?: boolean;
  iconUrl?: string;
  isFixed?: boolean;
  message?: string;
  showClose?: boolean;
  title?: string;
  onClose?: () => void;
  onBlurButton?: () => void;
}

const HIDE_SCROLL_OFFSET = 100

export const Toast = ({
  button,
  fixedPosition = 'top',
  hideOnScroll = true,
  iconUrl,
  isFixed = false,
  message,
  showClose,
  title,
  onBlurButton,
  onClose
}: ToastProps): React.ReactElement<ToastProps> => {
  const [isHidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > HIDE_SCROLL_OFFSET) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    if (hideOnScroll) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClickButton = () => {
    if (button?.url) {
      window.open(button.url, button.target)
    }
    return onBlurButton && onBlurButton()
  }

  return (
    <Row
      absoluteDefault={fixedPosition === 'bottom' ? 'bottomLeft' : 'topLeft'}
      alignItems='center'
      aria-hidden={isHidden}
      backgroundColor={getGlobalStyle('--color-base-white')}
      customClassName={classNames(styles.toast, {
        [styles[`toast--${fixedPosition}`]]: fixedPosition,
        [styles['toast--hidden']]: isHidden
      })}
      data-testid='toast'
      padding='4px 20px'
      position={isFixed ? 'fixed' : 'initial'}
      zIndex={getGlobalStyle('--z-index-5')}
    >
      <Column
        padding='0 8px 0 0'
        width='fit-content'
      >
        {showClose && (
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-neutral-gray-dark')}
            name='Close'
            onClick={onClose}
          />
        )}
      </Column>
      <Column>
        <Row alignItems='center'>
          <Column width='fit-content'>
            {iconUrl && (
              <Picture
                alt={title}
                height='40'
                objectFit='contain'
                src={iconUrl}
                width='40'
              />
            )}
          </Column>
          <Column padding='10px'>
            <Row>
              <Text fontSize='sm' fontWeight='semibold'>{title}</Text>
            </Row>
            <Row>
              <Text fontSize='xs'>{message}</Text>
            </Row>
          </Column>
        </Row>
      </Column>
      <Column width='fit-content'>
        {button && (
          <Button
            borderRadius={getGlobalStyle('--border-radius-full')}
            fontSize={getGlobalStyle('--font-size-xs')}
            height='auto'
            label={button.title}
            minWidth='100%'
            onClick={handleClickButton}
            padding={'6px 10px'}
          />
        )}
      </Column>
    </Row>
  )
}