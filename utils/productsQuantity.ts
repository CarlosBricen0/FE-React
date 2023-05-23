const PRODUCT_QUANTITY = 'productsUnitMultiplier'

const getStorage = (): string => {
  if (!localStorage.getItem(PRODUCT_QUANTITY))
    localStorage.setItem(PRODUCT_QUANTITY, '{}')
  return localStorage.getItem(PRODUCT_QUANTITY)
}

const getQuantityByProductId = (productId: string | number): number | undefined => {
  const products = getStorage()
  return Object(JSON.parse(products))[productId] ?? undefined
}

export default {
  getQuantityByProductId
}