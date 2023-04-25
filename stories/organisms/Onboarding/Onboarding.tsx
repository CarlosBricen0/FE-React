import {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  Button,
  Icon,
  Picture,
  Text
} from '../../atoms'
import {
  Column,
  Container,
  Row,
  Spacer
} from '../../layout'
import { v4 as uuid } from 'uuid'
import { getGlobalStyle } from '../../../helpers'
import { Carousel } from '../Carousel/Carousel'
import MultiCarousel from 'react-multi-carousel'
import styles from './Onboarding.module.css'

interface OnboardingPropsBanners {
  title: string;
  subtitle?: string;
  image: string;
}

export interface OnboardingProps {
  btnLabel?: string;
  banners?: OnboardingPropsBanners[];
  modalBgColor?: string;
  site?: Site
  handleClickButton: () => void;
  onClose: () => void;
}

export const Onboarding = ({
  btnLabel = 'Ver mi cotización',
  banners,
  modalBgColor = getGlobalStyle('--color-base-white'),
  site = 'unimarc',
  handleClickButton,
  onClose
}: OnboardingProps): React.ReactElement => {
  const [isLast, setIsLast] = useState(false)
  const [shortHeight, setShortHeight] = useState(false)
  const containerProps = { minHeight: '300px', maxWidth: '343px' }
  const buttonBgColor = site === 'unimarc' ? '--color-primary-red' : '--color-alvi-primary-blue-gradient'
  const titleColor = site === 'unimarc' ? '--color-primary-red' : '--color-alvi-primary-blue2'
  const carouselRef = useRef<MultiCarousel>()

  const customHandleNext = () => {
    const current = carouselRef?.current?.state?.currentSlide
    carouselRef?.current?.goToSlide(current + 1)
  }

  const getPictureHeight = () => {
    if(window.innerHeight <= 570) {
      return '50%'
    } else if (shortHeight) {
      return '80%'
    }
    return '100%'
  }

  const handleChangeButton = () => {
    if (carouselRef?.current?.state?.currentSlide === banners?.length -1) {
      setIsLast(true)
    } else {
      setIsLast(false)
    }
  }

  useEffect(() => {
    if(window.innerHeight <= 700) {
      setShortHeight(true)
    } else {
      setShortHeight(false)
    }
  }, [window.innerHeight])

  return (
    <Container
      customClassName={styles.onboardingContainer}
      customHeight='revert-layer'
      customWidth='100vw'
      justifyContent='center'
      minHeight='-webkit-fill-available'
      position='fixed'
      zIndex={getGlobalStyle('--z-index-999')}
    >
      <Container
        backgroundColor={modalBgColor}
        customClassName={styles.modalStyle}
        padding='16px'
      >
        <Column>
          <Row justifyContent='end'>
            <Column
              backgroundColor={getGlobalStyle('--color-background-gray-dark')}
              borderRadius={getGlobalStyle('--border-radius-full')}
              clickable='pointer'
              height={29}
              justifyContent='end'
              onClick={onClose}
              padding='8px'
              width={29}
            >
              <Icon
                clickable='pointer'
                color={getGlobalStyle('--color-icons-gray-dark')}
                customSize={13}
                name='Close'
              />
            </Column>
          </Row>
          {
            !shortHeight &&
            <Spacer.Horizontal size={16} />
          }
          {
            banners?.length > 0 &&
            <>
              <Container justifyContent='center'>
                <Carousel
                  afterChange={handleChangeButton}
                  arrows={false}
                  autoPlay={false}
                  carouselRef={carouselRef}
                  containerClass={styles.carouselContainerClass}
                  containerProps={containerProps}
                  deviceType='mobile'
                  draggable={false}
                  infinite={false}
                  partialVisbile={false}
                  shouldResetAutoplay={false}
                  showDots={true}
                  ssr
                  swipeable={true}
                >
                  {
                    banners.map(({title, subtitle, image}) => {
                      return (
                        <Column
                          alignItems='center'
                          justifyContent='center'
                          key={uuid}
                        >
                          <Row margin='auto'>
                            <Column alignItems='center'>
                              <Text
                                customColor={getGlobalStyle(titleColor)}
                                fontSize='lg'
                                fontWeight='semibold'
                                textAlign='center'
                              >
                                {title}
                              </Text>
                              <Text
                                color='black'
                                fontSize='lg'
                                textAlign='center'
                              >
                                {subtitle}
                              </Text>
                            </Column>
                          </Row>
                          <Spacer.Horizontal size={24} />
                          <Row
                            justifyContent='center'
                            maxWidth='280px'
                            minWidth='280px'
                            overflow='hidden'
                          >
                            <Picture
                              alt={title}
                              customClassName={styles.imgShadow}
                              height='auto'
                              src={image}
                              width={getPictureHeight()}
                            />
                          </Row>
                        </Column>
                      )
                    })
                  }
                </Carousel>
              </Container>
              {
                !shortHeight &&
                <Spacer.Horizontal size={16} />
              }
            </>
          }
          <Row justifyContent='between' padding={shortHeight ? '0 8px' : '0 8px 16px'}>
            <Column maxWidth='140px'>
              <Button
                color={getGlobalStyle('--color-text-gray-light')}
                label='Saltar'
                minWidth='43px'
                onClick={onClose}
                type='plain'
                underline='always'
              />
            </Column>
            <Column alignItems='end'>
              {
                isLast
                  ? <Button
                    borderRadius={getGlobalStyle('--border-radius-full')}
                    fontSize={getGlobalStyle('--font-size-md')}
                    fontWeight='600'
                    label={btnLabel}
                    maxWidth='150px'
                    minWidth='150px'
                    onClick={handleClickButton}
                    site={site}
                  />
                  : <Container
                    alignItems='end'
                    background={getGlobalStyle(buttonBgColor)}
                    borderRadius={getGlobalStyle('--border-radius-full')}
                    clickable='pointer'
                    height={40}
                    onClick={customHandleNext}
                    padding='8px 15px'
                    tagName='section'
                    width={40}
                  >
                    <Icon
                      clickable='pointer'
                      color={getGlobalStyle('--color-base-white')}
                      customSize={22}
                      name='ArrowRight'
                    />
                  </Container>
              }
            </Column>
          </Row>
        </Column>
      </Container>
    </Container>
  )
}