import React from 'react'
import { BigScreen, SmallScreen } from '../../../../helpers'
import { Picture } from '../../../atoms'
import { Container, Row } from '../../../layout'

import styles from './OnlyOneBanner.module.css'

export interface OnlyOneBannersProps {
  banner?: string;
  bannerSaleChannels?: string | string[];
  linkWrapper?: React.FunctionComponent;
  isPriority?: boolean;
  nextImage?: React.FunctionComponent;
  saleChannel?: string;
  url?: string;
  onRedirect?: () => void;
  promoData?: (props?: object) => void;
}

const OnlyOneBannerImage = ({
  banner,
  linkWrapper,
  isPriority,
  nextImage,
  url,
  onRedirect,
  promoData
}: OnlyOneBannersProps) => {
  return (
    <Row
      className={styles.unoSolo}
      clickable='pointer'
      customWidth='100'
      maxWidth='1120px'
    >
      <Picture
        anchor
        borderRadius='12px'
        catchImgRef={promoData}
        height='100%'
        linkWrapper={linkWrapper}
        nextImage={nextImage}
        onClick={onRedirect}
        priority={isPriority}
        src={banner}
        url={url}
        width='100%'
      />
    </Row>
  )
}

export const OnlyOneBanner = ({
  banner,
  bannerSaleChannels,
  linkWrapper,
  isPriority,
  nextImage,
  url,
  onRedirect,
  promoData,
  saleChannel
}: OnlyOneBannersProps): React.ReactElement<OnlyOneBannersProps> => {
  const itemSaleChannels = bannerSaleChannels ? bannerSaleChannels : ''
  if (itemSaleChannels.includes(saleChannel) || itemSaleChannels === ''){
    return (
      <Container justifyContent='center'>
        <BigScreen>
          <OnlyOneBannerImage
            banner={banner}
            isPriority={isPriority}
            linkWrapper={linkWrapper}
            nextImage={nextImage}
            onRedirect={onRedirect}
            promoData={promoData}
            url={url}
          />
        </BigScreen>
        <SmallScreen>
          <OnlyOneBannerImage
            banner={banner}
            isPriority={isPriority}
            linkWrapper={linkWrapper}
            nextImage={nextImage}
            onRedirect={onRedirect}
            promoData={promoData}
            url={url}
          />
        </SmallScreen>
      </Container>
    )
  }
  return null
}