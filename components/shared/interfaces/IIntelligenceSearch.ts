export interface AvailableProduct {
  brand?: string;
  brandId?: number;
  cartLimit?: number;
  categories?: string[];
  categoriesIds?: unknown[];
  categoryId?: string;
  collections?: string[];
  description?: string;
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
  productId?: string;
  promotion?: unknown;
  refId?: string;
  sellers?: Seller[];
  sku?: string;
  unitMultiplier?: number;
  unitMultiplierUn?: number;
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