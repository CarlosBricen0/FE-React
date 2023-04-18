import React from 'react'
import { BigScreen, SmallScreen } from '../../../../helpers'
import { Picture } from '../../../atoms'
import { Column, Row } from '../../../layout'

import styles from './GridBannersbanners.module.css'

export interface BannerPictureProps {
  banner?: {
    img?: string
  };
  linkWrapper?: React.FunctionComponent;
  nextImage?: React.FunctionComponent;
  promoData?: (props?: object) => void;
}

const BannerPicture = ({
  banner,
  linkWrapper,
  nextImage,
  promoData
}: BannerPictureProps) => {
  return (
    <Picture
      anchor
      borderRadius='12px'
      catchImgRef={(ref) => {return promoData({ref, banner})}}
      height='auto'
      linkWrapper={linkWrapper}
      nextImage={nextImage}
      src={banner.img}
      url={banner?.['url']}
      width='100%'
    />
  )
}

export interface GridBannersProps {
  banners?: Array<{ img: string, onRedirect?: () => void }>;
  linkWrapper?: React.FunctionComponent;
  nextImage?: React.FunctionComponent;
  promoData?: (props?: object) => void;
  saleChannel?: string | string[];
}

export const GridBanners = ({
  banners = [],
  linkWrapper,
  nextImage,
  promoData,
  saleChannel
}: GridBannersProps): React.ReactElement<GridBannersProps> => {
  return (
    <>
      <BigScreen>
        <Row className={styles.grid}>
          {banners?.map((banner, key) => {
            const itemSaleChannels = banner['saleChannels'] ? banner?.['saleChannels'] : ''
            if (itemSaleChannels?.includes(saleChannel) || itemSaleChannels === ''){
              return (
                <Column
                  clickable='pointer'
                  key={key}
                  onClick={banner.onRedirect}
                  padding='6px'
                >
                  <BannerPicture
                    banner={banner}
                    linkWrapper={linkWrapper}
                    nextImage={nextImage}
                    promoData={promoData}
                  />
                </Column>
              )
            }
            return null
          })}
        </Row>
      </BigScreen>

      <SmallScreen>
        <Row className={styles.gridMobile}>
          {banners?.map((banner, key) => {
            return (
              <Column
                clickable='pointer'
                height='min-content'
                key={key}
                minWidth='245px'
                onClick={banner.onRedirect}
                padding='0 12px 0px 0'
              >
                <BannerPicture
                  banner={banner}
                  linkWrapper={linkWrapper}
                  nextImage={nextImage}
                  promoData={promoData}
                />
              </Column>
            )
          })}
        </Row>
      </SmallScreen>
    </>
  )
}