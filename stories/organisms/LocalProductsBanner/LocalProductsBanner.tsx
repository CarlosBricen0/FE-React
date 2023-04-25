import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import {
  Title,
  Text,
  Button,
  Picture
} from '../../atoms'
import {
  Column,
  Container,
  Row,
  Spacer
} from '../../layout'
import React from 'react'

export interface LocalProductsBannerProps {
  backgroundColor: string;
  buttonLabel: string;
  description: string;
  imagesSrcs: string[];
  linkWrapper?: React.FunctionComponent;
  title: string;
  onClick?: () => void;
}

export const LocalProductsBanner = ({
  backgroundColor,
  buttonLabel,
  description,
  imagesSrcs,
  linkWrapper,
  title,
  onClick
}: LocalProductsBannerProps) => {

  return (
    <Container
      backgroundColor={backgroundColor}
      justifyContent='center'
      maxWidth='1166px'
      padding='50px 0'
    >
      <BigScreen>
        <Row
          alignItems='center'
        >
          <Column
            alignItems='start'
            justifyContent='center'
            padding='50px 50px 20px'
            width='40%'
          >
            <Title
              customFontSize={getGlobalStyle('--font-size-5xl')}
              fontWeight='semibold'
              headingLevel='h2'
            >
              {title}
            </Title>
            <Spacer.Horizontal size={18} />
            <Text>{description}</Text>
            <Spacer.Horizontal size={18} />
            <Button
              borderRadius='50px'
              label={buttonLabel}
              onClick={onClick}
              type='secondary'
            />
          </Column>
          <Column
            alignItems='start'
            isWrap={true}
            maxHeight='534px'
            padding='0 10px 0 0'
            width='60%'
          >
            {imagesSrcs.map(imageSrc => {
              return (
                <Container
                  key={imageSrc}
                  margin='10px'
                  maxWidth='210px'
                >
                  <Picture
                    borderRadius='10px'
                    height='auto'
                    linkWrapper={linkWrapper}
                    src={imageSrc}
                    width='100%'
                  />
                </Container>
              )
            })}
          </Column>
        </Row>
      </BigScreen>
      <SmallScreen>
        <Column>
          <Column
            alignItems='center'
            justifyContent='center'
            padding='0 20px 20px'
          >
            <Title
              customFontSize={getGlobalStyle('--font-size-5xl')}
              fontWeight='bold'
              headingLevel='h2'
              textAlign='center'
            >
              {title}
            </Title>
            <Spacer.Horizontal size={18} />
            <Text textAlign='center'>{description}</Text>
            <Spacer.Horizontal size={18} />
            <Button
              borderRadius='50px'
              label={buttonLabel}
              onClick={onClick}
              type='secondary'
            />
          </Column>
          <Column
            isWrap={true}
            margin='auto'
            maxHeight='300px'
            maxWidth='343px'
            width='100%'
          >
            {imagesSrcs.map(imageSrc => {
              return (
                <Container
                  justifyContent='center'
                  key={imageSrc}
                  margin='2px'
                  maxWidth='112px'
                >
                  <Picture
                    borderRadius={getGlobalStyle('--border-radius-sm')}
                    height='auto'
                    linkWrapper={linkWrapper}
                    src={imageSrc}
                    width='100%'
                  />
                </Container>
              )
            })}
          </Column>
        </Column>
      </SmallScreen>
    </Container>
  )
}