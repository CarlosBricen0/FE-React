import React from 'react'
import { FailModalProps } from '..'
import { getGlobalStyle } from '../../../../helpers'
import {
  Button,
  Text,
  Title
} from '../../../atoms'
import { Container, Spacer } from '../../../layout'

const ContentModal = ({
  backgroundColor='',
  boldButton,
  buttonText='',
  buttonWidth,
  containerPadding,
  content,
  contentColor,
  contentPosition,
  labelSecondary='',
  showButton = true,
  sizeTitle,
  title,
  titleColor,
  titlePosition,
  action,
  handleKeepAddress,
  onClick
}: FailModalProps) => {
  const btnColor = getGlobalStyle( '--color-primary-red')

  return (
    <>
      <Spacer.Horizontal size={32} />
      <Container padding={containerPadding}>
        <Title
          backgroundColor={backgroundColor}
          color={titleColor}
          customFontSize={sizeTitle}
          fontWeight='semibold'
          headingLevel='h5'
          text={title}
          textAlign={titlePosition}
        />
      </Container>
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
        status={ 'initial'}
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