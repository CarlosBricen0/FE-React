import React from 'react'
import { Row } from '../../layout'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'
import { Carousel, CarouselDataProps } from '../Carousel/Carousel'
import { ShelfAlviProps, MemoShelfAlvi } from '../ShelfAlvi/ShelfAlvi'
import { ArrowProps, CustomButtonGroup } from '../Carousel/Arrows/CustomButtonGroup'
import { QuantityButtonProps, QuantityButtonStylesProps } from '../../molecules'
import { AvailableProduct } from '../../../shared/interfaces/IIntelligenceSearch'
import { Product } from '../../../shared/interfaces/IProducts'
import { ButtonStatus } from '../../atoms'
import { CatchShelfRefProps } from '../ShelfCarousel/ShelfCarousel'
import styles from './shelfCarouselAlvi.module.css'
import { ShelfProps } from '../Shelf/Shelf'

export interface ShelfCarouselAlviProps {
  buttonLabel?: string;
  buttonStatus?: ButtonStatus;
  carouselProps?: Omit<CarouselDataProps, 'children'>;
  containerProps?: ChildrenBaseContainerProps;
  couponState?: boolean;
  customButtonGroupProps?: ArrowProps;
  isLoggedIn?: boolean;
  isMobile?: boolean;
  items: ShelfAlviProps[] | AvailableProduct[] | Product[] | ShelfProps[];
  itemsToShow?: number;
  quantityButtonProps?: Omit<QuantityButtonProps, 'value'>;
  quantityButtonStyles?: QuantityButtonStylesProps;
  showArrows?: boolean;
  slidesToSlide?: number;
  validationStatus?: string;
  catchShelfRef?: (props?: CatchShelfRefProps) => void;
  handleOnClick?: (props?: { itemId: string }) => void;
  onClickProduct?: (props?: { product: object, index: number }) => void;
}

export const ShelfCarouselAlvi = ({
  buttonStatus,
  carouselProps,
  containerProps,
  couponState,
  customButtonGroupProps,
  isLoggedIn,
  isMobile,
  items = [],
  itemsToShow = 1,
  quantityButtonProps,
  quantityButtonStyles,
  showArrows,
  slidesToSlide = 1,
  validationStatus,
  catchShelfRef,
  handleOnClick,
  onClickProduct
}: ShelfCarouselAlviProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsToShow,
      slidesToSlide: slidesToSlide
    },
    mobile: {
      breakpoint: { max: 1023, min: 0 },
      items: itemsToShow,
      slidesToSlide: slidesToSlide,
      partialVisibilityGutter: 15
    }
  }

  const handleClickProduct = ({ product, index }) => {
    if (!onClickProduct) return

    onClickProduct({ product, index })
  }

  const maxQuantity = (shelf) => {
    return shelf?.cartLimit > 0 ? shelf?.cartLimit : shelf?.sellers[0]?.availableQuantity
  }

  if ((items?.length <= 4 && !isMobile) || (items?.length <= 2 && isMobile)) {
    return (
      <Row isWrap {...containerProps}>
        {items?.map((shelf, index) => {
          return (
            <MemoShelfAlvi
              {...shelf}
              buttonStatus={buttonStatus}
              catchShelfRef={(ref) => { catchShelfRef({ ref, shelf, index: index + 1 }) }}
              couponState={couponState}
              customClassName={styles.shelfStyle}
              handleOnClick={handleOnClick}
              importantWidth='50'
              isLoggedIn={isLoggedIn}
              key={index}
              onClickProduct={() => { handleClickProduct({ product: shelf, index: index + 1 }) }}
              orientation='vertical'
              quantityButtonProps={{...quantityButtonProps, maxQuantity: maxQuantity(shelf)}}
              quantityButtonStyles={quantityButtonStyles}
              validationStatus={validationStatus}
            />
          )
        })}
      </Row>
    )
  }

  return (
    <Carousel
      arrows={false}
      containerProps={containerProps}
      customButtonGroup={<CustomButtonGroup showArrows={showArrows} {...customButtonGroupProps} />}
      dotListClass={showArrows && styles.dotList}
      renderButtonGroupOutside
      responsive={responsive}
      showDots
      {...carouselProps}
    >
      {items?.map((shelf, index) => {
        return (
          <MemoShelfAlvi
            {...shelf}
            buttonStatus={buttonStatus}
            catchShelfRef={(ref) => { catchShelfRef({ ref, shelf, index: index + 1 }) }}
            couponState={couponState}
            customClassName={styles.shelfStyle}
            handleOnClick={handleOnClick}
            importantWidth='100'
            isLoggedIn={isLoggedIn}
            key={index}
            orientation='vertical'
            quantityButtonProps={{...quantityButtonProps, maxQuantity: maxQuantity(shelf)}}
            quantityButtonStyles={quantityButtonStyles}
            validationStatus={validationStatus}
          />
        )
      })}
    </Carousel>
  )
}
