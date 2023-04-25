import {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import { Text } from '../../atoms'
import {
  Column,
  Container,
  Row
} from '../../layout'

export interface TimeCountDownProps {
  endDate: Date;
  startDate: Date;
  onEnd?: () => void;
  onStart?: () => void;
}

interface TimeSquareProps {
  showDivider?: boolean
  time: number
  title?: string
}

const TimeSquare = ({
  showDivider = false,
  time,
  title
}: TimeSquareProps) => {
  return (
    <>
      <BigScreen>
        <Column alignItems='start'>
          <Row alignItems='center' gap={4}>
            <Container
              alignItems='center'
              backgroundColor={getGlobalStyle('--color-neutral-gray-light')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              justifyContent='center'
              minHeight='55px'
              minWidth='55px'
              padding='4px 8px'
              position='relative'
              title={title}
              width='fit-content'
            >
              <Text
                fontSize='5xl'
                fontWeight='bold'
                textAlign='center'
              >
                {time}
              </Text>

              <Container
                absoluteDefault='bottomLeft'
                justifyContent='center'
                margin='0 0 -24px 0'
                position='absolute'
              >
                <Text textAlign='center'>
                  {title}
                </Text>

              </Container>
            </Container>
            {
              showDivider && (
                <Container width='fit-content'>
                  <Text fontSize='5xl'>
                    :
                  </Text>
                </Container>
              )
            }
          </Row>
        </Column>
      </BigScreen>

      <SmallScreen>
        <Column alignItems='start'>
          <Row alignItems='center' gap={4}>
            <Container
              alignItems='center'
              backgroundColor={getGlobalStyle('--color-neutral-gray-light')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              justifyContent='center'
              minHeight='36px'
              minWidth='36px'
              padding='4px 8px'
              position='relative'
              title={title}
            >
              <Text
                fontSize='md'
                fontWeight='bold'
                textAlign='center'
              >
                {time}
              </Text>

              <Container
                absoluteDefault='bottomLeft'
                justifyContent='center'
                margin='0 0 -16px 0'
                position='absolute'
              >
                <Text fontSize='2xs'>
                  {title}
                </Text>
              </Container>
            </Container>

            {
              showDivider && (
                <Container width='fit-content'>
                  <Text fontSize='xs'>
                    :
                  </Text>
                </Container>
              )
            }
          </Row>
        </Column>
      </SmallScreen>
    </>
  )
}

export const TimeCountDown = ({
  endDate,
  startDate,
  onEnd,
  onStart
}: TimeCountDownProps) => {
  const [timeSquares, setTimeSquares] = useState<TimeSquareProps[]>([])
  const hasEnded = useRef(false)
  const hasStarted = useRef(false)

  const computeTimeSquares = () => {
    const now = new Date()
    const timeToEnd = endDate.getTime() - now.getTime()
    const timeToStart = startDate.getTime() - now.getTime()

    if (timeToStart <= 0 && !hasStarted.current && !hasEnded.current) {
      onStart?.()
      hasStarted.current = true
    }
    if (timeToEnd <= 0 && !hasEnded.current && hasStarted.current) {
      onEnd?.()
      hasEnded.current = true
    }

    const hours = Math.floor(timeToEnd / (1000 * 60 * 60))
    const minutes = Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeToEnd % (1000 * 60)) / 1000)

    setTimeSquares([
      { time: hours, title: 'Horas', showDivider: true },
      { time: minutes, title: 'Minutos', showDivider: true },
      { time: seconds, title: 'Segundos' }
    ])
  }

  useEffect(() => {
    computeTimeSquares()
    const timer = setInterval(() => {
      computeTimeSquares()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [endDate, startDate])

  return (
    <Column width={'fit-content'}>
      <Row gap={4}>
        {
          timeSquares?.map((timeSquare, index) => {
            return (
              <TimeSquare key={index} {...timeSquare} />
            )
          })
        }
      </Row>
    </Column>
  )
}
