import {
  ButtonStatus,
  Divider,
  TooltipProps
} from '../../../../atoms'
import {
  Column,
  Row
} from '../../../../layout'
import { QuantityButtonProps } from '../../../../molecules'
import ContainerUnimarc from './ContainerShelf/ContainerUnimarc'
import ContainerAlvi from './ContainerShelf/ContainerAlvi'
import { PartnerPriceProps } from '../../../ShelfAlvi/PartnerPrice'
import { Seller } from '../../../../../shared/interfaces/IIntelligenceSearch'
import { getGlobalStyle } from '../../../../../helpers'

export interface ShelfSearchProps {
  [key: string]: unknown;
  backgroundGradientButton?: string;
  brand?: string;
  buttonStatus?: ButtonStatus;
  format?: string;
  img?: string;
  inOffer?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isLoggedIn?: boolean;
  isMobile?: boolean;
  itemId?: string | number;
  linkWrapper?: React.FunctionComponent;
  listPrice?: number;
  maxQuantity?: number;
  price?: number;
  priceSteps?: Array<PartnerPriceProps>;
  product?: { itemId?: string };
  productUrl?: string;
  quantity?: number;
  quantityButtonProps?: Omit<QuantityButtonProps, 'value'>;
  sellers?: Seller[];
  site?: string;
  title?: string;
  tooltipProps?: TooltipProps;
  validationStatus?: string;
  handleOnClickShelfSearch?: (props?: unknown) => void;
  productRef?: (props?: object) => void;
}

const itemsIdCollection = []
const nodesCollection = []

export const ShelfSearch = (props: ShelfSearchProps): React.ReactElement<ShelfSearchProps> => {
  const {
    product,
    site = 'unimarc',
    title,
    productRef
  } = props

  const updateNodoRefs = ref => {
    if (ref && itemsIdCollection.indexOf(product?.itemId) == -1) {
      itemsIdCollection.push(product?.itemId)
      nodesCollection.push(ref)
      productRef({ ref, product })
    }
  }
  return (
    <Column ref={updateNodoRefs}>
      <Row
        alignItems='center'
        customHeight='100%'
        key={title}
      >
        {site === 'unimarc' ? <ContainerUnimarc {...props} /> : <ContainerAlvi {...props} />}
      </Row>
      <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={8} />
    </Column>
  )
}
