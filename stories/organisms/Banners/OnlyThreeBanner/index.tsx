import { BigScreen, SmallScreen } from '../../../../helpers'
import { Picture } from '../../../atoms'
import { Column, Row } from '../../../layout'
import { BannerPictureProps, GridBannersProps } from '../GridBanners'
import styles from './OnlyThreeBanner.module.css'

const BannerPicture = ({
  banner,
  linkWrapper,
  nextImage,
  promoData
}: BannerPictureProps) => {
  return (
    <Picture
      anchor
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

export const OnlyThreeBanner = ({
  banners = [],
  linkWrapper,
  nextImage,
  promoData
}: GridBannersProps) => {
  return (
    <>
      <BigScreen>
        <Row padding='9px 10px 20px 10px'>
          {banners?.map((banner, key) => {
            return (
              <Column
                className={styles.desktop}
                clickable='pointer'
                key={key}
                onClick={banner.onRedirect}
                padding='0px 10px 0px 10px'
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
      </BigScreen>

      <SmallScreen>
        <Column padding={'0px 28px 8px 28px'}>
          {banners?.map((banner, key) => {
            return (
              <Row
                clickable='pointer'
                height='min-content'
                justifyContent='center'
                key={key}
                minWidth='245px'
                onClick={banner.onRedirect}
                padding={'0px 0px 24px 0px'}
              >
                <BannerPicture
                  banner={banner}
                  linkWrapper={linkWrapper}
                  nextImage={nextImage}
                  promoData={promoData}
                />
              </Row>
            )
          })}
        </Column>
      </SmallScreen>
    </>
  )
}