import React from 'react'
import { getGlobalStyle } from '../../../helpers'
import {
  ButtonStatus,
  Link,
  Picture,
  Text,
  TooltipProps
} from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import {
  AddToCartAndQuantity,
  QuantityButtonProps,
  QuantityButtonStylesProps
} from '../../molecules'
import { ChipOffer } from './ChipOffer'
import { ShelfFormat } from './ShelfFormat'
import { ShelfPrice, ShelfPriceProps } from './ShelfPrice'
import styles from './Shelf.module.css'

interface ShelfVerticalProps extends React.HTMLProps<HTMLDivElement> {
  alignItemsInOffer: 'center' | 'start';
  brand?: string;
  buttonLabel?: string;
  buttonStatus?: ButtonStatus;
  buttonVariant?: 'button' | 'input';
  container: string;
  degrees?: string;
  fontSizeChipOffer: string;
  fontSizeMobileOffer: 'sm' | 'md';
  format?: string;
  img?: string;
  isCart?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMobile: boolean;
  isPromotion?: boolean;
  itemId?: string | number;
  justifyContentPrice: 'center' | 'start';
  linkWrapper?: React.FunctionComponent;
  marginChipOffer: string;
  nextImage?: React.FunctionComponent;
  offer?: number | string;
  paddingPromotion4: string;
  quantity?: number;
  quantityButtonProps?: QuantityButtonProps;
  quantityButtonStyles?: QuantityButtonStylesProps;
  tooltipProps?: TooltipProps;
  shelfPriceProps: ShelfPriceProps;
  stock?: boolean;
  styledChipOffer: string;
  title?: string;
  typePromotion?: number;
  typePromotion4: boolean;
  url?: string;
  volume: string;
  handleOnClick?: () => void;
  onClickProduct?: () => void;
}

export const ShelfVertical = ({
  alignItemsInOffer,
  brand,
  buttonLabel,
  buttonStatus,
  buttonVariant,
  container,
  degrees,
  format,
  fontSizeChipOffer,
  fontSizeMobileOffer,
  img,
  isCart = false,
  isDisabled,
  isLoading,
  isMobile,
  isPromotion = false,
  itemId,
  justifyContentPrice,
  linkWrapper,
  marginChipOffer,
  nextImage,
  offer,
  paddingPromotion4,
  quantity = 0,
  quantityButtonProps,
  quantityButtonStyles,
  shelfPriceProps,
  stock,
  styledChipOffer,
  title,
  tooltipProps,
  typePromotion,
  typePromotion4,
  url,
  volume,
  handleOnClick,
  onClickProduct
}: ShelfVerticalProps): React.ReactElement<ShelfVerticalProps> => {

  const verticalMinHeight = isMobile ? '360px' : '380px'
  const verticalSpacerHorizontal: 8 | 12 | 24 = isMobile ? 8 : 24
  const sizeImage = (isCart && isMobile) ? '120px' : '180px'
  const verticalMinHeightShelf = isCart ? '365px' : verticalMinHeight
  const verticalMinHeightShelfMobile = (isCart && isMobile) ? '290px' : verticalMinHeightShelf
  const verticalSpacerHorizontalShelf = isCart ? 12 : verticalSpacerHorizontal

  return (
    <Column justifyContent='between' minHeight={verticalMinHeightShelfMobile}>
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
          >
            <Row clickable='pointer' justifyContent='center' >
              <Picture
                alt={title}
                border='none'
                borderRadius='none'
                className={!stock ? styles.outOfStock : ''}
                height={sizeImage}
                nextImage={nextImage}
                src={img}
                width={sizeImage}
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
        <Spacer.Horizontal size={verticalSpacerHorizontalShelf} />

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
  )
}
