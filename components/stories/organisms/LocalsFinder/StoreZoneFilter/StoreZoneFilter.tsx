import {
  ChangeEvent,
  useEffect,
  useRef
} from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import { Divider, Title } from '../../../atoms'
import { Column } from '../../../layout'
import {
  Dropdown,
  Field,
  Selector
} from '../../../molecules'

export interface StoreZoneFilterCommune {
  commune?: string;
  region?: string;
}

export interface StoreZoneFilterRegion {
  region?: string;
}

export interface StoreZoneFilterProps {
  commune?: string;
  communes?: StoreZoneFilterCommune[];
  region?: string;
  regions?: StoreZoneFilterRegion[];
  title?: string;
  onCommuneChange?: (commune: string) => void;
  onRegionChange?: (region: string) => void;
}

export const StoreZoneFilter = ({
  commune = '',
  communes = [],
  region = '',
  regions = [],
  title = 'Buscar zona',
  onCommuneChange,
  onRegionChange
}: StoreZoneFilterProps) => {
  const refCommune = useRef(null)
  const refRegion = useRef(null)

  const communesFiltered = communes.filter((commune) => {
    return region ? region === commune.region : true
  })

  const communesOptions = communesFiltered.map((commune) => {
    return commune.commune
  })

  const regionsOptions = regions.map(region => {
    return region.region
  })

  const handleCommuneSelectChange = async (event?: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target

    if (value === 'Seleccionar comuna') {
      onCommuneChange(null)
    } else {
      onCommuneChange(value)
    }
  }

  const handleCommuneSelectChangeValue = (value?: string) => {
    if (value === 'Seleccionar comuna') {
      onCommuneChange(null)
    } else {
      onCommuneChange(value)
    }
  }

  const handleRegionSelectChange = (event?: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target

    if (value === 'Seleccionar región') {
      onRegionChange(null)
    } else {
      onRegionChange(value)
    }

    refCommune.current.value = 'Seleccionar comuna'
    onCommuneChange(null)
  }

  const handleRegionSelectChangeValue = (value?: string) => {
    if (value === 'Seleccionar región') {
      onRegionChange(null)
    } else {
      onRegionChange(value)
    }

    onCommuneChange(null)
  }

  useEffect(() => {
    if (!commune && refCommune.current) {
      refCommune.current.value = 'Seleccionar comuna'
    }
    if (!region && refRegion.current) {
      refRegion.current.value = 'Seleccionar region'
    }
  }, [commune, region])

  return (
    <Column gap={8}>
      {
        title && (
          <>
            <Title fontWeight='semibold' headingLevel='h3'>
              {title}
            </Title>

            <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={0} />
          </>
        )
      }

      <Field label='Región' labelProps={{ fontSize: 'sm' }}>
        <BigScreen>
          <Column gap={6}>
            <Dropdown
              maxOptions={7}
              onChange={handleRegionSelectChangeValue}
              options={regionsOptions}
              placeholder='Seleccionar región'
              value={region}
            />

            <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={0} />
          </Column>
        </BigScreen>

        <SmallScreen>
          <Selector
            appearance='none'
            fontSize='md'
            marginLess
            onChange={handleRegionSelectChange}
            options={regionsOptions}
            placeholder='Seleccionar región'
            ref={refRegion}
          />
        </SmallScreen>
      </Field>

      <Field label='Comuna' labelProps={{ fontSize: 'sm' }}>
        <BigScreen>
          <Column gap={6}>
            <Dropdown
              maxOptions={7}
              onChange={handleCommuneSelectChangeValue}
              options={communesOptions}
              placeholder='Seleccionar comuna'
              value={commune}
            />

            <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={0} />
          </Column>
        </BigScreen>

        <SmallScreen>
          <Selector
            appearance='none'
            fontSize='md'
            marginLess
            onChange={handleCommuneSelectChange}
            options={communesOptions}
            placeholder='Seleccionar comuna'
            ref={refCommune}
          />
        </SmallScreen>
      </Field>
    </Column>
  )
}
