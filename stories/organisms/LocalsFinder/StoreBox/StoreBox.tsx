import { getGlobalStyle } from '../../../../helpers'
import { Site } from '../../../../shared/interfaces/Site'
import {
  Button,
  Icon,
  Text,
  Title
} from '../../../atoms'
import {
  Column,
  Container,
  Row
} from '../../../layout'

export interface StoreBoxItems {
  details: string;
  title: string;
  value: string;
}

export interface StoreBoxProps {
  address?: string;
  closedAt?: string;
  details?: string[][];
  distance?: number;
  hideDetailToggle?: boolean;
  isClosed?: boolean;
  isOpen?: boolean;
  site?: Site;
  title?: string;
  onButtonClick?: () => void;
  onShowDetailsClick?: () => void;
}

export const StoreBox = ({
  address,
  closedAt,
  details = [],
  distance,
  hideDetailToggle,
  isClosed,
  isOpen,
  site = 'unimarc',
  title = 'Unimarc Manquehue',
  onButtonClick,
  onShowDetailsClick
}: StoreBoxProps) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    }
  }

  const handleDetailClick = () => {
    if (onShowDetailsClick) {
      onShowDetailsClick()
    }
  }

  return (
    <Column gap={hideDetailToggle ? 12 : 8}>
      <Column gap={hideDetailToggle ? 2 : 4}>
        <Title fontWeight='semibold' headingLevel='h6'>
          {title}
        </Title>

        <Text fontSize='md'>
          {address}
        </Text>
      </Column>

      <Row>
        <Row gap={4} maxWidth='50%'>
          <Text
            color={isClosed ? 'error' : 'success'}
            fontSize='sm'
            fontWeight='semibold'
          >
            {isClosed ? 'Cerrado' : 'Abierto'}
          </Text>

          {
            closedAt && (
              <Text color='neutral-dark' fontSize='sm'>
                Cierra a las {closedAt}
              </Text>
            )
          }
        </Row>

        {
          !hideDetailToggle && (
            <Row justifyContent='end'>
              <Text
                clickable='pointer'
                fontSize='sm'
                onClick={handleDetailClick}
                textDecorationLine='underline'
              >
                {isOpen ? 'Ver menos' : 'Ver más'}
              </Text>
            </Row>
          )
        }

        <Row
          gap={4}
          hidden={!distance}
          justifyContent='end'
        >
          <Icon color='black' name='Location' />

          <Text fontSize='sm'>
            {distance} km
          </Text>
        </Row>
      </Row>

      <Column hidden={!isOpen}>
        {
          details.map((detail, index) => {
            const { 0: name, 1: value } = detail

            return (
              <Row gap={4} key={index}>
                <Text fontSize='sm' fontWeight='semibold'>
                  {name}:
                </Text>

                <Text fontSize='sm'>
                  {value}
                </Text>
              </Row>
            )
          })
        }
      </Column>

      {
        isOpen && (
          <Container padding='0 16px'>
            <Button
              borderRadius={getGlobalStyle('--border-radius-xl')}
              fontWeight='600'
              fullWidth
              height='40px'
              label='Cómo llegar'
              onClick={handleButtonClick}
              site={site}
              size='xs'
            />
          </Container>
        )
      }
    </Column>
  )
}
