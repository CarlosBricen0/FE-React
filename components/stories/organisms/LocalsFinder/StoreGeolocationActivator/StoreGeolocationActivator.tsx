import { useEffect, useState } from 'react'
import { getGlobalStyle } from '../../../../helpers'
import { Site } from '../../../../shared/interfaces/Site'
import { Icon, Text } from '../../../atoms'
import { Container, Row } from '../../../layout'
import { getGeolocationPermissionIsGranted } from './helpers'

export interface GeoLocationActivatorProps {
  activationLabel?: string;
  label?: string;
  value?: GeolocationPosition;
  site?: Site;
  onClick?: () => void;
  onChange?: (value?: GeolocationPosition) => void;
}

const setBackground = (site: Site): string => {
  if(site === 'alvi') return getGlobalStyle('--color-alvi-primary-blue-gradient')
  return getGlobalStyle('--color-primary-red-header')
}

export const GeolocationActivator = ({
  activationLabel = 'Activar ubicación',
  label = 'Ubicación actual',
  site = 'unimarc',
  value,
  onChange
}: GeoLocationActivatorProps) => {
  const [active, setActive] = useState<boolean>(false)

  const iconColor = value ? getGlobalStyle('--color-base-white') : getGlobalStyle('--color-base-black')
  const iconBackground = value ? setBackground(site) : getGlobalStyle('--color-neutral-gray-light')

  const handleActivateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => { // NOSONAR
        setActive(true)
      })
    }
  }

  const handleCurrentClick = () => {
    if (!onChange) return
    if (value) {
      onChange(null)
      return
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => { // NOSONAR
        onChange(location)
      })
    }
  }

  useEffect(() => {
    if (navigator.geolocation && !active) {
      getGeolocationPermissionIsGranted().then(isGranted => {
        setActive(isGranted)
      })
    }
  }, [])

  return (
    <Row alignItems='center' gap={8}>
      <Container
        background={iconBackground}
        borderRadius='2em'
        clickable={active ? 'pointer' : 'click'}
        onClick={active ? handleCurrentClick : null}
        padding='6px'
        width={30}
      >
        <Icon
          color={iconColor}
          customSize={16}
          name='Localization'
        />
      </Container>

      <Text
        clickable={active ? 'pointer' : 'click'}
        color={active ? 'black' : 'inactive'}
        fontSize='sm'
        onClick={active ? handleCurrentClick : null}
        textDecorationLine='underline'
      >
        {label}
      </Text>

      {
        !active && (
          <Text
            clickable='pointer'
            color={site === 'unimarc' ? 'primary' : 'blue2'}
            fontSize='sm'
            fontWeight='semibold'
            onClick={handleActivateClick}
            textDecorationLine='underline'
          >
            {activationLabel}
          </Text>
        )
      }
    </Row>
  )
}
