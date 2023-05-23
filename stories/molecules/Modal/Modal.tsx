import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { getGlobalStyle } from '../../../helpers'
import {
  FontSize,
  Icon,
  IconProps,
  Text
} from '../../atoms'
import { JustifyContent, Position } from '../../layout/BaseContainer/BaseContainer'
import {
  Column,
  Container,
  Row,
  Spacer
} from '../../layout'
import styles from './Modal.module.css'

interface ModalProps {
  adjusted?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
  colorButtonDrag?: string;
  customCssFullScreen?: boolean;
  customIcon?:IconProps['name'];
  customIconPadding?: string;
  dragRatio?: number;
  errorModal?: boolean;
  fontSizeMobile?: FontSize;
  fullScreen?: boolean;
  halfScreen?: boolean;
  height?: string;
  hiddenX?: boolean;
  hideOverlay?: boolean;
  iconPadding?: string;
  iconProps?: Omit<IconProps, 'name'>;
  iconSize?: IconProps['customSize'];
  isCloseIcon?: boolean;
  isDraggable?: boolean;
  isOpen: boolean;
  justifyContent?: JustifyContent;
  level?: '1' | '2' | '3';
  marginFullScreen?: string;
  maxHeight?: string;
  maxHeightFullScreen?: string;
  maxWidth?: string;
  minFullscreenTranslation?: number;
  minHeight?: string;
  minHeightFullScreen?: string;
  modalTitle?: string;
  padding?: string;
  position?: Position;
  sizeIconClose?: number;
  titleModalMobile?: boolean;
  top?: string;
  widthButtonDrag?: string;
  toggle?: () => void;
  toggleOutside?: () => void;
}

interface DragProps {
  dragStartLeft: number;
  dragStartTop: number;
  dragStartX: number;
  dragStartY: number;
  transalteY: number;
}
export const ID_MODAL_HANDLER = 'modal_handler'
export const ID_MODAL_ACTION = 'modal_handler_action'

export const Modal = ({
  adjusted,
  backgroundColor = getGlobalStyle('--color-base-white'),
  borderRadius = getGlobalStyle('--border-radius-md'),
  children,
  className,
  color='white',
  colorButtonDrag = getGlobalStyle('--color-neutral-gray-silver'),
  customCssFullScreen,
  dragRatio = 0.5,
  fontSizeMobile,
  fullScreen,
  halfScreen = false,
  height = 'initial',
  hiddenX = false,
  hideOverlay = false,
  iconPadding,
  iconProps,
  isCloseIcon = true,
  isDraggable = true,
  isOpen = false,
  justifyContent,
  level,
  marginFullScreen = '60px 0 0 0',
  maxHeight = 'initial',
  maxHeightFullScreen,
  maxWidth = '315px',
  minFullscreenTranslation = 0,
  minHeight = '20%',
  minHeightFullScreen = 'calc(100vh - 60px)',
  modalTitle = '',
  padding = '20px',
  position = 'initial',
  sizeIconClose = 14,
  titleModalMobile = false,
  top,
  widthButtonDrag = '45px',
  toggle,
  toggleOutside = () => { return }
}: ModalProps): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null)
  const dragProps = useRef<DragProps>()

  const handleDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    const { clientX, clientY } = e.touches[0]
    const { offsetTop, offsetLeft } = modalRef.current
    const { left, top } = modalRef.current.getBoundingClientRect()

    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY,
      transalteY: 0
    }

    window.addEventListener('touchmove', handleDrag, false)
    window.addEventListener('touchend', handleDragEnd, false)
  }

  const handleDragEnd = () => {
    const translateAmount = dragProps.current.transalteY
    const bodyHeight = halfScreen ? document.body.clientHeight / 4 : document.body.clientHeight
    const maxTranslation = dragRatio * bodyHeight

    if (minFullscreenTranslation && translateAmount > maxTranslation) {
      const originTranslateAmount = minFullscreenTranslation !== 0 ? translateAmount : minFullscreenTranslation

      const animation = modalRef.current.animate(
        [
          { transform: `translateY(${originTranslateAmount}px)` },
          { transform: `translateY(${minFullscreenTranslation}px)` }
        ],
        {
          duration: 200
        }
      )

      animation.addEventListener('finish', () => {
        dragProps.current.transalteY = minFullscreenTranslation
        modalRef.current.style.transform = `translateY(${minFullscreenTranslation}px)`
      })

      animation.addEventListener('finish', () => {
        toggleOutside()
      })
    }

    if (translateAmount < maxTranslation && translateAmount > 0) {
      const animation = modalRef.current.animate(
        [
          { transform: `translateY(${translateAmount}px)` },
          { transform: `translateY(0px)` }
        ],
        {
          duration: 200
        }
      )
      animation.addEventListener('finish', () => {
        dragProps.current.transalteY = 0
        modalRef.current.style.transform = 'translateY(0px)'
      })
    }

    window.removeEventListener('touchmove', handleDrag, false)
    window.removeEventListener('touchend', handleDragEnd, false)
  }

  const handleDrag = (e: TouchEvent) => {
    e.preventDefault()
    if (!e.touches?.length) return

    const { clientY } = e.touches[0]
    dragProps.current.transalteY =
      dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY

    if (dragProps.current.transalteY < 0) dragProps.current.transalteY = 0

    modalRef.current.style.transform = `translateY(${dragProps.current.transalteY}px)`
  }

  useEffect(() => {
    if (isOpen && typeof toggleOutside === 'function') window.addEventListener('keyup', e => { return e.code === 'Escape' && toggleOutside() })
    return () => { return isOpen && window.removeEventListener('keyup', () => { return }) }
  }, [isOpen])

  return (
    <>
      {isOpen ? (
        <>
          {/* overlay */}
          <Container
            className={classNames(
              styles.modalBg,
              'modal__bg',
              {
                [styles['modal__customCssFullScreen']]: customCssFullScreen,
                [styles['modal__fullScreen']]: fullScreen,
                [styles['modal__hideOverlay']]: hideOverlay,
                [styles[`modal__level-${level}`]]: !!level
              }
            )}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            position={position}
            top={top}
          >
            <Container
              customHeight='100%'
              customWidth='100%'
              onClick={toggleOutside}
              position='absolute'
            />
            {/* modal container */}
            <Container
              alignItems='center'
              backgroundColor={backgroundColor}
              borderRadius={borderRadius}
              customHeight={height}
              height={height}
              justifyContent='center'
              maxHeight={maxHeight}
              maxWidth={maxWidth}
              minHeight={minHeight}
              overflow='hidden'
              padding={padding}
              position='relative'
              ref={modalRef}
              {...(fullScreen && {
                width: '100%',
                margin: marginFullScreen,
                minHeight: minHeightFullScreen,
                maxHeight: maxHeightFullScreen,
                maxWidth: '100%'
              })}
              className={
                classNames(
                  styles.overflow,
                  className,
                  {[styles['modal__adjusted']]: adjusted}
                )}
            >
              {fullScreen && (
                <Column
                  id={ID_MODAL_HANDLER}
                  onTouchStart={isDraggable && handleDragStart}
                  position='absolute'
                  top='0'
                  touchAction={'none'}
                >
                  <Container
                    alignSelf='center'
                    backgroundColor={colorButtonDrag}
                    borderRadius={getGlobalStyle('--border-radius-sm')}
                    clickable={'grab'}
                    customHeight='6px'
                    id={ID_MODAL_ACTION}
                    margin='10px'
                    width={widthButtonDrag}
                    zIndex='3'
                  />
                  {
                    titleModalMobile &&
                    (<>
                      <Spacer.Horizontal size={12} />
                      <Row
                        alignItems='center'
                        justifyContent={justifyContent}
                        width='100%'
                      >
                        <Text
                          fontSize={fontSizeMobile}
                          fontWeight='semibold'
                          lineHeight='25px'
                        >
                          {modalTitle}
                        </Text>
                      </Row>
                      <Spacer.Horizontal size={24} />
                    </>)
                  }
                </Column>
              )}
              {/* X button */}
              {!hiddenX &&
                <Container
                  absoluteDefault='topRight'
                  alignItems='start'
                  justifyContent='end'
                  maxWidth='max-content'
                  onClick={toggle}
                  padding={iconPadding ?? padding}
                  position='absolute'
                  zIndex={'1'}
                >
                  {isCloseIcon &&
                      <div className={classNames({[styles['icon__adjusted']]: adjusted})}>
                        <Icon
                          clickable='pointer'
                          color={getGlobalStyle('--color-icons-gray')}
                          customSize={sizeIconClose}
                          name='Close'
                          {...iconProps}
                        />
                      </div>
                  }
                </Container>
              }
              {/* content */}
              <Column
                alignItems='center'
                customHeight={height}
                justifyContent={justifyContent}
              >
                {children}
              </Column>
            </Container>
          </Container>
        </>
      ) : null}
    </>
  )
}