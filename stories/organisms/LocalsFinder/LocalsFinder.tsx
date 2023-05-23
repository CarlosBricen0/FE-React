import {
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import { Text, Icon } from '../../atoms'
import {
  Column,
  Container,
  Row
} from '../../layout'
import { Modal } from '../../molecules'
import { StoreBox } from './StoreBox/StoreBox'
import { StoreList } from './StoreList/StoreList'
import { StoreZoneFilter } from './StoreZoneFilter/StoreZoneFilter'
import { GeolocationActivator } from './StoreGeolocationActivator/StoreGeolocationActivator'
import { LocalsFinderLoader } from './LocalsFinderLoader/LocalsFinderLoader'
import {
  LocalsFinderItem,
  LocalsFinderStore,
  useLocalsFinder
} from './LocalsFinder.helper'
import styles from './LocalsFinder.module.css'

export interface LocalsFinderProps {
  children?: ReactNode;
  distance?: number;
  isFailed?: boolean;
  isLoading?: boolean;
  items?: LocalsFinderItem[];
  selected?: LocalsFinderStore;
  site?: Site;
  onLocationChange?: (location: GeolocationPosition) => void;
  onRetryClick?: () => void;
  onSelectedChange?: (selected: LocalsFinderStore) => void;
  onStoreListButtonClick?: (store: LocalsFinderStore) => void;
  onStoresChange?: (stores: LocalsFinderStore[]) => void;
}

export const LocalsFinder = ({
  children,
  distance,
  isFailed,
  isLoading,
  items = [],
  selected,
  site = 'unimarc',
  onLocationChange,
  onRetryClick,
  onSelectedChange,
  onStoreListButtonClick,
  onStoresChange
}: LocalsFinderProps) => {
  const [commune, setCommune] = useState<string>()
  const [location, setLocation] = useState<GeolocationPosition>()
  const [region, setRegion] = useState<string>()
  const [height, setHeight] = useState<string>('100vh')

  const list = useRef<HTMLDivElement>()

  const {
    communes,
    locals,
    regions
  } = useLocalsFinder({
    filters: {
      commune,
      location,
      region
    },
    items
  })

  const handleSelectedClean = () => {
    if (onSelectedChange) {
      onSelectedChange(null)
    }
  }

  const handleCommuneChange = (commune: string) => {
    setCommune(commune)
    setLocation(null)

    if (onSelectedChange) {
      onSelectedChange(null)
    }
  }

  const handleGeolocationChange = (locationInput?: GeolocationPosition) => {
    setCommune(null)
    setRegion(null)
    setLocation(locationInput)
  }

  const handleRegionChange = (region: string) => {
    setRegion(region)
    setLocation(null)

    if (onSelectedChange) {
      onSelectedChange(null)
    }
  }

  const handleRetryClick = () => {
    if (onRetryClick) {
      onRetryClick()
    }
  }

  const handleStoreBoxButtonClick = (store: LocalsFinderStore) => {
    if (onStoreListButtonClick) {
      onStoreListButtonClick(store)
    }
  }

  const handleStoreBoxShowDetailsButtonClick = (store: LocalsFinderStore) => {
    if (!onSelectedChange) return

    if (selected?.key != store.key) {
      onSelectedChange(store)
    } else {
      onSelectedChange(null)
    }

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (list.current && selected) {
      list.current.scrollTop = 0
      const button = list.current.querySelectorAll('button').item(0)
      if (button) {
        const boundingClientRect = button.getBoundingClientRect()
        list.current.scrollTop = boundingClientRect.top - 600
      }
    }
  }, [selected])

  useEffect(() => {
    if (onLocationChange) {
      onLocationChange(location)
    }
  }, [location])

  useEffect(() => {
    if (onStoresChange) {
      onStoresChange(locals)
    }
  }, [region, commune])

  useEffect(() => {
    if (onStoresChange) {
      onStoresChange(locals)
    }
  }, [isLoading])

  useEffect(() => {
    const outerHeight = `${window.outerHeight}px`

    window.addEventListener('resize', () => {
      const innerHeight = `${window.innerHeight}px`
      if (innerHeight != height) {
        setHeight(innerHeight)
      }
    })

    setHeight(outerHeight)
  }, [])

  if (isLoading) {
    return (
      <LocalsFinderLoader>
        {children}
      </LocalsFinderLoader>
    )
  }

  return (
    <>
      <BigScreen>
        <Row
          gap={18}
          margin='64px 0 16px'
          maxWidth='1315px'
        >
          <Column gap={16} maxWidth='398px'>
            <Column
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow={getGlobalStyle('--box-shadow-2xs')}
              padding='16px'
            >
              <StoreZoneFilter
                commune={commune}
                communes={communes}
                onCommuneChange={handleCommuneChange}
                onRegionChange={handleRegionChange}
                region={region}
                regions={regions}
                title='Buscar local'
              />

              <GeolocationActivator
                onChange={handleGeolocationChange}
                site={site}
                value={location}
              />
            </Column>

            <Container
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow={getGlobalStyle('--box-shadow-2xs')}
              padding='0 0 0 16px'
            >
              <Container
                customClassName={styles.scrollBarUnimarc}
                margin='0 8px 0 0'
                maxHeight='405px'
                padding='16px 8px 16px 0'
                ref={list}
              >
                <StoreList
                  isFailed={isFailed}
                  items={locals}
                  onRetryClick={handleRetryClick}
                  onStoreBoxButtonClick={handleStoreBoxButtonClick}
                  onStoreBoxShowDetailsClick={handleStoreBoxShowDetailsButtonClick}
                  selected={selected}
                  site={site}
                  title='Nuestros locales'
                />
              </Container>
            </Container>
          </Column>

          <Container
            backgroundColor={getGlobalStyle('--color-base-white')}
            borderRadius={getGlobalStyle('--border-radius-2sm')}
            boxShadow={getGlobalStyle('--box-shadow-2xs')}
            overflow='hidden'
          >
            {children}
          </Container>
        </Row>
      </BigScreen>

      <SmallScreen>
        <Column padding='40px 0 0'>
          <Row
            backgroundColor={getGlobalStyle('--color-base-white')}
            gap={8}
            padding='16px'
          >
            <Container
              clickable='pointer'
              hidden={!selected}
              maxWidth='20px'
              onClick={handleSelectedClean}
              padding='4px'
            >
              <Icon
                clickable='pointer'
                color={getGlobalStyle('--color-text-black')}
                customSize={16}
                name='ArrowBackNavigate'
                onClick={handleSelectedClean}
              />
            </Container>

            <Text
              fontSize='lg'
              fontWeight='semibold'
              lineHeight='22px'
            >
              {selected ? 'Detalle del local' : 'Locales y horarios'}
            </Text>
          </Row>

          <Column gap={16} padding={selected ? null : '16px'}>
            <Column
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow={getGlobalStyle('--box-shadow-2xs')}
              hidden={!!selected}
              padding='16px'
            >
              <StoreZoneFilter
                commune={commune}
                communes={communes}
                onCommuneChange={handleCommuneChange}
                onRegionChange={handleRegionChange}
                region={region}
                regions={regions}
                title='Buscar local'
              />

              <GeolocationActivator
                onChange={handleGeolocationChange}
                site={site}
                value={location}
              />
            </Column>

            <Container hidden={!!selected}>
              <StoreList
                isFailed={isFailed}
                items={locals}
                onRetryClick={handleRetryClick}
                onStoreBoxButtonClick={handleStoreBoxButtonClick}
                onStoreBoxShowDetailsClick={handleStoreBoxShowDetailsButtonClick}
                selected={selected}
              />
            </Container>

            <Container hidden={!selected}>
              {children}
            </Container>
          </Column>

          <Modal
            dragRatio={0.1}
            fullScreen
            hiddenX
            hideOverlay
            isOpen={!!selected}
            marginFullScreen={`calc(${height} - 250px) 0 0`}
            minFullscreenTranslation={137}
            toggle={handleSelectedClean}
          >
            <Container padding='8px 0'>
              <StoreBox
                address={selected?.address}
                closedAt={selected?.closedAt}
                details={selected?.details}
                distance={distance}
                hideDetailToggle
                isClosed={selected?.closed}
                isOpen
                onButtonClick={() => {handleStoreBoxButtonClick(selected)}}
                site={site}
                title={selected?.title}
              />
            </Container>
          </Modal>
        </Column>
      </SmallScreen>
    </>
  )
}
