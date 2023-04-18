import classNames from 'classnames'
import { useState } from 'react'
import { Button } from '../../../../atoms'
import { Container } from '../../../../layout'
import { CallbackParams } from '../ShelfAddToCart/ShelfAddToCart'
import styles from './ShelfCouponButton.module.css'

export interface ShelfCouponButtonProps {
  couponStatus?: string;
  isLoading?: boolean;
  itemId?: string | number;
  isMobile?: boolean;
  label?: string;
  labelActivated?: string;
  labelLoading?: string;
  labelNew?: string;
  labelUsed?: string;
  quantity?: string | number;
  quantityDisplay?: string | number;
  onAddFirst?: (props?: CallbackParams) => void;
  onAdd?: (params: CallbackParams) => void;
  onClick?: () => void;
}

const getLabel = ({
  couponStatus,
  isLoading,
  label,
  labelActivated,
  labelUsed,
  labelLoading,
  labelNew
}: Partial<ShelfCouponButtonProps>, isMouseOn: boolean) => {
  if (isLoading) return labelLoading

  const labelValues = {
    'new': isMouseOn ? labelNew : label,
    'active': labelActivated,
    'used': labelUsed
  }

  return labelValues?.[couponStatus] || label
}

export const ShelfCouponButton = ({
  couponStatus = 'new',
  isLoading,
  itemId,
  label = 'Activar cupón',
  labelLoading = 'Activando cupón',
  labelNew = 'Activar cupón',
  labelActivated = 'Cupón activado',
  labelUsed = 'Cupón utilizado',
  quantity,
  quantityDisplay,
  onAddFirst,
  onAdd,
  onClick
}: ShelfCouponButtonProps): React.ReactElement<ShelfCouponButtonProps> => {
  const [isMouseOn, setIsMouseOn] = useState(false)
  const isActive = couponStatus === 'active'
  const quantityValue = parseFloat(`${quantity || quantityDisplay || 0}`)

  const displayLabel = getLabel({ couponStatus, isLoading, label, labelActivated, labelUsed, labelLoading, labelNew }, isMouseOn)

  const handleAdd = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    e?.preventDefault()
    if (quantityValue === 0)
      onAddFirst({ itemId })
    else
      onAdd({ itemId })
  }

  const handleClick = () => {
    if (!isActive) {
      quantityValue === 0 && handleAdd()
    }
    onClick?.()
  }

  const handleMouseEnter = () => {
    setIsMouseOn(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOn(false)
  }

  return (
    <Container
      borderRadius='100px'
      customClassName={classNames(
        styles.buttonContainer,
        {
          [styles.newBorder]: couponStatus === 'new',
          [styles.activatedBorder]: couponStatus === 'active',
          [styles.usedBorder]: couponStatus === 'used'
        }
      )}
      overflow='hidden'
      position='relative'
    >
      <Button
        customClassName={classNames(
          styles.shelfCouponButton,
          {
            [styles.loading]: isLoading,
            [styles.new]: couponStatus === 'new',
            [styles.activated]: couponStatus === 'active',
            [styles.used]: couponStatus === 'used'
          }
        )}
        label={displayLabel}
        minWidth='40px'
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type='plain'
        width='100%'
      />
    </Container>
  )
}