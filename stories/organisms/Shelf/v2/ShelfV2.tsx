import React, { useEffect, useMemo, useState } from 'react'
import { getGlobalStyle, SmallScreen } from '../../../../helpers'
import {
  Icon,
  Link,
  Picture,
  Text
} from '../../../atoms'
import {
  Column,
  Container,
  Row,
  Spacer
} from '../../../layout'
import { AddToCartAndQuantity, Modal } from '../../../molecules'
import { ChipOffer } from '../ChipOffer'
import { ShelfAddToCart } from './ShelfAddToCart/ShelfAddToCart'
import { ShelfCouponButton } from './ShelfCouponButton/ShelfCouponButton'
import { ShelfHorizontal } from '../ShelfHorizontal'
import { ShelfPrice } from '../ShelfPrice'
import { ShelfSideButton } from './ShelfSideButton'
import { CommonShelfProps } from '../Shelf'
import { ShelfLabel } from '../ShelfLabel'
import { ShelfFormat } from '../ShelfFormat'

import styles from './../Shelf.module.css'
import { validatePromotion, validateVertical } from '../utils'
import classNames from 'classnames'

export interface ShelfV2Props extends CommonShelfProps {
  couponLabel?: string
  couponStatus?: 'new' | 'active' | 'used'
  couponLoading?: boolean
  showCouponButton?: boolean
  unitMultiplier?: number
  version?: 2
  onActiveCoupon?: () => void;
}

interface PropsValues {
  customPadding: string
  customWidth: string
  fontSizeChipOffer: typeof Text.arguments.fontSize
  fontSizeMobile: typeof Text.arguments.fontSize
  fontSizeMobileOffer: typeof Text.arguments.fontSize
  marginChipOffer: string
  paddingPromotion4: string
  styledChipOffer: string
  columnPadding: string
  verticalMinHeight: string
  verticalSpacerHorizontal: 8 | 2
  shelfMaxWidth: string
  boxShadow: string | undefined
  containerMinWidth: string
  shelfMinWidth: string
  pictureHeight: string
}

const validateMobile = (isMobile: boolean, importantWidth: string): PropsValues => {
  const columnPadding = '8px'
  const width = isMobile ? '50%' : '20%'
  if (isMobile) {
    return {
      customPadding: '4px',
      customWidth: importantWidth || width,
      fontSizeChipOffer: 'xs',
      fontSizeMobile: 'md',
      fontSizeMobileOffer: 'sm',
      marginChipOffer: '3px 0px 2px 0px',
      paddingPromotion4: '1px 0',
      styledChipOffer: styles.offerMobile,
      columnPadding,
      verticalMinHeight: '284px',
      verticalSpacerHorizontal: 8,
      shelfMaxWidth: '240px',
      boxShadow: undefined,
      containerMinWidth: '50%',
      shelfMinWidth: '',
      pictureHeight: '115px'
    }
  }

  return {
    boxShadow: getGlobalStyle('--box-shadow-2xs'),
    columnPadding,
    containerMinWidth: '200px',
    customPadding: '0px',
    customWidth: importantWidth || width,
    fontSizeChipOffer: 'sm',
    fontSizeMobile: 'lg',
    fontSizeMobileOffer: 'md',
    marginChipOffer: '2px 0px 0px 0px',
    paddingPromotion4: '2px 0',
    pictureHeight: '150px',
    shelfMaxWidth: '300px',
    shelfMinWidth: '200px',
    styledChipOffer: styles.offerDesktop,
    verticalMinHeight: '324px',
    verticalSpacerHorizontal: 2
  }
}

const hideUsedButton = (buttonState: string, showButton: boolean) => {
  if (showButton) return true
  if (buttonState === 'used') return false
  return true
}

const ShelfV2 = React.forwardRef(function Shelf({
  brand,
  buttonLabel,
  buttonStatus = 'initial',
  altText,
  couponLabel,
  format,
  img,
  importantWidth,
  inOffer = false,
  isDisabled,
  isLoading,
  isMobile = false,
  isPromotion = false,
  itemId,
  likeListButtons = false,
  linkWrapper,
  listPrice,
  offer,
  orientation = 'vertical',
  ppum,
  ppumListPrice,
  price,
  promotion,
  quantity = 0,
  quantityButtonProps,
  quantityButtonStyles,
  showCouponButton = true,
  stock = true,
  title,
  tooltipProps,
  typePromotion,
  url,
  unitMultiplier,
  couponStatus,
  couponLoading,
  container,
  degrees,
  provider,
  volume,
  catchShelfRef,
  handleOnClick,
  onActiveCoupon,
  onClickProduct
}: ShelfV2Props, ref?: React.LegacyRef<HTMLInputElement>): React.ReactElement<ShelfV2Props> {
  const [isHover, setIsHover] = useState(false)
  const showUsedButton = hideUsedButton(couponStatus, showCouponButton)
  const [showModal, setShowModal] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)
  const [showAnimation, setShowAnimation] = useState(couponStatus === 'new')

  const {
    columnPadding,
    containerMinWidth,
    customWidth,
    fontSizeChipOffer,
    fontSizeMobile,
    fontSizeMobileOffer,
    marginChipOffer,
    paddingPromotion4,
    pictureHeight,
    shelfMinWidth,
    shelfMaxWidth,
    styledChipOffer,
    verticalMinHeight,
    verticalSpacerHorizontal
  } = validateMobile(isMobile, importantWidth)

  const [shelfRef, setShelfRef] = useState<React.ForwardedRef<HTMLInputElement>>()
  const {
    justifyContentPrice,
    alignItemsInOffer,
    underlineInOffer,
    typePromotion4,
    validateListPrice
  } = validatePromotion(
    isPromotion,
    typePromotion,
    inOffer
  )

  const isVertical: boolean = orientation === 'vertical'
  const {
    bodyHorizontalClass,
    promotionContainerPadding
  } = validateVertical(
    isVertical,
    styles.hoverZoom
  )

  const handleImgVal = useMemo(() => {
    shelfRef && catchShelfRef && catchShelfRef(shelfRef)
    return true
  }, [shelfRef])

  const shelfPriceProps = {
    fontSizeMobile,
    fontSizeMobileOffer,
    listPrice,
    orientation,
    ppum,
    ppumListPrice,
    price,
    underlineInOffer,
    validateListPrice
  }

  const shelfHorizontalProps = {
    brand,
    altText,
    format,
    img,
    isMobile,
    isPromotion,
    offer,
    ppum,
    promotion,
    stock,
    title,
    typePromotion,
    url,
    fontSizeChipOffer,
    marginChipOffer,
    styledChipOffer,
    justifyContentPrice,
    alignItemsInOffer,
    typePromotion4,
    ...shelfPriceProps,
    onClickProduct
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const handleCouponModal = () => {
    if(!startAnimation){
      setShowModal(true)
      setTimeout(() => {
        setStartAnimation(true)
      }, 100)
      setTimeout(() => {
        setShowModal(false)
        setStartAnimation(false)
      }, 3000)
    }
  }

  const handleActiveCoupon = () => {
    couponStatus === 'new' && onActiveCoupon()
    couponStatus === 'active' && handleCouponModal()
  }

  useEffect(() => {
    if(showAnimation && couponStatus === 'active'){
      handleCouponModal()
      setShowAnimation(false)
    }
  }, [couponStatus])

  return (
    <Container
      maxWidth={shelfMaxWidth}
      minWidth={containerMinWidth}
      padding='6px'
      width={customWidth}
    >
      {showModal &&
        <SmallScreen>
          <Modal
            backgroundColor={getGlobalStyle('--color-primary-green-light')}
            className={classNames(
              styles.activationModal,
              {
                [styles.modalAnimation]: startAnimation
              }
            )}
            colorButtonDrag={getGlobalStyle('--color-neutral-gray')}
            dragRatio={0.1}
            fullScreen={true}
            hiddenX={true}
            hideOverlay={true}
            isDraggable={true}
            isOpen={true}
            minHeightFullScreen='57px'
            widthButtonDrag='82px'
          >
            <Row
              alignItems='center'
              justifyContent='center'
              margin='10px 0 0 0'
              zIndex='8'
            >
              <Icon
                color='white'
                name='Coupon'
                sizes='md'
              />
              <Spacer.Vertical size={16} />
              <Text color='white' fontSize='md'>Activaste un cupón de</Text>
              <Spacer.Vertical size={4} />
              <Text
                color='white'
                fontSize='md'
                fontWeight='bold'
              >
                {couponLabel}
              </Text>
            </Row>
            <span className={styles.modalBackground}/>
          </Modal>
        </SmallScreen>
      }
      <Column
        borderRadius={getGlobalStyle('--border-radius-md')}
        boxShadow={getGlobalStyle('--box-shadow-2xs')}
        minWidth={shelfMinWidth}
        position='relative'
        ref={(columnRef: React.ForwardedRef<HTMLInputElement>) => {
          if (!ref) ref = columnRef
          setShelfRef(columnRef)
        }}
        tagName='section'
        val={handleImgVal}
      >
        { stock &&
          <Container
            absoluteDefault='topRight'
            margin='12px'
            position='absolute'
            width='fit-content'
          >
            <ShelfAddToCart
              couponStatus={couponStatus}
              disabled={!stock || isDisabled}
              isHover={isHover}
              isMobile={isMobile}
              itemId={itemId}
              maxQuantity={quantityButtonProps?.maxQuantity}
              onActivateCoupon={onActiveCoupon}
              onAdd={quantityButtonProps?.handleAdd}
              onAddFirst={handleOnClick}
              onChange={quantityButtonProps?.handleChange}
              onRemove={quantityButtonProps?.handleRemove}
              quantity={quantityButtonProps?.quantity}
              quantityDisplay={quantity}
              unitMultiplier={unitMultiplier}
            />
          </Container>
        }
        <ShelfLabel
          promotion={promotion}
          promotionContainerPadding={promotionContainerPadding}
          provider={provider}
        />
        <Column
          backgroundColor={getGlobalStyle('--color-base-white')}
          borderRadius={getGlobalStyle('--border-radius-md')}
          customClassName={bodyHorizontalClass}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          padding={columnPadding}
        >
          {isVertical ? (
            <Column
              justifyContent='between'
              minHeight={verticalMinHeight}
              padding='8px 0 0 0'
            >
              <Column>
                <Link
                  customWidth='100'
                  href={url}
                  title={title}
                  underline='none'
                  wrapper={linkWrapper}
                >
                  <Column
                    clickable='pointer'
                    onClick={onClickProduct}
                    width='100%'
                  >
                    <Row
                      clickable='pointer'
                      justifyContent='center'
                      position='relative'
                    >
                      <Picture
                        alt={altText}
                        border='none'
                        borderRadius='none'
                        className={!stock ? styles.outOfStock : styles.defaultImgStyle}
                        height={pictureHeight}
                        objectFit='contain'
                        src={img}
                        width='100%'
                      />
                      {likeListButtons &&
                        <Container
                          absoluteDefault='topLeft'
                          alignItems={isMobile ? 'center' : 'start'}
                          customHeight='100%'
                          justifyContent='start'
                          position='absolute'
                        >
                          <Column gap='12px' maxWidth='40px'>
                            <ShelfSideButton icon='List'/>
                            <ShelfSideButton icon='Heart'/>
                          </Column>
                        </Container>
                      }
                    </Row>
                    <Spacer.Horizontal size={8} />
                    {/* brand, title and format */}
                    <Text
                      clickable='pointer'
                      color='black'
                      customClassName={styles.brandText}
                      fontSize='sm'
                      fontWeight='semibold'
                    >
                      {brand?.toLowerCase()}
                    </Text>

                    <Text
                      clickable='pointer'
                      color='black'
                      customClassName={styles.nameProduct}
                      fontSize={fontSizeMobileOffer}
                    >
                      {title.charAt(0) + title.toLowerCase().slice(1)}
                    </Text>
                    <Spacer.Horizontal size={4} />
                    <ShelfFormat
                      container={container}
                      degrees={degrees}
                      format={format}
                      volume={volume}
                    />
                  </Column>
                </Link>
                <Spacer.Horizontal size={verticalSpacerHorizontal} />

                {/* price, listPrice */}
                {stock &&
                  <Column justifyContent='start'>
                    <Row alignItems={alignItemsInOffer} justifyContent={justifyContentPrice}>
                      {isPromotion &&
                        <Column
                          justifyContent='start'
                          margin={typePromotion !== 4 && marginChipOffer}
                          maxWidth='max-content'
                        >
                          {typePromotion4 &&
                            <Row
                              justifyContent='start'
                              minWidth='21px'
                              padding={paddingPromotion4}
                            >
                              <Text
                                customColor={getGlobalStyle('guardsman-red')}
                                fontSize='md'
                                fontWeight='bold'
                                textAlign='right'
                                type='label'
                              >
                                {offer}
                              </Text>
                              <Spacer.Vertical size={2} />
                            </Row>
                          }
                          {!typePromotion4 &&
                            <ChipOffer
                              fontSizeChipOffer={fontSizeChipOffer}
                              offer={offer}
                              padding='2px 1px 2px 3px'
                              styled={styledChipOffer}
                              width='28px'
                            />
                          }
                        </Column>
                      }
                      <Column padding='2px'>
                        <ShelfPrice {...shelfPriceProps} />
                      </Column>
                    </Row>
                  </Column>
                }
                {!stock &&
                  <Row
                    backgroundColor={getGlobalStyle('--color-neutral-gray-dark')}
                    borderRadius={getGlobalStyle('--border-radius-2xs')}
                    justifyContent='center'
                    maxWidth='60px'
                  >
                    <Text color='white' fontSize='sm'>
                      sin stock
                    </Text>
                  </Row>
                }
              </Column>
              <Row justifyContent='center' padding='12px 2px 0 2px'>
                {(stock && couponLabel && showUsedButton) &&
                  <ShelfCouponButton
                    couponStatus={couponStatus}
                    isLoading={couponLoading}
                    isMobile={isMobile}
                    itemId={itemId}
                    label={couponLabel}
                    onAdd={quantityButtonProps?.handleAdd}
                    onAddFirst={handleOnClick}
                    onClick={handleActiveCoupon}
                    quantity={quantityButtonProps?.quantity}
                    quantityDisplay={quantity}
                  />
                }
              </Row>
            </Column>
          ) : (
            <ShelfHorizontal {...shelfHorizontalProps} />
          )}
          {!isVertical && (
            <Row
              justifyContent='center'
              maxWidth='288px'
              padding='5px 0px 0px 0px'
            >
              <Column width='70px' />
              <AddToCartAndQuantity
                buttonLabel={buttonLabel}
                disabled={isDisabled}
                handleOnClick={handleOnClick}
                isLoading={isLoading}
                itemId={itemId}
                quantity={quantity}
                quantityButtonProps={quantityButtonProps}
                quantityButtonStyles={quantityButtonStyles}
                statusButton={buttonStatus}
                tooltipProps={tooltipProps}
              />
            </Row>
          )}
        </Column>
      </Column>
    </Container>
  )
})

export {
  ShelfV2
}
