import React, { useMemo, useState } from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import {
  Button,
  ButtonStatus,
  Divider,
  Icon,
  Picture,
  Text,
  Title
} from '../../../atoms'
import {
  Column,
  Container,
  Row
} from '../../../layout'
import { Notification, PasswordInput } from '../../../molecules'
import { CommonStepProps, ForgotPasswordStep } from '../ForgotPasswordModal'
import { PasswordRequerimentIndicator } from './PasswordRequirementIndicator/PasswordRequerimentIndicator'

export interface ResetPasswordStepProps extends CommonStepProps<ForgotPasswordStep.ResetPassword> {
  error?: React.ReactNode;
  imageSrc?: string;
  loading?: boolean;
  text?: string;
  title?: string;
  onSubmit?: (password: string) => void;
}

export interface PasswordRequerimentIndicatorItem {
  label: string
  validate: (password: string) => boolean
}

const PASSWORD_REQUERIMENTS : PasswordRequerimentIndicatorItem[] = [
  {
    label: '1 minúscula (a-z)',
    validate: (password) => {return password !== password.toUpperCase()}
  },
  {
    label: '1 caracter especial (Ej: *·#%)',
    validate: (password) => {return !!password.match(/[^a-zA-Z0-9]/)}
  },
  {
    label: '1 número (0-9)',
    validate: (password) => {return !!password.match(/\d/)}
  },
  {
    label: '1 mayúscula (A-Z)',
    validate: (password) => {return !!password.match(/[A-Z]/)}
  },
  {
    label: 'Mínimo 8 carácteres',
    validate: (password) => {return password.length >= 8}
  }
]

const getButtonStatus = (loading: boolean, canContinue: boolean) : ButtonStatus => {
  if (loading) return 'loading'
  if (!canContinue) return 'disabled'
  return 'initial'
}

export const ResetPasswordStep = ({
  error,
  imageSrc,
  loading,
  site,
  text,
  title,
  onBack,
  onSubmit
} : ResetPasswordStepProps) : React.ReactElement<ResetPasswordStepProps> => {
  const [formState, setFormState] = useState({
    password: '',
    repeatPassword: ''
  })
  const isSamePassword = formState.password === formState.repeatPassword

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    onSubmit?.(formState.password)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      password: e.target.value
    })
  }

  const handleChangeRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      repeatPassword: e.target.value
    })
  }

  const requirements = useMemo(() => {
    return PASSWORD_REQUERIMENTS.map(requirement => {
      return {
        ...requirement,
        isValid: requirement.validate(formState.password)
      }
    })
  }, [formState.password])

  const canContinue = useMemo(() => {
    return requirements.every(requirement => {return requirement.isValid}) && isSamePassword
  }, [requirements, isSamePassword])

  const buttonStatus = getButtonStatus(loading, canContinue)

  return (
    <Column onSubmit={handleSubmit} tagName='form'>
      <BigScreen>
        <Row>
          <Column>
            <Container margin='-20px 0px -20px -20px'>
              <Picture
                alt='forgot-password-image'
                height='497px'
                objectFit='cover'
                src={imageSrc}
                width='395px'
              />
            </Container>
          </Column>
          <Column padding='24px 20px 0 40px' position='relative'>
            <Notification 
              align='top-center'
              message={error}
              show={error != undefined}
              site={site}
            />
            <Container
              margin='0 0 0 30px'
              position='absolute'
            >
              <Icon
                clickable='pointer'
                color={getGlobalStyle('--color-alvi-neutral-gray-dark')}
                name='ArrowBackNavigate'
                onClick={onBack}
                sizes='xs'
              />
            </Container>
            <Row justifyContent='start'>
              <Title
                customFontSize='24px'
                fontWeight='bold'
                text={title}
              />
            </Row>
            <Row
              justifyContent='start'
              margin='12px 0 0 0'
            >
              <Container width={'100%'}>
                <Text fontSize='md' textAlign='left'>
                  {text}
                </Text>
              </Container>
            </Row>

            <Row justifyContent='start' margin='20px 0 0 0'>
              <Column width={'100%'}>
                <Row margin='0 0 9px 0'>
                  <Text
                    fontSize='md'
                    fontWeight='semibold'
                    htmlFor='password'
                    type='label'
                  >
                    Nueva contraseña
                  </Text>
                </Row>
                <PasswordInput 
                  id='password'
                  onChange={handleChangePassword}
                  placeholder='Ingresa tu nueva contraseña'
                />
                <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={4} />
              </Column>
            </Row>
            <Column
              justifyContent='start'
              margin='12px 0 0 0'
              width={'100%'}
            >
              <Text fontSize='sm'>Debes usar al menos:</Text>
              <Row
                isWrap
              >
                {requirements.map(({label, isValid}, index) => {return (
                  <PasswordRequerimentIndicator
                    isValid={isValid}
                    key={index}
                    label={label}
                  />
                )})}
              </Row>
            </Column>
            <Row justifyContent='start' margin='8px 0 0 0'>
              <Column width={'100%'}>
                <Row margin='0 0 9px 0'>
                  <Text
                    fontSize='md'
                    fontWeight='semibold'
                    htmlFor='r-password'
                    type='label'
                  >
                    Contraseña
                  </Text>
                </Row>
                <PasswordInput 
                  id='r-password'
                  onChange={handleChangeRepeatPassword}
                  placeholder='Ingresa tu contraseña'
                />
                <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={4} />
                <Row visibility={isSamePassword ? 'hidden' : 'visible'}>
                  <Text fontSize='md'>
                    Las contraseñas deben coincidir
                  </Text>
                </Row>
              </Column>
            </Row>
            <Row justifyContent='start' margin='60px 0 0 0'>
              <Button
                actionType='submit'
                borderRadius='2rem'
                label='Confirmar nueva contraseña'
                site={site}
                size='large'
                status={buttonStatus}
                width='100%'
              />
            </Row>
          </Column>
        </Row>
      </BigScreen>
      <SmallScreen>
        <Column padding='48px 16px 0 16px' position='relative'>
          <Notification 
            align='top-center'
            message={error}
            show={error != undefined}
          />
          <Container
            position='absolute'
          >
            <Icon
              clickable='pointer'
              color={getGlobalStyle('--color-alvi-neutral-gray-dark')}
              name='ArrowBackNavigate'
              onClick={onBack}
              sizes='xs'
            />
          </Container>

          <Row justifyContent='start'>
            <Title
              customFontSize='18px'
              fontWeight='bold'
              text={title}
            />
          </Row>
          <Row
            justifyContent='start'
            margin='12px 0 0 0'
          >
            <Container width={'100%'}>
              <Text fontSize='md' textAlign='left'>
                {text}
              </Text>
            </Container>
          </Row>

          <Row justifyContent='start' margin='28px 0 0 0'>
            <Column width={'100%'}>
              <Row margin='0 0 10px 0'>
                <Text
                  fontWeight='bold'
                  htmlFor='password'
                  type='label'
                >
                  Nueva contraseña
                </Text>
              </Row>
              <PasswordInput 
                id='password'
                onChange={handleChangePassword}
                placeholder='Ingresa tu nueva contraseña'
              />
              <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={4} />
            </Column>
          </Row>
          <Column
            justifyContent='start'
            width={'100%'}
          >
            <Text fontSize='sm'>Debes usar al menos:</Text>
            <Column>
              {requirements.map(({label, isValid}, index) => {return (
                <PasswordRequerimentIndicator
                  isValid={isValid}
                  key={index}
                  label={label}
                  width={'100%'}
                />
              )})}
            </Column>
          </Column>
          <Row justifyContent='center' margin='28px 0 0 0'>
            <Column width={'100%'}>
              <Row margin='0 0 10px 0'>
                <Text
                  fontWeight='bold'
                  htmlFor='r-password'
                  type='label'
                >
                  Contraseña
                </Text>
              </Row>
              <PasswordInput 
                id='r-password'
                onChange={handleChangeRepeatPassword}
                placeholder='Ingresa tu contraseña'
              />
              <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={4} />
            </Column>
          </Row>
          <Row justifyContent='center' margin='35px 0'>
            <Button
              actionType='submit'
              borderRadius='2rem'
              label='Confirmar nueva contraseña'
              site={site}
              size='large'
              status={buttonStatus}
              width='100%'
            />
          </Row>
        </Column>
      </SmallScreen>
    </Column>
  )
}