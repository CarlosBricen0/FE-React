import React from 'react'
import { getGlobalStyle } from '../../../helpers'
import {
  Button,
  Icon,
  Text,
  Title
} from '../../atoms'
import {
  Column,
  Container,
  Horizontal,
  Row
} from '../../layout'
import { Modal } from '../../molecules'
import { FailedItems } from './FailedItems'
import { NoStockModalProps } from './ModalWithoutStock'
import styles from './NoStockModal.module.css'

export const NoStockModalMobile = ({
  buttonStatus,
  data,
  isOpen,
  handleModal,
  onClick
}: NoStockModalProps): React.ReactElement => {
  return (
    <Modal
      colorButtonDrag={getGlobalStyle('--color-neutral-gray-dark')}
      customCssFullScreen
      fullScreen
      halfScreen={true}
      isCloseIcon={false}
      isOpen={isOpen}
      marginFullScreen='auto 0 0 0'
      minHeightFullScreen='427px'
      toggle={handleModal}
      toggleOutside={handleModal}
      widthButtonDrag='47px'
    >
      <Container
        absoluteDefault='topRight'
        maxWidth='80px'
        padding='32px'
        position='absolute'
      >
        <Icon
          clickable='pointer'
          color={getGlobalStyle('--color-icons-gray')}
          customSize={18}
          name='Close'
          onClick={handleModal}
          site='alvi'
        />
      </Container>
      <Row
        alignItems='center'
        justifyContent='start'
        padding='10px 0 0 0'
      >
        <div className={styles.error_icon_alvi}>
          <p className={styles.error_text_icon}>!</p>
        </div>
        <Title customFontSize={getGlobalStyle('--font-size-titles-base')} fontWeight='semibold' >
          Productos no disponibles
        </Title>
      </Row>
      <Horizontal size={24} />
      <Text
        color='neutral'
        fontWeight='regular'
        isFlex
        textAlign='left'
        truncate={100}
      >
        Lo sentimos, estos productos no se encuentran disponibles:
      </Text>
      <Horizontal size={24} />
      <FailedItems data={data} />
      <Column
        absoluteDefault='bottomRight'
        backgroundColor={getGlobalStyle('--color-base-white')}
        boxShadow={getGlobalStyle('--box-shadow-xs')}
        customHeight='77px'
        padding='16px'
        position='absolute'
      >
        <Button
          background={getGlobalStyle('--color-alvi-primary-blue-gradient')}
          borderRadius={getGlobalStyle('--border-radius-xl')}
          fontWeight={getGlobalStyle('--font-weight-semibold')}
          label='Continuar sin estos productos'
          margin='0 auto'
          onClick={onClick}
          size='md'
          status={buttonStatus}
          width='100%'
        />
      </Column>
    </Modal>
  )
}
