import { getGlobalStyle } from '../../../helpers'
import { Button } from '../../atoms'
import { Container } from '../../layout'
import { AddToCartProps } from '../AddToCartAndQuantity/AddToCartAndQuantity'
import styles from './AddToCartQuoter.module.css'
import { QuantityQuoter } from './QuantityQuoter'

export const AddToCartQuoter = ({
  buttonLabel = 'Agregar',
  customJustifyContent = 'center',
  disabled,
  inputRef,
  isLoading,
  itemId,
  quantity,
  quantityButtonProps,
  quantityButtonStyles,
  refAddToCart,
  showQuantityButton = false,
  statusButton,
  handleOnClick,
  onBlurInput,
  onKeyPress
}: AddToCartProps) =>{

  const handleAdd = () => {
    quantityButtonProps.handleAdd({ itemId })
  }

  const handleRemove = () => {
    quantityButtonProps.handleRemove({ itemId })
  }

  const handleChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    quantityButtonProps.handleChange(e, { itemId })
  }
  return (
    <Container
      customClassName={styles.addToCartAndQuantity}
      justifyContent={customJustifyContent}
      ref={refAddToCart}
    >
      {!showQuantityButton &&
      <Button
        borderRadius='50px'
        fontWeight={getGlobalStyle('--font-weight-semibold')}
        height={quantityButtonStyles?.maxHeight || '30px'}
        iconName='Edit'
        label={buttonLabel}
        minWidth={quantityButtonStyles?.minWidth || '100px'}
        onClick={() => { handleOnClick({ itemId }) }}
        size='xs'
        status={statusButton}
        width={quantityButtonStyles?.maxWidth ?? undefined}
      />
      }
      {showQuantityButton &&
      <QuantityQuoter
        inputRef={inputRef}
        onKeyPress={onKeyPress}
        {...quantityButtonProps}
        disabled={disabled}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
        isLoading={isLoading}
        onBlurInput={onBlurInput}
        quantityButtonStyles={quantityButtonStyles}
        value={quantity}
      />
      }
    </Container>
  )
}