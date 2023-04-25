import React, {
  FormEventHandler,
  useCallback
} from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import { Site } from '../../../../shared/interfaces/Site'
import {
  Button,
  ButtonStatus,
  Input,
  Link,
  Picture,
  Text,
  Title,
  Type
} from '../../../atoms'
import {
  Column,
  Container,
  Row
} from '../../../layout'
import { PasswordInput } from '../../../molecules'
import { Notification } from '../../../molecules/Notification/Notification'
import {
  getStatusBackgroundColor,
  getStyleFrom,
  getStyleWeight
} from './helpers/customStyles'
import styles from './LoginModalContent.module.css'

export interface LoginFormValues {
  rut: string;
  password: string;
}

export type LoginFormDirty = Partial<Record<keyof LoginFormValues, boolean>>;
export type LoginFormError = Partial<Record<keyof LoginFormValues, string>>;

export interface LoginModalContentProps {
  buttonType?: Type;
  dirty?: LoginFormDirty;
  disableButtonAlvi?: boolean;
  disableSubmit?: boolean;
  errors?: LoginFormError;
  forgotPasswordHref?: string;
  imageSrc?: string;
  infoMessage?: React.ReactNode;
  loading?: boolean;
  registerColor?: string;
  registerHref?: string;
  site?: Site;
  text?: React.ReactNode;
  title?: string;
  values?: LoginFormValues;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClose?: () => Promise<void> | void;
  onForgotPasswordClick?: () => void;
  onNotificationClose?: () => void;
  onRegisterClick?: () => void;
  onSubmit?: () => void;
}

const getButtonStatus = (loading: boolean, disableSubmit: boolean) : ButtonStatus => {
  if (loading) return 'loading'
  if (disableSubmit) return 'disabled'
  return undefined
}

export const LoginModalContent = ({
  buttonType,
  dirty,
  disableButtonAlvi,
  disableSubmit,
  errors,
  forgotPasswordHref,
  imageSrc,
  infoMessage,
  loading,
  registerHref,
  site = 'unimarc',
  title,
  values,
  onBlur,
  onChange,
  onForgotPasswordClick,
  onNotificationClose,
  onRegisterClick,
  onSubmit
}: LoginModalContentProps) => {
  const unimarcSite = site === 'unimarc'
  const hasError = useCallback(
    (field: keyof LoginFormValues) => {
      return errors?.[field] && !dirty?.[field]
    },
    [errors, dirty]
  )

  const submitButtonStatus = getButtonStatus(loading, disableSubmit || disableButtonAlvi)

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    onSubmit?.()
  }

  const statusBackground = getStatusBackgroundColor(submitButtonStatus)
  const stylesForm = getStyleFrom(unimarcSite)
  const fontWeight = getStyleWeight(unimarcSite)
  const imageHeight = unimarcSite ? '552px' : '500px'
  const buttonMarginTop = unimarcSite ? '140px 0 0 0' : '100px 0 0 0'

  return (
    <>
      <Row onSubmit={handleSubmit} tagName='form'>
        <BigScreen>
          <Column>
            <Container className={styles['imageContainer']}>
              <Picture
                alt='login-image'
                className={styles['imageContainer__image']}
                height={imageHeight}
                lineHeight={0}
                objectFit='fill'
                src={imageSrc}
                width='400px'
              />
            </Container>
          </Column>
        </BigScreen>
        <Column className={stylesForm} position='relative'>
          <Notification
            align='top-center'
            message={infoMessage}
            onClose={onNotificationClose}
            show={infoMessage != undefined}
            showCloseIcon
            site={site}
          />
          <SmallScreen>
            <Title
              customFontSize='18px'
              fontWeight='semibold'
              headingLevel='h1'
              text={title ?? '¡Te estábamos esperando!'}
            />
          </SmallScreen>
          <BigScreen>
            <Title
              customFontSize='24px'
              fontWeight='semibold'
              headingLevel='h1'
              text={title ?? '¡Te estábamos esperando!'}
            />
          </BigScreen>
          <Container margin='8px 0 0 0'>
            <Text
              fontSize='md'
              isFlex={false}
              type='span'
            >
              {unimarcSite ?
                <>
                  Utiliza el rut y contraseña de tu cuenta {' '}
                  <Text
                    fontSize='md'
                    isFlex={false}
                    type='b'
                  >Unimarc{' '}</Text>
                  o {' '}
                  <Text
                    fontSize='md'
                    isFlex={false}
                    type='b'
                  >Club Ahorro{' '}</Text>
                  y obtén todos tus beneficios.
                </>
                :
                <>
                  Utiliza el rut y contraseña de tu cuenta {' '}
                  <Text
                    fontSize='md'
                    isFlex={false}
                    type='b'
                  >Club Alvi{' '}</Text>
                  y obtén todos tus beneficios.
                </>
              }
            </Text>
          </Container>
          <Container className={styles['formGroup']} margin='20px 0 0 0'>
            <Row margin='0px 0px 8px 0'>
              <Text
                fontSize='sm'
                fontWeight='bold'
                htmlFor='rut'
                type='label'
              >
                Rut
              </Text>
            </Row>
            <Input
              customClassName={styles['input--hideAutocomplete']}
              fontSize={unimarcSite ? 'base' : 'lg'}
              id='rut'
              name='rut'
              onBlur={onBlur}
              onChange={onChange}
              placeholder='Ingresa tu número de rut'
              required
              textAlign='left'
              value={values?.rut}
              width='100%'
            />
          </Container>
          {hasError('rut') && (
            <Text color='error' fontSize='sm'>
              {errors?.['rut']}
            </Text>
          )}
          <Container className={styles['formGroup']} margin='16px 0 0 0'>
            <Row margin='0px 0px 8px 0px'>
              <Text
                fontSize='sm'
                fontWeight='bold'
                htmlFor='password'
                type='label'
              >
                Contraseña
              </Text>
            </Row>
            <PasswordInput
              customClassName={styles['input--hideAutocomplete']}
              id='password'
              name='password'
              onChange={onChange}
              placeholder='Ingresa tu contraseña'
              required
              textAlign='left'
              type='password'
              value={values?.password}
              width='100%'
            />
          </Container>
          {hasError('password') && (
            <Text color='error' fontSize='sm'>
              {errors?.['password']}
            </Text>
          )}
          <Container margin='12px 0 0 0'>
            <Link
              customClassName={styles[unimarcSite ? 'forgotPassword' : 'forgotPasswordAlvi']}
              href={forgotPasswordHref ?? '#'}
              onClick={onForgotPasswordClick}
              underline='always'
            >
              Olvidé mi contraseña
            </Link>
          </Container>
          <Container margin={buttonMarginTop}>
            <Button
              actionType='submit'
              background={getGlobalStyle(unimarcSite ? '--color-primary-red-header' : statusBackground)}
              borderRadius='2rem'
              fontWeight={fontWeight}
              label='Ingresar'
              site={site}
              size='large'
              status={submitButtonStatus}
              type={buttonType}
              width='100%'
            />
          </Container>
          <Container className={styles['register']} margin='12px 0 0 0'>
            ¿Aún no tienes cuenta?&nbsp;
            <Link
              color={site === 'unimarc' ? getGlobalStyle('--color-primary-red') : getGlobalStyle('--color-alvi-primary-blue')}
              customClassName={styles['register__link']}
              href={registerHref ?? '#'}
              onClick={onRegisterClick}
              underline='always'
            >
              Regístrate
            </Link>
          </Container>
        </Column>
      </Row>
    </>
  )
}
