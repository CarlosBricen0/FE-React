import React from 'react'
import classNames from 'classnames'
import MultiCarousel, { CarouselProps, ResponsiveType } from 'react-multi-carousel'
import { Container } from '../../layout'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'
import { Dots } from './Dots'
import { CustomArrow } from './Arrows'

import 'react-multi-carousel/lib/styles.css'
import styles from './carousel.module.css'
import { PreviewDots } from './PreviewDots'

export interface CarouselDataProps extends Omit<CarouselProps, 'responsive'> {
  autoPlay?: boolean,
  carouselCards?: boolean,
  carouselRef?: React.Ref<MultiCarousel>;
  containerProps?: ChildrenBaseContainerProps;
  customArrrowClass?: string;
  marginArrows?: string;
  opacityArrows?: boolean;
  preview?: boolean;
  responsive?: ResponsiveType;
  shouldResetAutoplay?: boolean;
}

const responsiveDefault = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 1023, min: 0 },
    items: 1
  }
}

export const Carousel = ({
  autoPlay,
  carouselCards = false,
  carouselRef,
  containerClass,
  containerProps,
  customArrrowClass,
  dotListClass,
  itemClass,
  marginArrows,
  opacityArrows,
  preview = false,
  shouldResetAutoplay,
  ...carouselProps
}: CarouselDataProps): React.ReactElement<CarouselDataProps> => {
  const classCarouselCards = carouselCards ? styles.carouselCards : styles.carousel 
  if (preview) {
    return (
      <Container
        alignItems='center'
        isWrap
        justifyContent='center'
        tagName='section'
        {...containerProps}
      >
        <MultiCarousel
          containerClass={classNames(styles.carousel, containerClass)}
          customButtonGroup={<PreviewDots items={carouselProps.children} />}
          customDot={<Dots />}
          dotListClass={classNames(styles.dotList, dotListClass)}
          infinite={false}
          itemClass={classNames(styles.carouselItem, itemClass)}
          minimumTouchDrag={2}
          renderButtonGroupOutside={true}
          renderDotsOutside
          responsive={responsiveDefault}
          {...{ ...carouselProps, infinity: false }}
        />
      </Container>
    )
  }
  return (
    <Container
      alignItems='center'
      isWrap
      justifyContent='center'
      tagName='section'
      {...containerProps}
    >
      <MultiCarousel
        autoPlay={autoPlay}
        containerClass={classNames(classCarouselCards, containerClass)}
        customDot={<Dots />}
        customLeftArrow={
          <CustomArrow
            customClass={customArrrowClass}
            marginArrows={marginArrows}
            opacity={opacityArrows}
          />}
        customRightArrow={
          <CustomArrow
            customClass={customArrrowClass}
            isRight
            marginArrows={marginArrows}
            opacity={opacityArrows}
          />}
        dotListClass={classNames(styles.dotList, dotListClass)}
        itemClass={classNames(styles.carouselItem, itemClass)}
        minimumTouchDrag={2}
        ref={carouselRef}
        renderDotsOutside
        responsive={responsiveDefault}
        shouldResetAutoplay={shouldResetAutoplay}
        {...carouselProps}
      />
    </Container>
  )
}