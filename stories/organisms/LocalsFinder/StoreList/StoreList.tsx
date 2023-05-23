import React, { useState } from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import { Site } from '../../../../shared/interfaces/Site'
import {
  Button,
  Divider,
  Icon,
  Title
} from '../../../atoms'
import {
  Column,
  Container,
  Row
} from '../../../layout'
import { StoreBox } from '../StoreBox/StoreBox'
import { StoreListFailed } from './StoreListFailed/StoreListFailed'

export interface StoreListItems {
  address: string;
  closed: boolean;
  closedAt: string;
  title: string;
  key: string;
  details: string[][];
}

export interface StoreListProps {
  isFailed?: boolean;
  items?: StoreListItems[];
  selected?: StoreListItems;
  title?: string;
  site?: Site;
  onRetryClick?: () => void;
  onStoreBoxButtonClick?: (store?: StoreListItems) => void;
  onStoreBoxShowDetailsClick?: (store?: StoreListItems) => void;
}

export const StoreList = ({
  isFailed,
  items = [],
  selected,
  site = 'unimarc',
  title = 'Buscar tienda',
  onRetryClick,
  onStoreBoxButtonClick,
  onStoreBoxShowDetailsClick
}: StoreListProps) => {
  const [slice, setSlice] = useState<number>(10)

  const handleButtonClick = (store: StoreListItems) => {
    return () => {
      if (onStoreBoxButtonClick) {
        onStoreBoxButtonClick(store)
      }
    }
  }

  const handleDetailClick = (store: StoreListItems) => {
    return () => {
      if (onStoreBoxShowDetailsClick) {
        onStoreBoxShowDetailsClick(store)
      }
    }
  }

  const handleLoadMore = () => {
    setSlice(slice + 10)
  }

  const handleStoreListFailedClick = () => {
    if (onRetryClick) {
      onRetryClick()
    }
  }

  if (isFailed) {
    return (
      <StoreListFailed onClick={handleStoreListFailedClick} title={title} />
    )
  }

  return (
    <Column gap={6}>
      <BigScreen>
        <>
          <Title fontWeight='semibold' headingLevel='h3'>
            {title}
          </Title>

          <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={0} />

          {
            Array.isArray(items) && items?.map((item, index) => {
              return (
                <React.Fragment key={`${item.title}`}>
                  {
                    index > 0 && (
                      <BigScreen>
                        <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={4} />
                      </BigScreen>
                    )
                  }

                  <StoreBox
                    address={item.address}
                    closedAt={item.closedAt}
                    details={item.details}
                    isClosed={item.closed}
                    isOpen={selected?.key === item.key}
                    key={item.key}
                    onButtonClick={handleButtonClick(item)}
                    onShowDetailsClick={handleDetailClick(item)}
                    site={site}
                    title={item.title}
                  />
                </React.Fragment>
              )
            })
          }
        </>
      </BigScreen>

      <SmallScreen>
        <>
          {
            Array.isArray(items) && items?.slice(0, slice).map((item, index) => {
              return (
                <React.Fragment key={item.title}>
                  {
                    index > 0 && (
                      <BigScreen>
                        <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={4} />
                      </BigScreen>
                    )
                  }

                  <Row
                    backgroundColor={getGlobalStyle('--color-base-white')}
                    borderRadius={getGlobalStyle('--border-radius-2sm')}
                    onClick={handleDetailClick(item)}
                    padding='16px'
                  >
                    <StoreBox
                      address={item.address}
                      closedAt={item.closedAt}
                      details={item.details}
                      hideDetailToggle
                      isClosed={item.closed}
                      isOpen={selected?.key === item.key}
                      key={item.key}
                      onButtonClick={handleButtonClick(item)}
                      onShowDetailsClick={handleDetailClick(item)}
                      site={site}
                      title={item.title}
                    />

                    <Column margin='auto' maxWidth='16px'>
                      <Icon color={getGlobalStyle('--color-neutral-gray-dark')} name='ArrowRight'/>
                    </Column>
                  </Row>
                </React.Fragment>
              )
            })
          }

          <Container hidden={items.length < slice} padding='24px 0'>
            <Button
              borderRadius={getGlobalStyle('--border-radius-xl')}
              fullWidth
              label='Cargar más resultados'
              onClick={handleLoadMore}
              site={site}
              size='medium'
              type='secondary'
            />
          </Container>
        </>
      </SmallScreen>
    </Column>
  )
}
