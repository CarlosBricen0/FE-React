import React from 'react'
import { FailModalProps } from '..'
import { getGlobalStyle } from '../../../../helpers'
import {
  Button,
  Icon,
  Text,
  Title
} from '../../../atoms'
import { Container, Spacer } from '../../../layout'

const ContentModal = ({
  alviSite,
  backgroundColor,
  boldButton,
  buttonStatus,
  buttonText,
  buttonWidth,
  content,
  contentColor,
  contentPosition,
  labelSecondary,
  showButton = true,
  sizeTitle,
  title,
  titleColor,
  titlePosition,
  unimarcSite,
  action,
  handleKeepAddress,
  onClick
}: FailModalProps) => {
  const containerPadding = unimarcSite ? '0px 4px' : ''
  const btnColor = getGlobalStyle(alviSite ? '--color-alvi-primary-blue' : '--color-primary-red')

  return (
    <>
      <Spacer.Horizontal size={32} />
      <Container padding={containerPadding}>
        <Title
          backgroundColor={null}
          color={titleColor}
          customFontSize={sizeTitle}
          fontWeight='semibold'
          headingLevel='h5'
          text={title}
          textAlign={titlePosition}
        />
      </Container>
      {alviSite && (
        <Container
          absoluteDefault='topRight'
          justifyContent='center'
          maxWidth='80px'
          padding='20px 0 0 0'
          position='absolute'
        >
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-icons-gray')}
            customSize={18}
            name='Close'
            onClick={onClick}
          />
        </Container>
      )}
      <Spacer.Horizontal size={24} />
      <Container padding={containerPadding}>
        <Text
          color={contentColor}
          fontSize='lg'
          fontWeight='regular'
          textAlign={contentPosition}
        >
          {content}
        </Text>
      </Container>
      <Spacer.Horizontal size={24} />
      <Button
        background={backgroundColor}
        borderRadius='24px'
        fontWeight={boldButton}
        label={buttonText}
        onClick={action}
        size='large'
        status={alviSite ? buttonStatus : 'initial'}
        width={buttonWidth}
      />
      {showButton && (
        <Button
          background='transparent'
          border={`1px solid ${btnColor}`}
          borderRadius='24px'
          color={btnColor}
          fontWeight={boldButton}
          label={labelSecondary}
          margin='12px 0 0 0'
          onClick={handleKeepAddress || onClick}
          size='large'
          type='secondary'
          width={buttonWidth}
        />
      )}
    </>
  )
}

export default ContentModal