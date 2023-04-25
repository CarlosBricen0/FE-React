import classNames from 'classnames'
import { CSSProperties } from 'react'
import { 
  BigScreen,
  SmallScreen 
} from '../../../../helpers'
import { Text } from '../../../atoms'
import { 
  Column, 
  Container, 
  Row 
} from '../../../layout'
import { ChildrenBaseContainerProps } from '../../../layout/BaseContainer/BaseContainer'
import styles from './CouponDescription.module.css'

export interface CouponDescriptionProps extends Partial<ChildrenBaseContainerProps> {
  className?: string;
  description: string;
  descriptionTextDecoration?: CSSProperties['textDecorationLine'];
  lead?: string;
  leadTextDecoration?: CSSProperties['textDecorationLine'];
  subtitle: string;
  subtitleTextDecoration?: CSSProperties['textDecorationLine'];
  title: string;
  titleTextDecoration?: CSSProperties['textDecorationLine'];
}

export const CouponDescription = ({
  className,
  description,
  descriptionTextDecoration,
  lead,
  leadTextDecoration,
  subtitle,
  subtitleTextDecoration,
  title,
  titleTextDecoration,
  ...props
}: CouponDescriptionProps) => {

  return (
    <>
      <SmallScreen>
        <Column 
          clickable='pointer' 
          customClassName={className} 
          {...props}
        >
          <Text
            clickable='pointer'
            fontSize='xl'
            fontWeight='semibold'
            isFlex
            textAlign='left'
            textDecorationLine={titleTextDecoration}
          >
            {title}
          </Text>

          <Row
            clickable='pointer'
            gap='5px'
            isWrap
            margin='2px 0'
          >
            <Text
              clickable='pointer'
              color='gray'
              fontSize='xs'
              isFlex
              textAlign='left'
              textDecorationLine={subtitleTextDecoration}
            >
              {subtitle}
            </Text>
            
            {lead && 
              <Row clickable='pointer' customWidth='max-content'>
                <Text clickable='pointer' fontSize='xs'>
                  <Text
                    clickable='pointer'
                    color='gray'
                    fontSize='xs'
                    isFlex
                    textAlign='left'
                    textDecorationLine={subtitleTextDecoration}
                  >
                    {lead}
                  </Text>
                </Text>
              </Row>
            }
          </Row>
          
          <Text
            clickable='pointer'
            color='black'
            fontSize='sm'
            fontWeight='semibold'
            isFlex
            textAlign='left'
            textDecorationLine={descriptionTextDecoration}
          >
            {description}
          </Text>
        </Column>
      </SmallScreen>

      <BigScreen>
        <Column
          alignItems='center'
          clickable='pointer'
          customClassName={classNames(className, styles['textContainer'])}
          justifyContent='center'
          {...props}
        >
          <Container 
            clickable='pointer' 
            justifyContent='center' 
            margin='0 0 4px 0'
          >
            <Text
              clickable='pointer'
              fontSize='xl'
              fontWeight='semibold'
              isFlex
              textAlign='center'
              textDecorationLine={titleTextDecoration}
            >
              {title}
            </Text>
          </Container>

          <Row
            clickable='pointer'
            isWrap
            justifyContent='center'
            margin='0 0 6px 0'
          >
            <Text
              clickable='pointer'
              color='gray'
              fontSize='md'
              isFlex
              textAlign='center'
              textDecorationLine={subtitleTextDecoration}
            >
              {subtitle}
            </Text>

            {
              lead &&
                <Row 
                  clickable='pointer'
                  customWidth='max-content'
                  margin='0 0 0 5px'
                >
                  <Text
                    clickable='pointer'
                    color='gray'
                    fontSize='md'
                    isFlex
                    textAlign='left'
                  >
                    <Text
                      clickable='pointer'
                      color='gray'
                      textDecorationLine={leadTextDecoration}
                    >
                      {lead}
                    </Text>
                  </Text>
                </Row>
            }
          </Row>

          <Text
            clickable='pointer'
            color='black'
            fontSize='md'
            fontWeight='semibold'
            isFlex
            lineClamp={2}
            textAlign='center'
            textDecorationLine={descriptionTextDecoration}
            textOverflow={'ellipsis'}
          >
            {description}
          </Text>
        </Column>
      </BigScreen>
    </>
  )
}
