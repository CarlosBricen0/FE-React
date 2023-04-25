import { getGlobalStyle } from '../../../../../helpers'
import {
  Button,
  Divider,
  Icon,
  Text,
  Title
} from '../../../../atoms'
import { Column, Container } from '../../../../layout'

export interface StoreListFailedProps {
  title?: string;
  onClick?: () => void;
}

export const StoreListFailed = ({ title, onClick }: StoreListFailedProps) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Column alignItems='center' gap={30}>
      <Column gap={6}>
        <Title
          fontWeight='semibold'
          headingLevel='h3'
          textAlign='left'
        >
          {title}
        </Title>

        <Divider color={getGlobalStyle('--color-background-gray')} verticalMargin={0} />
      </Column>

      <Container borderRadius='20px' justifyContent='center'>
        <Icon customSize={135} name='MapExclamationCircle' />
      </Container>

      <Text fontWeight='semibold' textAlign='center'>
        Lo sentimos, no hemos podido cargar los locales. Intenta nuevamente.
      </Text>

      <Button
        borderRadius='24px'
        fontWeight='600'
        height='45px'
        label='Reintentar'
        onClick={handleButtonClick}
        size='xs'
      />
    </Column>
  )
}
