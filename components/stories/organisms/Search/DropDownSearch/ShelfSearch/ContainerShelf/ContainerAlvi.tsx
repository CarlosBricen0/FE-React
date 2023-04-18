import {
  Link,
  Picture,
  Text
} from '../../../../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../../../../layout'
import { currencyFormat } from '../../../../../../helpers'
import { AddToCartAndQuantity } from '../../../../../molecules'
import { ShelfSearchProps } from '../ShelfSearch'
import { PropertiesProducts } from '../../../../ShelfAlvi/helpers/PropertiesProducts'
import styles from './ContainerAlvi.module.css'

const ContainerAlvi = ({
  brand,
  buttonStatus = 'initial',
  img,
  isDisabled,
  isLoading,
  isLoggedIn = false,
  isMobile = false,
  itemId,
  maxQuantity,
  price,
  priceSteps,
  productUrl,
  quantity = 0,
  quantityButtonProps,
  sellers,
  title,
  tooltipProps,
  validationStatus,
  handleOnClickShelfSearch
}: ShelfSearchProps): React.ReactElement<ShelfSearchProps> => {
  const brandSize = isMobile ? 'xs' : 'sm'
  const titleSize = isMobile ? 'sm' : 'md'
  const { sortPriceStep } = PropertiesProducts({ product: { priceSteps } })
  const finalPrice = isLoggedIn && validationStatus !== '0' ? currencyFormat({ number: (sortPriceStep[0] ? sortPriceStep[0].promotionalPrice : price), bool: false })
    : currencyFormat({ number: sellers[0].price, bool: false })
  const titlePrice = isLoggedIn && validationStatus !== '0' ? `Desde ${sortPriceStep[0] && sortPriceStep[0].minQuantity} un` : 'Precio regular'

  return (
    <>
      <Column clickable='pointer' customWidth='20.4'>
        <Link
          clickable
          href={productUrl}
          underline='none'
        >
          <Picture
            alt={title}
            border='none'
            borderRadius='none'
            height='72px'
            src={img}
            url={productUrl}
            width='100%'
          />
        </Link>
      </Column>
      <Spacer.Vertical size={12} />
      <Column customWidth='82'>
        <Text
          clickable='pointer'
          color='black'
          customClassName={styles.brand}
          fontSize={brandSize}
          fontWeight='semibold'
          underline='hover'
        >
          {brand}
        </Text>
        <Row>
          <Link href={productUrl} underline='none'>
            <Text
              clickable='pointer'
              color='black'
              fontSize={titleSize}
              truncate={40}
              underline='hover'
            >
              {title}
            </Text>
          </Link>
        </Row>
        <Spacer.Horizontal size={8} />
        <Row alignItems='center' justifyContent='between'>
          <Column justifyContent='start'>
            <Text
              color='gray'
              fontSize='xs'
              fontWeight='regular'
            >
              {titlePrice}
            </Text>
            <Row alignItems='end'>
              <Text
                color='blue'
                fontSize='md'
                fontWeight='semibold'
              >
                {finalPrice}
              </Text>
              <Spacer.Vertical size={4} />
              <Text
                color='blue'
                fontSize='sm'
                fontWeight='semibold'
              >
                c/u
              </Text>
            </Row>
          </Column>
          <Column maxWidth='max-content'>
            <AddToCartAndQuantity
              customWidth='120px'
              disabled={isDisabled}
              handleOnClick={handleOnClickShelfSearch}
              isLoading={isLoading}
              itemId={itemId}
              quantity={quantity}
              quantityButtonProps={{
                maxQuantity,
                ...quantityButtonProps
              }}
              quantityButtonStyles={quantityButtonProps?.quantityButtonStyles}
              site='alvi'
              statusButton={buttonStatus}
              tooltipProps={tooltipProps}
            />
          </Column>
        </Row>
      </Column>
    </>
  )
}

export default ContainerAlvi