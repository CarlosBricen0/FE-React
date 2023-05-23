import { Container, Column, Spacer } from '../../layout'
import { Modal } from '../../molecules'
import { BigScreen, SmallScreen } from '../../../helpers/mediaQueries'
import { ClickAndCollectContent } from './ClickAndCollectContent'
import { Overlay } from '../../atoms'
import styles from './ClickAndCollect.module.css'
import { getGlobalStyle } from '../../../helpers'
import { ClickAndCollectProps } from './interfaces/IClickAndCollect'

export const ClickAndCollect = ({
  comunaList,
  comunaSelected,
  storeSelectorButtonStatus,
  regionList,
  storeList,
  closeStoreSelector,
  changeDeliveryMethod,
  comunaSelector,
  regionSelector,
  storeSelector,
  storeSelectorButton
}: ClickAndCollectProps): React.ReactElement => {

  const clickAndCollectContentProps = {
    closeStoreSelector,
    comunaList,
    comunaSelected,
    changeDeliveryMethod,
    comunaSelector,
    regionList,
    regionSelector,
    storeList,
    storeSelector,
    storeSelectorButton,
    storeSelectorButtonStatus
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
          <ClickAndCollectContent {...clickAndCollectContentProps} />
        </Modal>
      </BigScreen>
      <SmallScreen>
        <Container position='fixed' zIndex={getGlobalStyle('--z-index-20')}>
          <Overlay />
          <Column
            backgroundColor={getGlobalStyle('--color-base-white')}
            borderRadius='16px 16px 0 0'
            customClassName={styles.toFooter}
            customHeight='auto'
            overflow='scroll'
            padding='38px 14px'
            position='fixed'
            zIndex={getGlobalStyle('--z-index-30')}
          >
            <Spacer.Horizontal size={24} />
            <ClickAndCollectContent {...clickAndCollectContentProps} />
          </Column>
        </Container>
      </SmallScreen>
    </>
  )
}
