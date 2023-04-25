import { useCallback } from 'react'
import { DeliverySelector } from './Components/DeliverySelector'
import { ClickAndCollect } from '../ClickAndCollect/ClickAndCollect'
import { FailModal } from '../FailModal'
import { ButtonStatus } from '../../atoms'
import { TitleProps } from '../../atoms/Title/Title'
import { SimulationItem, SimulationModal } from '../SimulationModal/SimulationModal'

interface DeliverySelectorTypeProps {
  CACSelectorButtonStatus: ButtonStatus;
  comunaList: Array<string>;
  comunaSelected?: string;
  contentPosition: TitleProps['textAlign'];
  enabledDeliverySelector: boolean;
  enabledStoreSelector: boolean;
  failModalButtonText: string;
  failModalColorTitle: string;
  failModalContent: string;
  failModalIsOpen: boolean;
  failModalTitle: string;
  openDeliverySelector: boolean;
  openStoreSelector: boolean;
  regionList: Array<string>;
  simulationItems?: SimulationItem[];
  storeList: {
    neighborhood: string;
    formatedAddress: string;
    selected: boolean;
  }[];
  storeSelectorButtonStatus: ButtonStatus;
  titlePosition: TitleProps['textAlign'];
  activeDeliverySelector: () => void;
  activeStoreSelector?: () => void;
  cacSelectorButton: () => void;
  changeDeliveryMethod: () => void;
  closeDeliverySelector: () => void;
  closeStoreSelector?: () => void;
  comunaSelector: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
  errorModal: () => void;
  errorModalAction: () => void;
  regionSelector: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
  storeSelector: (data:object, index:number) => void;
  storeSelectorButton: (withSimulation?: false) => void;
}

export const DeliverySelectorType = ({
  CACSelectorButtonStatus,
  comunaList,
  comunaSelected,
  contentPosition,
  enabledDeliverySelector,
  enabledStoreSelector,
  failModalButtonText,
  failModalColorTitle,
  failModalContent,
  failModalIsOpen,
  failModalTitle,
  openDeliverySelector,
  openStoreSelector,
  regionList,
  simulationItems,
  storeList,
  storeSelectorButtonStatus,
  titlePosition,
  activeDeliverySelector,
  activeStoreSelector,
  cacSelectorButton,
  changeDeliveryMethod,
  closeDeliverySelector,
  closeStoreSelector,
  comunaSelector,
  errorModal,
  errorModalAction,
  regionSelector,
  storeSelector,
  storeSelectorButton
}: DeliverySelectorTypeProps): React.ReactElement => {
  const simulationModalAction = useCallback(() => { return storeSelectorButton(false) }, [])

  return (
    <>
      {
        openDeliverySelector &&
          <DeliverySelector
            CACSelectorButtonStatus={CACSelectorButtonStatus}
            activeDeliverySelector={activeDeliverySelector}
            activeStoreSelector={activeStoreSelector}
            cacSelectorButton={cacSelectorButton}
            closeDeliverySelector={closeDeliverySelector}
            enabledDeliverySelector={enabledDeliverySelector}
            enabledStoreSelector={enabledStoreSelector}
          />
      }
      {
        simulationItems?.length > 0 &&
          <SimulationModal
            action={simulationModalAction}
            buttonStatus={storeSelectorButtonStatus}
            handleKeepAddress={closeStoreSelector}
            items={simulationItems}
            labelPrimary='No, dejar la actual'
            labelSecondary='Si, quiero cambiarla'
          />
      }
      {
        failModalIsOpen &&
          <FailModal
            action={errorModalAction}
            buttonText={failModalButtonText}
            colorTitle={failModalColorTitle}
            content={failModalContent}
            contentPosition={contentPosition}
            onClick={errorModal}
            title={failModalTitle}
            titlePosition={titlePosition}
          />
      }
      {
        openStoreSelector &&
          <ClickAndCollect
            changeDeliveryMethod={changeDeliveryMethod}
            closeStoreSelector={closeStoreSelector}
            comunaList={comunaList}
            comunaSelected={comunaSelected}
            comunaSelector={comunaSelector}
            regionList={regionList}
            regionSelector={regionSelector}
            storeList={storeList}
            storeSelector={storeSelector}
            storeSelectorButton={storeSelectorButton}
            storeSelectorButtonStatus={storeSelectorButtonStatus}
          />
      }
    </>
  )
}