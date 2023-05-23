import React from 'react'
import { BigScreen, SmallScreen } from '../../../../helpers'
import { Column, Row } from '../../../layout'
import { Picture } from '../../../atoms'
import { Carousel } from '../../Carousel/Carousel'

export interface CollageBannerProps {
  autoPlay?: boolean;
  banners?: Array<{ img: string, url?: string, onRedirect?: () => void }>;
  maxWidth?: string;
  linkWrapper?: React.FunctionComponent;
  nextImage?: React.FunctionComponent;
  promoData?: (props?: object) => void;
  saleChannel?: string | string[];
}

export const CollageBanner = ({
  autoPlay = true,
  banners = [],
  maxWidth,
  linkWrapper,
  nextImage,
  promoData
}: CollageBannerProps): React.ReactElement<CollageBannerProps> => {
  const containerProps = { maxWidth: '1120px', minHeight: '450px' }

  return (
    <>
      <BigScreen>
        <Row
          gap='20px'
          isWrap
          justifyContent='between'
          maxWidth={maxWidth}
        >
          {banners?.map((banner) => {
            return (
              <Column
                clickable='pointer'
                key={banner?.img}
                onClick={banner.onRedirect}
                width='fit-content'
              >
                <Picture
                  anchor
                  borderRadius='12px'
                  catchImgRef={(ref) => {return promoData({ref, banner})}}
                  height='auto'
                  linkWrapper={linkWrapper}
                  nextImage={nextImage}
                  src={banner?.img}
                  url={banner?.url}
                  width='fit-content'
                />
              </Column>
            )
          })}
        </Row>
      </BigScreen>
      <SmallScreen>
        <Carousel
          arrows={false}
          autoPlay={autoPlay}
          containerProps={containerProps}
          deviceType={'mobile'}
          focusOnSelect
          infinite
          opacityArrows
          pauseOnHover
          showDots
          ssr
        >
          {banners?.map((banner, index) => {
            return (
              <Picture
                anchor
                catchImgRef={(ref) => {
                  return promoData({ ref, banner })
                }}
                height='100%'
                key={banner?.img}
                linkWrapper={linkWrapper}
                nextImage={nextImage}
                priority={index === 0}
                src={banner?.img}
                style={{
                  cursor: 'pointer',
                  height: '100%',
                  width: '100%',
                  padding: '0 5px'
                }}
                title={`collage-${index}`}
                url={banner?.url}
                width='100%'
              />
            )
          })}
        </Carousel>
      </SmallScreen>
    </>
  )
}