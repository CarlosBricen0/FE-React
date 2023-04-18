import { Icon, Text } from '../../atoms'
import { Container } from '../../layout'
import { QuantityButtonProps } from '..'
import { QuantityButtonStylesProps } from '../QuantityButton/QuantityButton'
import styles from './AddToCartAndQuantityTop.module.css'
import { useState } from 'react'
import { AvailableQuantityBtn } from './AvailableQuantityBtn'
import { LoadingSpinner } from './LoadingSpinner'
import { useMediaQuery } from 'react-responsive'
import { getGlobalStyle } from '../../../helpers'

export interface AddToCartAndQuantityTopProps {
  disabled?: boolean;
  disabledInput?: boolean;
  disabledPlus?: boolean;
  isLoading?: boolean;
  itemId?: string | number;
  maxQuantity?: number;
  maxWidth?: string;
  quantity?: number;
  quantityButtonProps?: Omit<QuantityButtonProps, 'value'>;
  quantityButtonStyles?: QuantityButtonStylesProps;
  unitMultiplier?: number;
}

export const AddToCartAndQuantityTop = ({
  disabledInput,
  disabledPlus,
  isLoading,
  itemId,
  maxQuantity = 99,
  maxWidth = '300px',
  quantity,
  quantityButtonProps,
  quantityButtonStyles,
  unitMultiplier = 1
}: AddToCartAndQuantityTopProps) => {
  const parsedQuantity = parseFloat((quantity * unitMultiplier).toFixed(1))
  const quantityUnit = parsedQuantity / unitMultiplier
  const [inputOnFocus, setInputOnFocus] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 1279 })
  const mobileDelay = isMobile ? styles.quantityButton__fadeInDelay : ''

  const handleOnClick = () => {
    quantityButtonProps?.handleOnClick({ itemId })
  }

  const availableQuantityBtnProps = {
    disabledInput,
    disabledPlus,
    isLoading,
    isMobile,
    itemId,
    maxQuantity,
    quantity: parsedQuantity,
    quantityButtonProps,
    quantityButtonStyles,
    quantityUnit,
    unitMultiplier,
    setInputOnFocus
  }

  return (
    <Container maxWidth={maxWidth}>
      <Container customClassName={styles.quantityButton__container} justifyContent='end'>
        <Container
          alignItems='center'
          borderRadius='24px'
          clickable='pointer'
          customClassName={`${styles.quantityButton__fadeIn} ${mobileDelay}`}
          justifyContent='center'
          maxHeight='30px'
        >
          {isMobile || quantityUnit > 0 || inputOnFocus ? (
            <AvailableQuantityBtn {...availableQuantityBtnProps}/>
          ) : (
            <Container
              alignItems='center'
              alignSelf='center'
              clickable='pointer'
              justifyContent='center'
              minHeight='30px'
              onClick={isLoading ? undefined : handleOnClick}
            >
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <Text
                  clickable='pointer'
                  color={'primary-green'}
                  fontSize='md'
                >
                  Agregar
                </Text>
              )}
            </Container>
          )}
        </Container>
        <Container
          clickable='pointer'
          customClassName={`${styles.quantityButton__fadeOut} ${mobileDelay}`}
          justifyContent='end'
        >
          {quantityUnit > 0 ? (
            <Container
              alignItems='center'
              alignSelf='center'
              borderRadius='30px'
              clickable='pointer'
              customClassName={styles.quantityButton__withQuantity}
              customHeight='30px'
              justifyContent='center'
              maxWidth='30px'
            >
              <Text
                clickable='pointer'
                color='white'
                fontSize='md'
              >
                {parsedQuantity}
              </Text>
            </Container>
          ) : (
            <Container
              justifyContent='end'
              maxWidth='30px'
              onTouchEnd={isMobile && quantity === 0 ? handleOnClick : undefined}
              zIndex={getGlobalStyle('--z-index-5')}
            >
              <Icon
                clickable='pointer'
                customSize={30}
                name='PlusInCircle2'
              />
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  )
}