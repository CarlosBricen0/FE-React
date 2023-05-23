import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import {
  Button,
  ButtonStatus,
  Text,
  Title
} from '../../atoms'
import { Container, Horizontal } from '../../layout'
import { Modal } from '../../molecules'
import { FailedItems } from './FailedItems'
import { NoStockModalMobile } from './ModalWithoutStockMobile'
import styles from './NoStockModal.module.css'

export interface FailProps {
  id?: string;
  message?: string;
  name?: string;
}

export interface WarningProps {
  id?: string;
  message?: string;
  name?: string;
}

export interface InfoProps {
  id?: string;
  message?: string;
  name?: string;
}

export interface DataResponseCart {
  failed?: FailProps[];
  info?: InfoProps[];
  warning?: WarningProps[];
}

export interface Alerts {
  alerts: DataResponseCart[]
}

export interface NoStockModalProps {
  buttonStatus?: ButtonStatus;
  data?: DataResponseCart | Alerts;
  isOpen?: boolean;
  maxWidth?: string;
  subtitle?: boolean;
  warnings?: Array<string>;
  handleModal?: () => void;
  onClick?: () => void;
}

export const NoStockProducts = ({
  data,
  buttonStatus,
  isOpen = true,
  maxWidth = '328px',
  handleModal,
  onClick
}: NoStockModalProps) => {
  return (
    <>
      <BigScreen>
        <Modal
          errorModal
          hiddenX={false}
          iconPadding='20px'
          isOpen={isOpen}
          maxWidth={maxWidth}
          minHeight='365px'
          padding='10px'
          site='alvi'
          sizeIconClose={18}
          toggle={handleModal}
          toggleOutside={handleModal}
        >
          <Horizontal size={24} />
          <div className={styles.modalContainer}>
            <Title customFontSize={getGlobalStyle('--font-size-titles-sm')} fontWeight={'semibold'} >
              Productos no disponibles
            </Title>
            <Horizontal size={24} />
            <Horizontal size={8} />
            <Text
              color='neutral'
              fontWeight='medium'
              isFlex
              textAlign='left'
              truncate={100}
            >
                Lo sentimos, estos productos no se encuentran disponibles:
            </Text>
            <Horizontal size={8} />
          </div>
          <FailedItems data={data} />
          <Horizontal size={24} />
          <Container
            absoluteDefault='bottomLeft'
            alignItems='center'
            backgroundColor={getGlobalStyle('--color-alvi-base-white')}
            customHeight='69px'
            justifyContent='center'
            position='absolute'
            width='100%'
          >
            <Button
              background={getGlobalStyle('--color-alvi-primary-blue-gradient')}
              borderRadius={getGlobalStyle('--border-radius-xl')}
              fontWeight={getGlobalStyle('--font-weight-semibold')}
              label='Continuar sin estos productos'
              onClick={onClick}
              size='md'
              status={buttonStatus}
              width='280px'
            />
          </Container>
        </Modal>
      </BigScreen>
      <SmallScreen>
        <NoStockModalMobile
          buttonStatus={buttonStatus}
          data={data}
          handleModal={handleModal}
          isOpen={isOpen}
          onClick={onClick}
        />
      </SmallScreen>
    </>
  )
}
