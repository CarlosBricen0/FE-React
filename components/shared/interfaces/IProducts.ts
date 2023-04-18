export interface Product {
  brand?: string;
  brandId?: number;
  cartLimit?: number;
  categories?: string[];
  categoriesIds?: unknown[];
  categoryId?: string;
  collections?: string[];
  description?: string;
  detailUrl?: string;
  ean?: string;
  format?: string;
  images?: string[];
  itemId?: string;
  measurementUnit?: string;
  measurementUnitUn?: string;
  metaTagDescription?: null | string;
  name?: string;
  nameComplete?: string;
  pack?: number;
  priceSteps?: PriceSteps[];
  productId?: string;
  promotion?: Promotion | unknown;
  refId?: string;
  sellers?: Seller[];
  sku?: string;
  unitMultiplier?: number;
  unitMultiplierUn?: number;
}

export interface Promotion {
  descriptionCode: number;
  descriptionMessage: string;
  hasPackMessage: boolean;
  hasSavings: boolean;
  name: string;
  offerMessage: boolean;
  packMessage: string;
  ppum: string;
  price: number;
  saving: number;
  type: string;
}

export interface Seller {
  availableQuantity?: number;
  inOffer?: boolean;
  listPrice: number;
  ppum?: string;
  ppumListPrice?: string;
  price: number;
  priceWithoutDiscount?: number;
  rewardValue?: number;
  sellerId?: string;
  sellerName?: string;
}

export interface PriceSteps {
  _id?: string;
  isMobile?: boolean;
  minQuantity?: number;
  orientation?: 'horizontal' | 'vertical';
  pdp?: boolean;
  percentualDiscount?: number;
  promotionalPrice?: number;
  unit?: string;
}