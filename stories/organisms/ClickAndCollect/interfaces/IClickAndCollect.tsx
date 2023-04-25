import { ButtonStatus } from '../../../atoms'

export interface ClickAndCollectProps {
    comunaList: Array<string>;
    comunaSelected?: string;
    storeSelectorButtonStatus: ButtonStatus;
    regionList: Array<string>;
    storeList: {
      neighborhood: string;
      formatedAddress: string;
      selected: boolean;
    }[];
    closeStoreSelector: () => void;
    comunaSelector: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
    regionSelector: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
    storeSelector: (data:object, index:number) => void;
    storeSelectorButton: () => void;
    changeDeliveryMethod: () => void;
  }