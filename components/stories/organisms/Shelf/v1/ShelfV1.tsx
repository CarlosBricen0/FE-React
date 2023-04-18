import React, { useMemo, useState } from 'react'
import { getGlobalStyle } from '../../../../helpers'
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
import { AddToCartAndQuantity } from '../../../molecules'
import { CommonShelfProps } from '../Shelf'
import { ShelfFormat } from '../ShelfFormat'
import { ShelfLabel } from '../ShelfLabel'
import { ChipOffer } from '../ChipOffer'
import { ShelfPrice } from '../ShelfPrice'
import { ShelfHorizontal } from '../ShelfHorizontal'

import styles from './../Shelf.module.css'
import { validatePromotion, validateVertical } from '../utils'

export interface ShelfV1Props extends CommonShelfProps {
  version?: 1
}

const validateMobile = (isMobile: boolean, importantWidth: string) => {
  const customPadding = isMobile ? '4px' : '6px'
  const width = isMobile ? '50' : '20'
  const customWidth = importantWidth || width
  const fontSizeChipOffer: typeof Text.arguments.fontSize = isMobile ? 'xs' : 'sm'
  const fontSizeMobile: typeof Text.arguments.fontSize = isMobile ? 'md' : 'lg'
  const fontSizeMobileOffer: typeof Text.arguments.fontSize = isMobile ? 'sm' : 'md'
  const marginChipOffer = isMobile ? '3px 0px 2px 0px' : '2px 0px 0px 0px'
  const paddingPromotion4 = isMobile ? '1px 0' : '2px 0'
  const styledChipOffer = isMobile ? styles.offerMobile : styles.offerDesktop
  const columnPadding = isMobile ? '8px' : '16px'
  const verticalMinHeight = isMobile ? '360px' : '380px'
  const verticalSpacerHorizontal: 8 | 24 = isMobile ? 8 : 24

  return {
    customPadding,
    customWidth,
    fontSizeChipOffer,
    fontSizeMobile,
    fontSizeMobileOffer,
    marginChipOffer,
    paddingPromotion4,
    styledChipOffer,
    columnPadding,
    verticalMinHeight,
    verticalSpacerHorizontal
  }
}

const ShelfV1 = React.forwardRef(function Shelf({
  brand,
  buttonLabel,
  buttonStatus = 'initial',
  buttonVariant,
  customClassName,
  degrees,
  altText,
  format,
  img,
  importantWidth,
  inOffer = false,
  isDisabled,
  isLoading,
  isMobile = false,
  isPromotion = false,
  itemId,
  likeListButtons = true,
  listPrice,
  offer,
  orientation = 'vertical',
  ppum,
  ppumListPrice,
  price,
  promotion,
  provider,
  quantity = 0,
  quantityButtonProps,
  quantityButtonStyles,
  stock = true,
  title,
  tooltipProps,
  typePromotion,
  url,
  catchShelfRef,
  volume,
  nextImage,
  container,
  handleOnClick,
  onClickProduct
}: ShelfV1Props, ref?: React.LegacyRef<HTMLInputElement>): React.ReactElement<ShelfV1Props> {

  const {
    columnPadding,
    customPadding,
    customWidth,
    fontSizeChipOffer,
    fontSizeMobile,
    fontSizeMobileOffer,
    marginChipOffer,
    paddingPromotion4,
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
    minWidthTopColumn,
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

  return (
    <Column
      customClassName={customClassName}
      customWidth={customWidth}
      maxWidth='300px'
      minWidth={minWidthTopColumn}
      padding={customPadding}
      position='relative'
      ref={(columnRef: React.ForwardedRef<HTMLInputElement>) => {
        if (!ref) ref = columnRef
        setShelfRef(columnRef)
      }}
      tagName='section'
      val={handleImgVal}
    >
      {
        <ShelfLabel
          promotion={promotion}
          promotionContainerPadding={promotionContainerPadding}
          provider={provider}
        />
      }

      {likeListButtons &&
        <Container
          absoluteDefault='topRight'
          justifyContent='end'
          padding='12px'
          position='absolute'
        >
          <Column maxWidth='40px'>
            <Row
              alignItems='center'
              backgroundColor='#FFFFFF'
              borderRadius='50%'
              customClassName={styles.likeListButtons}
              justifyContent='center'
              maxWidth='30px'
              minHeight='30px'
            >
              <Icon
                clickable='pointer'
                color='#666666'
                name='List'
                sizes='xs'
              />
            </Row>
            <Row
              alignItems='center'
              backgroundColor='#FFFFFF'
              borderRadius='50%'
              customClassName={styles.likeListButtons}
              justifyContent='center'
              maxWidth='30px'
              minHeight='30px'
            >
              <Icon
                clickable='pointer'
                color='#666666'
                name='Heart'
                sizes='xs'
              />
            </Row>
          </Column>
        </Container>
      }
      <Column
        backgroundColor={getGlobalStyle('--color-base-white')}
        borderRadius={getGlobalStyle('--border-radius-md')}
        customClassName={bodyHorizontalClass}
        padding={columnPadding}
      >
        {isVertical ? (
          <Column justifyContent='between' minHeight={verticalMinHeight}>
            <Column>
              <Link
                href={url}
                title={title}
                underline='none'
              >
                <Column
                  clickable='pointer'
                  onClick={onClickProduct}
                >
                  <Row clickable='pointer' justifyContent='center' >
                    <Picture
                      alt={altText}
                      border='none'
                      borderRadius='none'
                      className={!stock ? styles.outOfStock : ''}
                      height='180px'
                      nextImage={nextImage}
                      src={img}
                      width='100%'
                    />
                  </Row>
                  <Spacer.Horizontal size={16} />
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
                              color='guardsman-red'
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
                            padding={'2px 1px 2px 3px'}
                            styled={styledChipOffer}
                            width='28px'
                          />
                        }
                      </Column>
                    }
                    <Column padding='2px'>
                      {<ShelfPrice {...shelfPriceProps} />}
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

            {/* buy button */}
            <Row justifyContent='center'>
              <AddToCartAndQuantity
                buttonLabel={buttonLabel}
                customWidth='100%'
                disabled={isDisabled}
                handleOnClick={handleOnClick}
                isLoading={isLoading}
                itemId={itemId}
                quantity={quantity}
                quantityButtonProps={quantityButtonProps}
                quantityButtonStyles={quantityButtonStyles}
                statusButton={buttonStatus}
                tooltipProps={tooltipProps}
                variant={buttonVariant}
              />
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
  )
})

export {
  ShelfV1
}
