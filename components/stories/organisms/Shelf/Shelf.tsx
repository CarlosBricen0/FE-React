import React from 'react'
import { ButtonStatus, TooltipProps } from '../../atoms'
import {
  ChipProps,
  QuantityButtonProps,
  QuantityButtonStylesProps
} from '../../molecules'
import { ShelfV1, ShelfV1Props } from './v1/ShelfV1'
import { ShelfV2, ShelfV2Props } from './v2/ShelfV2'

export interface CommonShelfProps extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  [key: string]: unknown;
  brand?: string;
  buttonLabel?: string;
  buttonStatus?: ButtonStatus;
  buttonVariant?: 'button' | 'input';
  container?: string;
  customClassName?: string;
  altText?: string;
  degrees?: string;
  format?: string;
  img?: string;
  importantWidth?: string;
  inOffer?: boolean;
  isCart?: boolean
  isDisabled?: boolean;
  isLoading?: boolean;
  isMobile?: boolean;
  isPromotion?: boolean;
  itemId?: string | number;
  likeListButtons?: boolean;
  linkWrapper?: React.FunctionComponent;
  listPrice?: number;
  offer?: number | string;
  orientation?: 'vertical' | 'horizontal'
  ppum?: string;
  ppumListPrice?: string;
  price?: number;
  promotion?: { image?: string } & ChipProps;
  provider?: string;
  quantity?: string | number;
  quantityButtonProps?: QuantityButtonProps;
  quantityButtonStyles?: QuantityButtonStylesProps;
  tooltipProps?: TooltipProps;
  stock?: boolean;
  title?: string;
  typePromotion?: number;
  url?: string;
  volume?: string;
  nextImage?: React.FunctionComponent;
  version?: 1 | 2;
  catchShelfRef?: (props?: object) => void;
  handleOnClick?: (props?: { itemId: string }) => void;
  onClickProduct?: () => void;
  onRedirect?: () => void;
}

export type ShelfProps = ShelfV1Props | ShelfV2Props

const Shelf = ({version, ...props}: ShelfProps): React.ReactElement<ShelfProps> => {
  if (version === 2)
    return <ShelfV2 {...props} />
  return <ShelfV1 {...props} />
}

const MemoShelf = React.memo(Shelf)

export {
  Shelf,
  MemoShelf
}