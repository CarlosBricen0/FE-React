import React from 'react'
import {
  Button,
  Color,
  Divider,
  Picture,
  Text,
  Title
} from '../../atoms/index'
import {
  Column,
  Container,
  Row
} from '../../layout'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import styles from './ErrorView.module.css'

export interface ErrorImageProp {
  img: string;
  width: {
    desktop: string,
    mobile: string
  };
  height: {
    desktop: string,
    mobile: string,
  };
  title?: string;
}

export interface ErrorViewProps {
  background?: string;
  backgroundButton?: string;
  colorErrorType?: Color;
  body1?: string;
  body2?: string;
  buttonLabel?: string;
  errorImage?: ErrorImageProp;
  errorType?: '404' | '500';
  site?: 'alvi' | 'unimarc';
  redirect?: boolean;
  title?: string;
  route?: string;
  onClick: () => void;
}

export const ErrorView = ({
  background = getGlobalStyle('--color-background-white'),
  redirect = true,
  body1 = 'Tuvimos un problema',
  body2 = !redirect ? 'Pronto lo solucionaremos. Intenta recargando la página' : 'No encontramos lo que estás buscando.',
  buttonLabel = !redirect ? 'Recargar' : 'Ir al home',
  errorImage,
  colorErrorType = 'gray',
  backgroundButton,
  errorType = '500',
  title = 'Lo sentimos',
  onClick
}: ErrorViewProps) => {
  const errorImageValidation = errorImage?.img
  const customColorError = 'neutral-dark'

  return (
    <Container
      alignItems='center'
      background={background}
      justifyContent='center'
      tagName='section'
    >
      <BigScreen>
        <Row alignItems='center' maxWidth={getGlobalStyle('--width-max-desktop')}>
          {/* error details */}
          <Column alignItems='center' minWidth='670px'>
            <Title
              color={getGlobalStyle('--color-neutral-black')}
              customFontSize={getGlobalStyle('--font-size-titles-xl')}
              fontWeight='semibold'
              headingLevel='h1'
              size='small'
              textAlign='center'
            >
              {title}
            </Title>
            <Text
              clickable='pointer'
              color={colorErrorType}
              customClassName={styles.errorType}
              fontWeight='semibold'
              textAlign='center'
            >
              {errorType}
            </Text>
            <Text
              clickable='pointer'
              color='black'
              fontSize='3xl'
              fontWeight='semibold'
              textAlign='center'
            >
              {body1}
            </Text>
            <Text
              clickable='pointer'
              color={colorErrorType}
              fontSize='xl'
              fontWeight='semibold'
              textAlign='center'
            >
              {body2}
            </Text>
            <Divider color={getGlobalStyle('--color-neutral-white')} verticalMargin={17} />
            <Button
              background={backgroundButton}
              borderRadius='50px'
              fontWeight='600'
              height='45px'
              label={buttonLabel}
              onClick={onClick}
              size='xs'
              width='202px'
            />
          </Column>

          {/* error image */}
          <Column alignItems='center'>
            {(!errorImageValidation && errorType === '404') &&
              <Picture
                height='363px'
                src='https://unimarcdev.vtexassets.com/arquivos/404-desktop.png'
                title='Error 404'
                width='363px'
              />
            }

            {(!errorImageValidation && errorType === '500') &&
              <Picture
                height='438px'
                src='https://unimarcdev.vtexassets.com/arquivos/500-desktop.png'
                title='error 500'
                width='312px'
              />
            }

            {errorImageValidation && (
              <Picture
                height={errorImage?.height?.desktop}
                src={errorImage?.img}
                title={errorImage?.title}
                width={errorImage?.width?.desktop}
              />
            )}
          </Column>
        </Row>
      </BigScreen>

      <SmallScreen>
        <Row isWrap maxWidth={getGlobalStyle('--width-max-mobile')} >
          {/* error image */}
          <Column alignItems='center'>
            {(!errorImageValidation && errorType === '404') &&
              <Picture
                height='165px'
                src='https://unimarcdev.vtexassets.com/arquivos/404-mobile.png'
                title='Error 404'
                width='165px'
              />
            }

            {(!errorImageValidation && errorType === '500') &&
              <Picture
                height='194px'
                src='https://unimarcdev.vtexassets.com/arquivos/500-mobile.png'
                title='Error 500'
                width='141px'
              />
            }

            {errorImageValidation && (
              <Picture
                height={errorImage?.height?.mobile}
                src={errorImage?.img}
                title={errorImage?.title}
                width={errorImage?.width?.mobile}
              />
            )}
          </Column>
          {/* error details */}
          <Column alignItems='center'>
            <Text
              clickable='pointer'
              color='black'
              fontSize='3xl'
              fontWeight='semibold'
              textAlign='center'
            >
              {title}
            </Text>
            <Text
              clickable='pointer'
              color='gray'
              fontSize='9xl'
              fontWeight='semibold'
              textAlign='center'
            >
              {errorType}
            </Text>
            <Text
              clickable='pointer'
              color='black'
              fontSize='lg'
              fontWeight='semibold'
              textAlign='center'
            >
              {body1}
            </Text>
            <Column alignItems='center' maxWidth='70%'>
              <Text
                clickable='pointer'
                color='gray'
                fontSize='md'
                fontWeight='semibold'
                textAlign='center'
              >
                {body2}
              </Text>
            </Column>
            <Divider color={getGlobalStyle('--color-neutral-white')} verticalMargin={17} />
            <Button
              background={backgroundButton}
              borderRadius='50px'
              fontWeight='600'
              height='35px'
              label={buttonLabel}
              onClick={onClick}
              size={'md'}
              width='321px'
            />
          </Column>
        </Row>
      </SmallScreen>
    </Container>
  )
}