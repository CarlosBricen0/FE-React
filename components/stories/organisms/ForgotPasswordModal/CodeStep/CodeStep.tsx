import {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import { Site } from '../../../../shared/interfaces/Site'
import {
  Button, 
  Icon,
  Link,
  Text,
  Title
} from '../../../atoms'
import {
  Column,
  Container,
  Row
} from '../../../layout'
import { Notification } from '../../../molecules'
import { CommonStepProps, ForgotPasswordStep } from '../ForgotPasswordModal'
import { CodeInput } from './CodeInput/CodeInput'

export interface CodeStepProps extends CommonStepProps<ForgotPasswordStep.Code> {
  arrow?: boolean
  error?: React.ReactNode;
  isLoading?: boolean;
  text?: string;
  title?: string;
  onBack?: () => void;
  onChangeCode?: (code: string) => void;
  onResendCode?: () => void;
  onSubmit?: (code: string) => void;
}

const TIME_TO_RESEND_CODE = 30 // seconds

export interface ResendTextProps {
  site?: Site,
  timeToResend?: number
  onResendCode?: () => void
}

const ResendText = ({
  site,
  timeToResend,
  onResendCode
} : ResendTextProps) : React.ReactElement<ResendTextProps> => {
  const linkColor = site === 'alvi' ? getGlobalStyle('--color-alvi-primary-blue') : getGlobalStyle('--color-primary-red')

  const timeToResendFormatted = useMemo(() => {
    if(!timeToResend) return ''
    let minutes = Math.floor(timeToResend / 60)
    if (minutes < 0) minutes = 0
    let seconds = Math.floor(timeToResend % 60)
    if (seconds < 0) seconds = 0
    const minutesString = minutes < 0 ? `0${minutes}` : `${minutes}`
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${minutesString}:${secondsString}`
  }, [timeToResend])

  return (
    <>
      <BigScreen>
        <Text>
          ¿No recibiste el código? {' '}
          {timeToResend > 0 ? (
            `Pide uno nuevo en ${timeToResendFormatted}`
          ) : (
            <Container margin='0 0 0 6px' width={'fit-content'}>
              <Link
                color={linkColor}
                href='#'
                label='Reenviar'
                onClick={onResendCode}
                preventDefault
              />
            </Container>
          )}
        </Text>
      </BigScreen>
      <SmallScreen>
        <Text fontSize='sm'>
          ¿No recibiste el código? {' '}
          {timeToResend > 0 ? (
            `Pide uno nuevo en ${timeToResendFormatted}`
          ) : (
            <Container margin='0 0 0 6px' width='fit-content'>
              <Link
                color={linkColor}
                fontSize='sm'
                href='#'
                label='Reenviar'
                onClick={onResendCode}
                preventDefault
              />
            </Container>
          )}
        </Text>
      </SmallScreen>
    </>
  )
}

export const CodeStep = ({
  arrow = true,
  isLoading,
  title,
  text,
  site,
  error,
  onBack,
  onChangeCode,
  onResendCode,
  onSubmit
} : CodeStepProps) : React.ReactElement<CodeStepProps> => {
  const [code, setCode] = useState('')
  const [timeToResend, setTimeToResend] = useState(TIME_TO_RESEND_CODE)
  const timerRef = useRef<NodeJS.Timer>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeToResend((prev) => {return prev - 1})
    }, 1000)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!isCodeValid) return
    onSubmit?.(code)
  }

  const handleChangeCode = (newCode: string) => {
    setCode(newCode)
    onChangeCode?.(newCode)
  }

  const handleResendCode = () => {
    onResendCode?.()
    setTimeToResend(TIME_TO_RESEND_CODE)
  }

  const isCodeValid = code.length === 6
  const buttonStatusDefault = !isCodeValid ? 'disabled' : undefined
  const buttonStatus = isLoading ? 'loading' : buttonStatusDefault

  return (
    <Column
      onSubmit={handleSubmit}
      padding='48px 16px 0 16px'
      position='relative'
      tagName='form'
    >
      <Notification 
        align='top-center'
        message={error}
        show={error != undefined}
        site={site}
      />
      {
        arrow &&
        <Container position='absolute'>
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-alvi-neutral-gray-dark')}
            name='ArrowBackNavigate'
            onClick={onBack}
            sizes='xs'
          />
        </Container>
      }
      <BigScreen>
        <>
          <Row justifyContent='center'>
            <Title 
              customFontSize='24px'
              fontWeight='bold'
              text={title}
            />
          </Row>
          <Row justifyContent='center' margin='5px 0 0 0'>
            <Container width={'60%'}>
              <Text textAlign='center'>
                {text}
              </Text>
            </Container>
          </Row>
          <Row justifyContent='center' margin='47px 0 0 0'>
            <CodeInput onChange={handleChangeCode} />
          </Row>
          <Row
            gap={18}
            justifyContent='center'
            margin='63px 0 0 0'
          >
            <Icon
              color={getGlobalStyle('--color-campaigns-yellow')}
              name='Warning'
              sizes='md'
            />
            <Container width={'60%'}>
              <Text>
                  Asegurate de revisar las carpetas de promociones, spam o correo no deseado.
              </Text>
            </Container>
          </Row>
          <Row justifyContent='center' margin='28px 0 0 0'>
            <Button
              actionType='submit'
              borderRadius='2rem'
              label='Confirmar código'
              site={site}
              size='large'
              status={buttonStatus}
              width='50%'
            />
          </Row>
          <Row justifyContent='center' margin='8px 0 0 0'>
            <ResendText
              onResendCode={handleResendCode}
              site={site}
              timeToResend={timeToResend}
            />
          </Row>
        </>
      </BigScreen>
      <SmallScreen>
        <>
          <Row justifyContent='start'>
            <Title 
              customFontSize='18px'
              fontWeight='bold'
              text={title}
            />
          </Row>
          <Row justifyContent='start' margin='20px 0 0 0'>
            <Container width={'100%'}>
              <Text fontSize='md' textAlign='left'>
                {text}
              </Text>
            </Container>
          </Row>
          <Row justifyContent='center' margin='49px 0 0 0'>
            <CodeInput onChange={handleChangeCode} />
          </Row>
          <Row
            gap={18}
            justifyContent='center'
            margin='30px 0 0 0'
          >
            <Icon
              color={getGlobalStyle('--color-campaigns-yellow')}
              name='Warning'
              sizes='md'
            />
            <Container width={'80%'}>
              <Text fontSize='sm'>
                  Asegurate de revisar las carpetas de promociones, spam o correo no deseado.
              </Text>
            </Container>
          </Row>
          <Row justifyContent='center' margin='28px 0 0 0'>
            <Button
              actionType='submit'
              borderRadius='2rem'
              label='Confirmar código'
              site={site}
              size='large'
              status={buttonStatus}
              width='100%'
            />
          </Row>
          <Row justifyContent='center' margin='32px 0 0 0'>
            <ResendText
              onResendCode={handleResendCode}
              site={site}
              timeToResend={timeToResend}
            />
          </Row>
        </>
      </SmallScreen>
    </Column>
  )
}