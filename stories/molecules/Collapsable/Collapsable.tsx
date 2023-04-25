import { useCallback, useState } from 'react'
import { getGlobalStyle } from '../../../helpers'
import {
  Icon,
  Text,
  Title
} from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import styles from './Collapsable.module.css'

export interface CollapsableProps {
  backgroundColor?: string;
  maxHeight?: string;
  text?: string | HTMLElement;
  title?: string;
}

export const Collapsable = ({
  backgroundColor = 'white',
  maxHeight = '154px',
  text,
  title
}: CollapsableProps) => {
  const [display, setDisplay] = useState(false)

  const handleOnClick = useCallback(() => {
    setDisplay(!display)
  },[display])

  return (
    <>
      <Row
        alignItems='center'
        backgroundColor={backgroundColor}
        borderRadius='32px'
        clickable='pointer'
        maxWidth={getGlobalStyle('--width-max-desktop')}
        minHeight='54px'
        onClick={handleOnClick}
        padding='0px 24px'
      >
        <>
          <Column clickable='pointer'>
            <Title
              color={getGlobalStyle('--color-neutral-gray-dark')}
              customFontSize={getGlobalStyle('--font-size-lg')}
              fontWeight='semibold'
              headingLevel='h3'
            >
              {title}
            </Title>
          </Column>
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-neutral-gray-dark')}
            customSize={18}
            name='DropDownClose'
          />
        </>
      </Row>
      <Row
        customClassName={styles[`textContainer--${display ? 'displayed' : 'collapsed'}`]}
        maxHeight={display ? maxHeight : '0px'}
        maxWidth={getGlobalStyle('--width-max-desktop')}
        overflow='auto'
        padding='0px 48px 0px 24px'
        scrollbarHidden
      >
        {typeof text === 'string' ? (
          <Text
            color='neutral-dark'
            customClassName={styles.text}
            fontSize='lg'
          >
            {text}
          </Text>
        ) : (
          <Row customClassName={styles.text}>
            {text}
          </Row>
        )}
      </Row>
      <Spacer.Horizontal size={18} />
      <Spacer.Horizontal size={2} />
    </>
  )
}