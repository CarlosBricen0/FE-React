import {
  Container,
  Column,
  Spacer
} from '../../../../layout'
import { Modal } from '../../../../molecules'
import { SmallScreen, BigScreen } from '../../../../../helpers/mediaQueries'
import { DeliverySelectorContent } from './DeliverySelectorContent'
import { Overlay, ButtonStatus } from '../../../../atoms'
import styles from './DeliverySelector.module.css'
import { getGlobalStyle } from '../../../../../helpers'

interface DeliverySelectorProps {
  CACSelectorButtonStatus: ButtonStatus;
  enabledDeliverySelector: boolean;
  enabledStoreSelector: boolean;
  activeDeliverySelector: () => void;
  activeStoreSelector?: () => void;
  cacSelectorButton: () => void;
  closeDeliverySelector: () => void;
}

export const DeliverySelector = ({
  CACSelectorButtonStatus,
  enabledDeliverySelector,
  enabledStoreSelector,
  activeDeliverySelector,
  activeStoreSelector,
  cacSelectorButton,
  closeDeliverySelector
}: DeliverySelectorProps): React.ReactElement => {

  const deliverySelectorContentProps = {
    CACSelectorButtonStatus,
    activeDeliverySelector,
    activeStoreSelector,
    cacSelectorButton,
    closeDeliverySelector,
    enabledDeliverySelector,
    enabledStoreSelector
  }

  return (
    <>
      <BigScreen>
        <Modal
          hiddenX
          isOpen
          maxWidth='495px'
          toggle={null}
          toggleOutside={null}
        >
          <Spacer.Horizontal size={24} />
          <DeliverySelectorContent {...deliverySelectorContentProps} />
        </Modal>
      </BigScreen>
      <SmallScreen>
        <Container
          customHeight='100%'
          position='fixed'
          zIndex={getGlobalStyle('--z-index-20')}
        >
          <Overlay />
          <Column
            backgroundColor={getGlobalStyle('--color-base-white')}
            borderRadius='16px 16px 0 0'
            customClassName={styles.toFooter}
            overflow='scroll'
            padding='8px 14px'
            position='fixed'
            zIndex={getGlobalStyle('--z-index-30')}
          >
            <Spacer.Horizontal size={24} />
            <DeliverySelectorContent {...deliverySelectorContentProps} />
          </Column>
        </Container>
      </SmallScreen>
    </>
  )
}
