import { useMemo, useState } from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import {
  cleanRut,
  formatRut,
  validateRut
} from '../../../../utils/formatRut'
import {
  Button,
  ButtonStatus,
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
import { InputAdornment, Notification } from '../../../molecules'
import { CommonStepProps, ForgotPasswordStep } from '../ForgotPasswordModal'
import styles from './DeliveryMediumStep.module.css'

export interface DeliveryMediumStepProps extends CommonStepProps<ForgotPasswordStep.DeliveryMedium> {
  error?: React.ReactNode;
  imageSrc?: string;
  loading?: boolean;
  text?: React.ReactNode;
  title?: string;
  onSubmit: (rut: string, deliveryMedium: string) => void
}

const getButtonStatus = (isValidRut: boolean, loading: boolean) : ButtonStatus => {
  if (loading) return 'loading'
  if (isValidRut) return 'initial'
  return 'disabled'
}

export const DeliveryMediumStep = ({
  error,
  imageSrc,
  loading,
  site,
  text,
  title,
  onBack,
  onSubmit
}: DeliveryMediumStepProps) : React.ReactElement<DeliveryMediumStepProps> => {
  const [rut, setRut] = useState('')

  const handleSubmit = (deliveryMedium: 'EMAIL' | 'SMS') => {
    onSubmit?.(rut, deliveryMedium)
  }

  const handleSubmitEmail = (e?: React.FormEvent) => {
    e?.preventDefault()
    handleSubmit('EMAIL')
  }

  const handleSubmitSMS = () => {
    handleSubmit('SMS')
  }

  const handleBlurRut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(formatRut(e.target.value))
  }

  const handleChangeRut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(e.target.value)
  }

  const isValidRut = useMemo(() => {
    return validateRut(cleanRut(rut))
  }, [rut])

  const buttonStatus = getButtonStatus(isValidRut, loading)

  return (
    <>
      <Row onSubmit={handleSubmitEmail} tagName='form'>
        <BigScreen>
          <Column>
            <Container className={styles['imageContainer']}>
              <Picture
                alt='delivery-medium-image'
                className={styles['imageContainer__image']}
                height='497px'
                src={imageSrc}
                width='395px'
              />
            </Container>
          </Column>
        </BigScreen>
        <Container
          position='relative'
        >
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
          <Column className={styles['container']} position='relative'>
            <Notification
              align='top-center'
              message={error}
              show={error != undefined}
              site={site}
            />
            <SmallScreen>
              <Title
                customFontSize='18px'
                fontWeight='semibold'
                headingLevel='h1'
                text={title}
              />
            </SmallScreen>
            <BigScreen>
              <Title
                customFontSize='24px'
                fontWeight='semibold'
                headingLevel='h1'
                text={title}
              />
            </BigScreen>
            <BigScreen>
              <Container margin='8px 0 0 0'>
                <Text
                  fontSize='md'
                  isFlex={false}
                  type='span'
                >
                  {text}
                </Text>
              </Container>
            </BigScreen>
            <SmallScreen>
              <Container margin='16px 0 0 0'>
                <Text
                  fontSize='md'
                  isFlex={false}
                  type='span'
                >
                  {text}
                </Text>
              </Container>
            </SmallScreen>

            <Container className={styles.formContainer} margin='20px 0 0 0'>
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
              <InputAdornment
                customClassName={styles['input--hideAutocomplete']}
                id='rut'
                inputAdornmentEnd={
                  (!isValidRut && rut) && <Icon color={getGlobalStyle('--color-primary-red2')} name='Close' />
                }
                name='rut'
                onBlur={handleBlurRut}
                onChange={handleChangeRut}
                placeholder='Ingresa tu número de rut'
                required
                textAlign='left'
                value={rut}
                width='100%'
              />
            </Container>
            <Row visibility={!isValidRut && rut ? 'visible' : 'hidden'}>
              <Text color='error'>
                Ingresa un Rut válido 
              </Text>
            </Row>
            <BigScreen>
              <Container margin='128px 0 0 0'>
                <Text>
                  Quiero recibirla via
                </Text>
              </Container>
            </BigScreen>
            <SmallScreen>
              <Container margin='56px 0 0 0'>
                <Text fontSize='md'>
                  Quiero recibirla via
                </Text>
              </Container>
            </SmallScreen>
            <Container margin='16px 0 0 0'>
              <Button
                actionType='button'
                borderRadius='2rem'
                label='Correo electrónico'
                onClick={handleSubmitEmail}
                site={site}
                size='large'
                status={buttonStatus}
                width='100%'
              />
            </Container>
            <Container margin='8px 0 0 0'>
              <Button 
                actionType='button'
                borderRadius='2rem'
                label='Mensaje de texto'
                onClick={handleSubmitSMS}
                site={site}
                size='large'
                status={buttonStatus}
                type='secondary'
                width='100%'
              />
            </Container>
          </Column>
        </Container>
      </Row>
    </>
  )
}