import classNames from 'classnames'
import React from 'react'
import { BigScreen, getGlobalStyle, SmallScreen } from '../../../../helpers'
import { Picture } from '../../../atoms'
import { Column, Row } from '../../../layout'
import { Carousel } from '../../Carousel/Carousel'

import styles from './CarouselBanners.module.css'

export interface CarouselBannersItemProps {
  img?: string;
  image?: string;
  onRedirect?: () => void;
}

export interface CarouselBannersProps {
  banners?: CarouselBannersItemProps[];
  infinite?: boolean;
  itemsToShow?: number;
  minHeight?: string;
  linkWrapper?: React.FunctionComponent;
  nextImage?: React.FunctionComponent;
  saleChannel?: string | string [];
  showDots?: boolean;
  whitoutPadding?: boolean;
  zoomIn?: boolean;
  promoData?: (props?: object) => void;
}

export const CarouselBanners = ({
  banners = [],
  infinite = true,
  itemsToShow = 3,
  minHeight,
  linkWrapper,
  nextImage,
  saleChannel,
  showDots = true,
  whitoutPadding = false,
  zoomIn = false,
  promoData
}: CarouselBannersProps): React.ReactElement<CarouselBannersProps> => {

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: itemsToShow,
      slidesToSlide: itemsToShow
    }
  }

  return (
    <>
      <BigScreen>
        <Carousel
          deviceType='desktop'
          infinite={infinite}
          marginArrows='14px'
          opacityArrows
          responsive={responsive}
          showDots={showDots}
          ssr
        >
          {banners?.map((banner, key) => {
            const itemSaleChannels = banner['saleChannels'] ? banner?.['saleChannels'] : ''
            if (itemSaleChannels?.includes(saleChannel) || itemSaleChannels === ''){
              return (
                <Column
                  clickable='pointer'
                  key={key}
                  onClick={banner.onRedirect}
                  padding='0 10px'
                >
                  <Picture
                    anchor
                    borderRadius={getGlobalStyle('--border-radius-md')}
                    catchImgRef={(ref) => { return promoData && promoData({ ref, banner }) }}
                    customClassName={classNames(styles['carousel-item'], {
                      [styles['carousel-item--zoom-in']]: zoomIn
                    })}
                    height='auto'
                    linkWrapper={linkWrapper}
                    minHeight={`${minHeight}px`}
                    nextImage={nextImage}
                    src={banner.img}
                    url={banner?.['url']}
                    width='100%'
                  />
                </Column>
              )
            }
            return null
          }
          )}
        </Carousel>
      </BigScreen>

      <SmallScreen>
        <Row className={whitoutPadding ? styles['carouselMobile--without-padding'] : styles.carouselMobile}>
          {banners?.map((banner, key) => {
            const itemSaleChannels = banner['saleChannels'] ? banner?.['saleChannels'] : ''
            if (itemSaleChannels?.includes(saleChannel) || itemSaleChannels === ''){
              return (
                <Column
                  clickable='pointer'
                  height='min-content'
                  key={key}
                  minWidth='245px'
                  onClick={banner.onRedirect}
                  padding='0 12px 0px 0'
                >
                  <Picture
                    anchor
                    borderRadius='12px'
                    catchImgRef={(ref) => { return promoData && promoData({ ref, banner }) }}
                    customClassName={styles.carouselItem}
                    height='auto'
                    linkWrapper={linkWrapper}
                    nextImage={nextImage}
                    src={banner.img}
                    url={banner?.['url']}
                    width='100%'
                  />
                </Column>
              )
            }
            return null
          })}
        </Row>
      </SmallScreen>
    </>
  )
}