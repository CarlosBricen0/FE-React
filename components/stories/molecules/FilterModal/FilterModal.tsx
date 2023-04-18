import React from 'react'
import {
  Container,
  Row,
  Column
} from '../../layout'
import {
  Button,
  Divider,
  Icon,
  Text
} from '../../atoms'
import { getGlobalStyle } from '../../../helpers'
import classNames from 'classnames'
import styles from './FilterModal.module.css'

export interface FilterModalProps {
  title: string;
  buttonName: string;
  children?: React.ReactNode;
  onApplyFilter?: () => void;
  onCloseModal?: () => void;
}

export const FilterModal = ({
  title = '',
  buttonName = '',
  children,
  onApplyFilter,
  onCloseModal
}: FilterModalProps): React.ReactElement => {
  return (
    <Container
      alignItems='stretch'
      backgroundColor={getGlobalStyle('--color-background-gray')}
      className={classNames(styles.modal)}
      position='fixed'
      zIndex={getGlobalStyle('--z-index-999')}
    >
      <Container
        customHeight='100%'
        customWidth='100%'
        isWrap
        position='absolute'
      >
        <Column
          backgroundColor={getGlobalStyle('--color-background-white')}
          boxShadow='4px 4px 18px rgba(0, 0, 0, 0.05)'
          className={classNames(styles.internalContainer)}
          customHeight='100vh'
          margin='10px 10px 0 10px'
          padding='15px'
          width='100%'
        >
          <Row justifyContent='between'>
            <Text fontWeight='semibold' type='div' >{title}</Text>
            <Icon
              color={getGlobalStyle('--color-neutral-black')}
              name='Close'
              onClick={onCloseModal}
            />
          </Row>
          <Row>
            <Divider verticalMargin={6}/>
          </Row>
          {children}
        </Column>
        <Column
          alignItems='stretch'
          backgroundColor={getGlobalStyle('--color-background-white')}
          boxShadow='0 -4px 18px rgba(0, 0, 0, 0.1)'
          customClassName={classNames(styles.buttonColumn)}
          customHeight='112px'
          position='sticky'
          width='100%'
        >
          <div className={styles.button}>
            <Button
              borderRadius='24px'
              height='45px'
              label={buttonName}
              onClick={onApplyFilter}
              width='100%'
            />
          </div>
        </Column>
      </Container>
    </Container>
  )
}