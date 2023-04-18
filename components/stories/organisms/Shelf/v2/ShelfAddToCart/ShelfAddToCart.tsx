import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import { getGlobalStyle } from '../../../../../helpers'
import { Icon, Text } from '../../../../atoms'
import {
  Column,
  Container,
  Spacer
} from '../../../../layout'
import { ShelfSideButton } from '../ShelfSideButton'
import styles from './ShelfAddToCart.module.css'

export interface CallbackParams {
  itemId: string | number;
}

export interface ShelfAddToCartProps {
  couponStatus?: string
  disabled?: boolean;
  isMobile?: boolean;
  isHover?: boolean;
  itemId?: string | number;
  maxQuantity?: number;
  quantity?: string | number;
  quantityDisplay?: string | number;
  unitMultiplier?: number;
  onActivateCoupon?: () => void;
  onAddFirst?: (props?: CallbackParams) => void;
  onAdd?: (params: CallbackParams) => void;
  onRemove?: (params: CallbackParams) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, params: CallbackParams) => void;
}

export const ShelfAddToCart = ({
  couponStatus,
  disabled,
  isHover,
  isMobile,
  itemId,
  maxQuantity = 100,
  quantity,
  quantityDisplay,
  unitMultiplier = 1,
  onActivateCoupon,
  onAddFirst,
  onAdd,
  onRemove
}: ShelfAddToCartProps): React.ReactElement<ShelfAddToCartProps> => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMouseOn, setIsMouseOn] = useState(false)
  const addButton = useRef(null)
  const quantityValue = parseFloat(`${quantity || quantityDisplay || 0}`)
  const quantityByDisplay = quantityDisplay ? parseFloat(quantityDisplay.toString().replace(/[A-Z\s]+/, '')) : 1
  const hasUnits = quantityDisplay ? quantityDisplay.toString().includes('kg') : false
  const isRemoveDisabled = disabled || quantityValue <= 0
  const isAddDisabled = disabled || quantityValue >= maxQuantity
  const customHeight = '40px'
  const customWidth = hasUnits ? '70px' : customHeight
  const addAndRemoveSize = '30px'
  const computedBackgroundColor = disabled ? getGlobalStyle('--color-primary-disabled') : getGlobalStyle('--color-background-primary')

  const handleAdd = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    e?.preventDefault()
    if (quantityValue === 0)
      onAddFirst && onAddFirst({ itemId })
    else
      onAdd({itemId})
    if (couponStatus === 'new' && onActivateCoupon) onActivateCoupon()
  }

  const handleRemove = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    e?.preventDefault()
    onRemove({itemId})
    if (quantityByDisplay === unitMultiplier && isMobile){
      setIsOpen(false)
    }
  }

  const handleMouseEnter = () => {
    setIsMouseOn(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOn(false)
  }

  const handleOpenClick = () => {
    isMobile && setIsOpen(true)
    if (quantityValue === 0) {
      if (couponStatus === 'new' && onActivateCoupon) onActivateCoupon()
      onAddFirst && onAddFirst({ itemId })
    }
  }

  useEffect(() => {
    if (!isMobile ) {
      setIsOpen(isHover || isMouseOn)
    }
  }, [isHover, isMouseOn])

  useEffect(() => {
    function handleClickOutside(event) {
      if (addButton.current && !addButton.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [addButton])

  return (
    <Container
      backgroundColor={computedBackgroundColor}
      boxShadow='0 0 10px rgba(27, 33, 56, 0.15)'
      customClassName={classNames(
        styles.addToCart,
        {
          [styles.disabled]: disabled,
          [styles.hover]: isOpen
        }
      )}
      customHeight={customHeight}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      overflow='hidden'
      position='relative'
      ref={addButton}
      tabIndex={0}
      width={customWidth}
      zIndex='2'
    >
      <Container
        alignItems='center'
        customClassName={classNames(
          styles['addToCart__quantity'],
          {
            [styles['show']]: !isOpen
          }
        )}
        customHeight='100%'
        customWidth='100%'
        justifyContent='center'
        onClick={handleOpenClick}
        position='absolute'
      >
        { quantityDisplay ?
          <Text
            aria-label='Cantidad-text'
            customColor={getGlobalStyle('--color-base-white')}
            fontSize='md'
            fontWeight='semibold'
          >
            {quantityDisplay}
          </Text>
          :
          <Icon
            aria-label='Agregar al carrito'
            color={getGlobalStyle('--color-base-white')}
            customSize={15}
            name='PlusThin'
          />
        }
      </Container>
      <Container
        alignItems='center'
        className={classNames(
          styles['addToCart__quantity'],
          {
            [styles['show']]: isOpen
          }
        )}
        customHeight='100%'
        justifyContent='between'
        padding='5px'
      >
        { quantityValue > 0 ?
          <Container alignItems='center'>
            <Container width='fit-content'>
              <ShelfSideButton
                aria-label='Remover'
                disabled={isRemoveDisabled}
                icon={quantityByDisplay === unitMultiplier ? 'Trash' : 'Minus'}
                iconColor={getGlobalStyle('--color-primary-red2')}
                onClick={handleRemove}
                size={addAndRemoveSize}
              />
            </Container>
            <Column className={styles['quantity-container']} width='100%'>
              <Text
                color={'white'}
                fontSize='md'
                fontWeight='semibold'
              >
                {quantityDisplay}
              </Text>
            </Column>
            <Container width='fit-content'>
              <ShelfSideButton
                aria-label='Agregar'
                disabled={isAddDisabled}
                icon='Plus'
                iconColor={getGlobalStyle('--color-primary-red2')}
                onClick={handleAdd}
                size={addAndRemoveSize}
              />
            </Container>
          </Container>
          :
          <Container
            alignItems='center'
            aria-label='Agregar'
            clickable='pointer'
            customClassName={styles['no-select']}
            customHeight='100%'
            justifyContent='center'
            onClick={handleAdd}
            width='100'
          >
            <Icon
              clickable='pointer'
              customSize={15}
              name='PlusThin'
            />
            <Spacer.Vertical size={8} />
            <Text clickable='pointer' color='white'>
              Agregar
            </Text>
          </Container>
        }
      </Container>
    </Container>
  )
}
