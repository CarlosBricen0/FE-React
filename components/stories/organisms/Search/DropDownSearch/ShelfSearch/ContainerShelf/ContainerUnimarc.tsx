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

const ContainerUnimarc = ({
  buttonStatus = 'initial',
  img,
  inOffer,
  isDisabled,
  isLoading,
  itemId,
  linkWrapper,
  listPrice,
  maxQuantity,
  price,
  productUrl,
  quantity = 0,
  quantityButtonProps,
  title,
  tooltipProps,
  handleOnClickShelfSearch
}: ShelfSearchProps): React.ReactElement<ShelfSearchProps> => {
  return (
    <>
      <Column clickable='pointer' customWidth='18'>
        <Link
          href={productUrl}
          underline='none'
          wrapper={linkWrapper}
        >
          <Picture
            alt={title}
            border='none'
            borderRadius='none'
            height='60px'
            src={img}
            width='100%'
          />
        </Link>
      </Column>
      <Spacer.Vertical size={12} />
      <Column customWidth='82'>
        <Link
          href={productUrl}
          underline='none'
          wrapper={linkWrapper}
        >
          <Text
            clickable='pointer'
            color='black'
            fontSize='sm'
            truncate={40}
            underline='hover'
          >
            {title}
          </Text>
        </Link>
        <Spacer.Horizontal size={4} />
        <Row alignItems='center' justifyContent='between'>
          <Column maxWidth='max-content'>
            <AddToCartAndQuantity
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
              statusButton={buttonStatus}
              tooltipProps={tooltipProps}
            />
          </Column>
          <Column
            alignItems='center'
            customWidth='16'
            justifyContent='end'
          >
            {inOffer
              ? (
                <>
                  <Text
                    color='guardsman-red'
                    fontSize='md'
                    fontWeight='semibold'
                  >
                    {currencyFormat({ number: price, bool: false })}
                  </Text>
                  {price !== listPrice && (
                    <Text
                      color='black'
                      fontSize='sm'
                      underline='line-through'
                    >
                      {currencyFormat({ number: listPrice, bool: false })}
                    </Text>
                  )}
                </>
              )
              : (
                <Text
                  color='guardsman-red'
                  fontSize='md'
                  fontWeight='semibold'
                >
                  {currencyFormat({ number: price, bool: false })}
                </Text>
              )}
          </Column>
        </Row>
      </Column>
    </>
  )
}

export default ContainerUnimarc