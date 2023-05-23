import { useEffect, useRef, useState } from 'react'
import { getGlobalStyle } from '../../../../../helpers'
import { Text } from '../../../../atoms'
import { Container, Row } from '../../../../layout'
import { BaseContainerProps } from '../../../../layout/BaseContainer/BaseContainer'

export interface PasswordRequerimentIndicatorProps extends Omit<BaseContainerProps, 'ref'> {
  isValid?: boolean
  label?: string
}

const getDotColor = (isValid: boolean, isFirstRender: boolean) => {
  if (isFirstRender) return getGlobalStyle('--color-neutral-dusty-gray')
  if (isValid) return getGlobalStyle('--color-feedback-success-dark')
  return getGlobalStyle('--color-feedback-error-dark')
}

export const PasswordRequerimentIndicator = ({
  isValid,
  label,
  ...props
}: PasswordRequerimentIndicatorProps) => {
  const isFirstRender = useRef(true)
  const [dotColor, setDotColor] = useState<string>() 

  useEffect(() => {
    // only change color when `isValid` changes
    setDotColor(getDotColor(isValid, isFirstRender.current))
    isFirstRender.current = false
  }, [isValid])

  return (
    <Row
      alignItems='center'
      gap={5}
      padding={'7px 0 0 0'}
      width={'50%'}
      {...props}
    >
      <Container 
        backgroundColor={dotColor}
        borderRadius='100%'
        customHeight='7px'
        width='7px'
      />
      <Text
        customColor={dotColor}
        fontSize='xs'
      >
        {label}
      </Text>
    </Row>
  )
}