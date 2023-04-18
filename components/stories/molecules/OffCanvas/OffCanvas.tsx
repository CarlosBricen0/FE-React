import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { getGlobalStyle } from '../../../helpers'
import { FontSize, Text } from '../../atoms'
import { Icon } from '../../atoms/Icon/Icon'
import { Row } from '../../layout'
import { JustifyContent, Position } from '../../layout/BaseContainer/BaseContainer'
import { Column } from '../../layout/Column/Column'
import { Container } from '../../layout/Container/Container'
import styles from './OffCanvas.module.css'

enum OffCanvaDirections {
  LEFT = 'left',
  RIGHT = 'right'
}

type TextWeight = 'none' | 'hairline' | 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
type Align = 'start' | 'center' | 'end'

interface OffCanvaProps {
  backgroundColor?: string
  children: React.ReactNode
  className?: string
  direction: string
  fullScreen?: boolean
  // Footer
  footerComponent?: React.ReactNode
  footerHeight?: string
  footerPadding?: string

  // Header
  headerComponent?: React.ReactNode
  headerHeight?: string
  headerPadding?: string
  headerText?: string
  headerTextAlign?: Align
  headerTextSize?: FontSize
  headerTextWeight?: TextWeight

  isMobile?: boolean
  isOpen: boolean
  justifyContent?: JustifyContent;
  level?: '1' | '2' | '3'
  padding?: string
  position?: Position
  width?: string
  toggleOutside?: () => void
}

export const OffCanvas = ({
  backgroundColor = getGlobalStyle('--color-neutral-gray-white'),
  children,
  className,
  direction = OffCanvaDirections.RIGHT,
  fullScreen,
  footerComponent = null,
  footerHeight = '165px',
  footerPadding = '16px',
  headerComponent = null,
  headerHeight = '75px',
  headerPadding = '24px',
  headerText = 'Header',
  headerTextAlign,
  headerTextSize,
  headerTextWeight,
  isMobile = false,
  isOpen = false,
  level = '1',
  position = null,
  justifyContent,
  width = '376px',
  padding = '16px 11px 16px 16px',
  toggleOutside = () => { return }
}: OffCanvaProps): React.ReactElement => {

  const [activeClass, setActiveClass] = useState(styles.offCanvas__container)

  const containerFoterHeight = footerComponent ? footerHeight : '0px'
  const containerWidth = isMobile ? '100%' : width

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
      document.body.style.paddingRight = '15px'
      setActiveClass(styles[`offCanvas__slide--${direction}`])
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.paddingRight = '0'
      setActiveClass(styles[`offCanvas__container--${direction}`])
    }
  }, [isOpen])

  return (
    <>
      {
        isOpen && (
          <>
            {/* overlay */}
            <Container
              className={classNames(
                styles.offCanvas__bg,
                styles[`offCanvas__fullScreen--${direction}`],
                {
                  [styles['offCanvas__fullScreen']]: fullScreen,
                  [styles[`offCanvas__level-${level}`]]: !!level
                }
              )}
              position={position}
            >

              <Container
                customHeight='100%'
                customWidth='100%'
                onClick={toggleOutside}
                position='absolute'
              />
              {/* OffCanva container */}
              <Container
                alignItems='center'
                backgroundColor={backgroundColor}
                className={classNames(
                  className,
                  activeClass)}
                customHeight='100%'
                justifyContent='center'
                overflow='hidden'
                position='fixed'
                width={containerWidth}
              >
                {/* Header */}
                <Row id='Offcanvas__header' tagName='section'>
                  <Column
                    alignItems='center'
                    backgroundColor={getGlobalStyle('--color-base-white')}
                    boxShadow={getGlobalStyle('--box-shadow-2xs')}
                    customHeight={headerHeight}
                    justifyContent='center'
                    padding={headerPadding}
                    width='100%'
                  >
                    <Row>

                      <Column>
                        {
                          headerComponent
                        }
                        {!headerComponent && (
                          <Text
                            customClassName={classNames(styles.offCanvas__headerTitle, {
                              [styles[`align--${headerTextAlign}`]]: headerTextAlign,
                              [styles[`text-size--${headerTextSize}`]]: headerTextSize,
                              [styles[`text-weight--${headerTextWeight}`]]: headerTextWeight
                            })}
                          >
                            {headerText}
                          </Text>
                        )}
                      </Column>
                      <Column
                        borderRadius={getGlobalStyle('--border-radius-full')}
                        className={styles.offCanvas__close}
                        clickable='pointer'
                        justifyContent='start'
                        maxWidth='max-content'
                        onClick={toggleOutside}
                        padding='10px'
                      >
                        <Icon
                          clickable='pointer'
                          color={getGlobalStyle('--color-neutral-black')}
                          customSize={17}
                          name='Close'
                        />
                      </Column>
                    </Row>
                  </Column>
                </Row>
                {/* content */}
                <Row id='Offcanvas__container' tagName='section' >
                  <Column
                    alignItems='center'
                    className={styles.offCanvas__container}
                    justifyContent={justifyContent}
                    margin='0 5px 0 0'
                    maxHeight={`calc(calc( 100vh - ${containerFoterHeight}) - ${headerHeight}) `}
                    overflow='auto'
                    padding={padding}
                  >
                    {children}
                  </Column>
                </Row>

                {/* Footer */}
                {
                  footerComponent && (
                    <Row
                      className={styles.offCanvas__footer}
                      id='Offcanvas__footer'
                      position='absolute'
                      tagName='section'
                    >
                      <Column
                        alignItems='center'
                        backgroundColor={getGlobalStyle('--color-base-white')}
                        borderRadius={`
                          ${getGlobalStyle('--border-radius-md')} 
                          ${getGlobalStyle('--border-radius-md')} 
                          0 0
                        `}
                        customHeight={footerHeight}
                        justifyContent='center'
                        maxWidth={width}
                        padding={footerPadding}
                        width='100%'
                      >
                        {
                          footerComponent
                        }
                      </Column>
                    </Row>
                  )
                }

              </Container>
            </Container>
          </>
        )
      }
    </>
  )
}
