import React from 'react'
import { CarouselBanners, CarouselBannersProps } from './CarouselBanners'
import { GridBanners, GridBannersProps } from './GridBanners'
import { OnlyOneBanner, OnlyOneBannersProps } from './OnlyOneBanner'
import { OnlyThreeBanner } from './OnlyThreeBanner'
import { CollageBanner } from './CollageBanner'

export enum BannersLayoutEnum {
  Carousel = 'carousel',
  Collage = 'collage',
  Grid = 'grid',
  OccasionOfConsumption = 'occasion of consumption',
  OnlyOne = 'uno solo'
}

export interface BannersProps {
  bannerOnlyOne?: OnlyOneBannersProps;
  bannersCarousel?: CarouselBannersProps['banners'];
  bannersGrid?: GridBannersProps['banners'];
  imageBanner?: object;
  infinite?: boolean
  isPriority?: boolean;
  itemsToShow?: number;
  layout: BannersLayoutEnum;
  minHeight?: string;
  linkWrapper?: React.FunctionComponent;
  maxWidth?: string;
  nextImage?: React.FunctionComponent;
  saleChannel?: string;
  showDots?: boolean;
  zoomIn?: boolean;
  catchPromoData?: (props?: object) => void;
}

export const Banners = ({
  bannerOnlyOne,
  bannersCarousel,
  bannersGrid,
  imageBanner,
  infinite,
  isPriority = false,
  itemsToShow,
  layout,
  maxWidth = '1120px',
  minHeight,
  linkWrapper,
  nextImage,
  saleChannel,
  showDots = true,
  zoomIn = false,
  catchPromoData
}: BannersProps): React.ReactElement<BannersProps> => {
  return (
    <>
      {layout === 'uno solo' &&
        <OnlyOneBanner
          {...bannerOnlyOne}
          bannerSaleChannels={imageBanner?.['saleChannels']}
          isPriority={isPriority}
          linkWrapper={linkWrapper}
          nextImage={nextImage}
          promoData={catchPromoData}
          saleChannel={saleChannel}
        />
      }
      {(layout === 'grid') &&
        <GridBanners
          banners={bannersGrid}
          linkWrapper={linkWrapper}
          nextImage={nextImage}
          promoData={catchPromoData}
          saleChannel={saleChannel}
        />
      }
      {layout === 'occasion of consumption' &&
        <OnlyThreeBanner
          banners={bannersGrid}
          linkWrapper={linkWrapper}
          nextImage={nextImage}
          promoData={catchPromoData}
        />
      }
      {layout === 'carousel' &&
        <CarouselBanners
          banners={bannersCarousel}
          infinite={infinite}
          itemsToShow={itemsToShow}
          linkWrapper={linkWrapper}
          minHeight={minHeight}
          nextImage={nextImage}
          promoData={catchPromoData}
          saleChannel={saleChannel}
          showDots={showDots}
          zoomIn={zoomIn}
        />
      }
      {layout === 'collage' &&
        <CollageBanner
          banners={bannersGrid}
          linkWrapper={linkWrapper}
          maxWidth={maxWidth}
          nextImage={nextImage}
          promoData={catchPromoData}
          saleChannel={saleChannel}
        />
      }
    </>
  )
}