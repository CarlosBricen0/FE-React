import { Row } from '../../../layout'

export const changeUnit = (unit: string) => {
  return unit?.replace('Unidad', 'un')?.replace('Litro', 'L')?.replace('litro', 'L')
}

export const validatePromotion = (
  isPromotion: boolean,
  typePromotion: number,
  inOffer: boolean
) => {
  const promotionOffer = isPromotion ? false : inOffer
  const justifyContentPrice: typeof Row.arguments.justifyContent = isPromotion ? 'center' : 'start'
  const alignItemsInOffer: typeof Row.arguments.alignItems = typePromotion === 3 ? 'center' : 'start'
  const typePromotion4: boolean = typePromotion === 4
  const underlineInOffer: typeof Text.arguments.underline = typePromotion4 ? 'none' : 'line-through'
  const validateInOffer: boolean = typePromotion4 ? true : promotionOffer
  const validateListPrice: boolean = (validateInOffer || (typePromotion !== 3 && typePromotion !== 0))

  return {
    justifyContentPrice,
    alignItemsInOffer,
    underlineInOffer,
    typePromotion4,
    validateListPrice
  }
}

export const validateVertical = (
  isVertical: boolean,
  hoverHorizontalClassName: string
) => {
  const minWidthTopColumn = !isVertical ? '288px' : ''
  const promotionContainerPadding = isVertical ? '17px 14px' : '12px 0px'
  const bodyHorizontalClass = !isVertical ? hoverHorizontalClassName : ''

  return {
    bodyHorizontalClass,
    minWidthTopColumn,
    promotionContainerPadding
  }
}