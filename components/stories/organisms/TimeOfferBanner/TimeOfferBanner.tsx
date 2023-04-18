import React, { useState } from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import { Link, Picture } from '../../atoms'
import { Container, Spacer } from '../../layout'
import { TimeCountDown } from '../../molecules'
import styles from './TimeOfferBanner.module.css'

export interface TimeOfferBannerProps {
  bannerSalesChannel?: string[]
  endDate?: Date
  href?: string
  imgSrcDesktop: string
  imgSrcMobile: string
  linkWrapper?: React.FunctionComponent;
  orderformSalesChannel?: string
  isMobile?: boolean
  startDate?: Date
}

export const TimeOfferBanner = ({
  bannerSalesChannel,
  endDate,
  href,
  imgSrcDesktop,
  imgSrcMobile,
  linkWrapper,
  orderformSalesChannel,
  startDate,
  isMobile
} : TimeOfferBannerProps) => {
  const spacerSize = isMobile ? 16 : 32
  const [hasEnded, setHasEnded] = useState(false)
  const [hidden, setHidden] = useState(true)
  const itemSaleChannels = bannerSalesChannel ? bannerSalesChannel : ''
  const handleEnd = () => {
    setHasEnded(true)
  }

  const handleStart = () => {
    setHidden(false)
  }

  if (hasEnded) return null

  if(itemSaleChannels?.includes(orderformSalesChannel) || itemSaleChannels === ''){
    return (
      <Link clickable href={href}>
        <BigScreen>
          <Container
            borderRadius={getGlobalStyle('--border-radius-md')}
            boxShadow={getGlobalStyle('--box-shadow-2xs')}
            clickable='pointer'
            hidden={hidden}
            justifyContent='center'
            maxWidth='1121px'
            position='relative'
          >
            <Picture
              height='198'
              linkWrapper={linkWrapper}
              objectFit='contain'
              src={imgSrcDesktop}
              url={href}
              width='1121'
            />
            <Container
              left='503px'
              position='absolute'
              top='66'
              width='fit-content'
            >
              <TimeCountDown
                endDate={endDate}
                onEnd={handleEnd}
                onStart={handleStart}
                startDate={startDate}
              />
            </Container>
          </Container>
        </BigScreen>

        <SmallScreen>
          <Container
            borderRadius={getGlobalStyle('--border-radius-md')}
            boxShadow={getGlobalStyle('--box-shadow-2xs')}
            className={styles.timeOfferMobile}
            clickable='pointer'
            customWidth='100'
            hidden={hidden}
            justifyContent='center'
            maxWidth='1120px'
            overflow='hidden'
            position='relative'
            width='calc(100vw - 24px)'
          >
            <Picture
              height=''
              linkWrapper={linkWrapper}
              objectFit='contain'
              src={imgSrcMobile}
              url={href}
              width='100%'
            />

            <Container
              absoluteDefault='topRight'
              padding='8px 16px'
              position='absolute'
              width='fit-content'
            >
              <TimeCountDown
                endDate={endDate}
                onEnd={handleEnd}
                onStart={handleStart}
                startDate={startDate}
              />
            </Container>
          </Container>
        </SmallScreen>
        <Spacer.Horizontal size={spacerSize} />
      </Link>
    )
  }
  return null
}
