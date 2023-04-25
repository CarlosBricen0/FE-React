import React from 'react'
import { Row } from '../../layout'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'
import { Carousel, CarouselDataProps } from '../Carousel/Carousel'
import { ShelfProps, MemoShelf } from '../Shelf/Shelf'
import { ArrowProps, CustomButtonGroup } from '../Carousel/Arrows/CustomButtonGroup'
import { QuantityButtonProps, QuantityButtonStylesProps } from '../../molecules'
import styles from './shelfCarousel.module.css'
import { AvailableProduct } from '../../../shared/interfaces/IIntelligenceSearch'
import { Product } from '../../../shared/interfaces/IProducts'
import { ButtonStatus } from '../../atoms'

export interface CatchShelfRefProps {
  ref: object;
  shelf: ShelfProps;
  index?: number;
}

export interface ShelfCarouselProps {
  buttonLabel?: string;
  buttonStatus?: ButtonStatus;
  buttonVariant?: 'button' | 'input';
  carouselProps?: Omit<CarouselDataProps, 'children'>;
  containerProps?: ChildrenBaseContainerProps;
  customButtonGroupProps?: ArrowProps;
  customClassNameItem?: string;
  customClassNameShelf?: string;
  customClassNameSlider?: string;
  isCart?: boolean;
  isMobile?: boolean;
  items: ShelfProps[] | AvailableProduct[] | Product[];
  itemsToShow?: number;
  linkWrapper?: React.FunctionComponent;
  nextImage?: React.FunctionComponent;
  quantityButtonProps?: Omit<QuantityButtonProps, 'value'>;
  quantityButtonStyles?: QuantityButtonStylesProps;
  showArrows?: boolean;
  showCouponButton?: boolean;
  showLikeListButtons?: boolean;
  slidesToSlide?: number;
  catchShelfRef?: (props?: CatchShelfRefProps) => void;
  handleOnClick?: (props?: { itemId: string }) => void;
  onClickProduct?: (props?: { product: object, index: number }) => void;
}

export const ShelfCarousel = ({
  buttonLabel,
  buttonStatus,
  buttonVariant,
  carouselProps,
  containerProps,
  customButtonGroupProps,
  customClassNameItem,
  customClassNameShelf,
  customClassNameSlider,
  isCart = false,
  isMobile,
  items,
  itemsToShow = 1,
  linkWrapper,
  nextImage,
  quantityButtonProps,
  quantityButtonStyles,
  showArrows,
  showCouponButton,
  showLikeListButtons = false,
  slidesToSlide = 1,
  catchShelfRef,
  handleOnClick,
  onClickProduct
}: ShelfCarouselProps) => {
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

  if (isMobile || items?.length <= 4) {
    return (
      <Row
        customClassName={styles.carouselProducts}
        overflow='auto'
        padding='0 0 10px'
        {...containerProps}
      >
        {items?.map((shelf, index) => {
          const { quantityButtonProps: quantityButtonPropsShelf } = shelf
          return (
            <MemoShelf
              {...shelf}
              buttonLabel={buttonLabel}
              buttonStatus={shelf?.buttonStatus || buttonStatus}
              buttonVariant={buttonVariant}
              catchShelfRef={(ref) => { catchShelfRef({ ref, shelf, index: index + 1 }) }}
              customClassName={customClassNameShelf}
              handleOnClick={handleOnClick}
              isCart={isCart}
              key={index}
              likeListButtons={showLikeListButtons}
              linkWrapper={linkWrapper}
              minWidth='187px'
              nextImage={nextImage}
              onClickProduct={() => { handleClickProduct({ product: shelf, index: index + 1 }) }}
              quantityButtonProps={{
                ...quantityButtonPropsShelf,
                ...quantityButtonProps
              }}
              quantityButtonStyles={quantityButtonStyles}
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
      itemClass={customClassNameItem}
      renderButtonGroupOutside
      responsive={responsive}
      showDots
      sliderClass={customClassNameSlider}
      {...carouselProps}
    >
      {items?.map((shelf, index) => {
        const { quantityButtonProps: quantityButtonPropsShelf } = shelf

        return (
          <MemoShelf
            {...shelf}
            buttonLabel={buttonLabel}
            buttonStatus={shelf?.buttonStatus || buttonStatus}
            buttonVariant={buttonVariant}
            catchShelfRef={(ref) => { catchShelfRef({ ref, shelf, index: index + 1 }) }}
            customClassName={`${styles.shelfStyle}} ${customClassNameShelf}`}
            handleOnClick={handleOnClick}
            importantWidth='100'
            isCart={isCart}
            key={index}
            linkWrapper={linkWrapper}
            nextImage={nextImage}
            onClickProduct={() => { handleClickProduct({ product: shelf, index: index + 1 }) }}
            quantityButtonProps={{
              ...quantityButtonPropsShelf,
              ...quantityButtonProps
            }}
            quantityButtonStyles={quantityButtonStyles}
            showCouponButton={showCouponButton}
          />
        )
      })}
    </Carousel >
  )
}