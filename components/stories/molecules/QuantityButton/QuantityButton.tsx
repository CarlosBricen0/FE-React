import React, { useState } from 'react'
import { getGlobalStyle } from '../../../helpers'
import { Icon, Input } from '../../atoms'
import { Container, Row } from '../../layout'
import { AddOrRemoveBtn } from './AddRemoveBtn'
import styles from './QuantityButton.module.css'

export interface QuantityButtonStylesProps {
  fontSize?: 'sm' | 'md' | 'lg';
  inputMaxHeight?: string;
  margin?: string;
  maxHeight: string;
  maxWidth: string;
  minWidth?: string;
  sizeCircle: number;
}

export interface QuantityButtonProps {
  alert?: string;
  alternativeBackground?: string;
  autoFocus?: boolean;
  background?: string;
  disabled?: boolean;
  disabledInput?: boolean;
  disabledLess?: boolean;
  disabledPlus?: boolean;
  isLoading?: boolean;
  margin?: string;
  maxHeight?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  maxQuantity?: number;
  maxWidth?: string;
  oldQuantityBtn?: boolean;
  placeholder?: string;
  quantity?: number;
  quantityButtonStyles?: QuantityButtonStylesProps;
  rebranding?: boolean
  size?: 'md' | 'sm';
  textAfterQuantity?: string;
  value?: number | string;
  handleAdd: (props?: unknown) => void;
  handleChange?: (e?: React.ChangeEvent<HTMLInputElement> | number, props?: unknown) => void;
  handleOnClick?: (props?: unknown) => void;
  handleRemove: (props?: unknown) => void;
  onBlurInput?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
}


const getQuantityMessage = (
  isMaxQuantity: boolean,
  showValue: string | number,
  textAfterQuantity: string
) => {
  if (textAfterQuantity && isMaxQuantity) {
    return `Máx ${showValue} ${textAfterQuantity}`
  }
  if (textAfterQuantity && !isMaxQuantity) {
    return `${showValue} ${textAfterQuantity}`
  }
  if (!textAfterQuantity && isMaxQuantity) {
    return `Máx ${showValue}`
  }
  return showValue
}

export const QuantityButton = ({
  background,
  disabled = false,
  disabledInput = false,
  disabledLess = false,
  disabledPlus = false,
  isLoading = false,
  maxQuantity = 100,
  quantity,
  quantityButtonStyles = {
    fontSize: 'md',
    margin: '0px',
    maxHeight: '35px',
    maxWidth: '100%',
    sizeCircle: 25
  },
  textAfterQuantity = '',
  value,
  handleAdd,
  handleRemove,
  handleChange
}: QuantityButtonProps): React.ReactElement => {
  const [shake, setShake] = useState(false)

  const getQuantity = parseFloat(`${quantity || value}`)
  const showValue = isLoading ? '' : value
  const isMaxQuantity = getQuantity >= parseFloat(`${maxQuantity}`)
  const isMinQuantity = getQuantity == 0
  const isRightDisabled = disabled || disabledPlus || isMaxQuantity
  const isLeftDisabled = disabled || disabledLess || isMinQuantity
  const quantityMessage = getQuantityMessage(isMaxQuantity, showValue, textAfterQuantity)


  const handleValidateInput = (e) => {
    if (/([a-zA-Z]|[`!@#$%^&*()_+\-=[\]{}':"\\|,.<>/?~])/.test(e.target.value)) return
    if (e.target.value == '' || e.target.value == null) e.target.value = 1

    if (e.target.value <= maxQuantity) {
      handleChange(e)
    }
  }

  const addChake = () => {
    setShake(true)
    setTimeout(() => { return setShake(false) }, 2000)
  }

  return (
    <Container
      alignItems='center'
      background={background}
      backgroundColor={background}
      borderRadius={quantityButtonStyles.maxHeight}
      customClassName={shake ? styles['quantityBtn--shake'] : ''}
      justifyContent='center'
      margin={quantityButtonStyles.margin}
      maxHeight={quantityButtonStyles.maxHeight}
      maxWidth={quantityButtonStyles.maxWidth}
      minWidth={quantityButtonStyles.minWidth}
      position='relative'
      tagName='article'
    >
      <AddOrRemoveBtn
        alternativeBackground={background}
        disabled={isLeftDisabled}
        handleQuantity={handleRemove}
        handleShake={addChake}
        type='left'
      />
      {!isLoading ? (
        <Input
          background={getGlobalStyle('--color-base-transparent')}
          color={getGlobalStyle('--color-base-white')}
          disabled={disabled || isLoading || disabledInput || isMaxQuantity}
          fontSize={quantityButtonStyles.fontSize}
          height={quantityButtonStyles.maxHeight}
          maxWidth='100%'
          onChange={handleValidateInput}
          type='text'
          value={quantityMessage}
          width='100%'
        />
      ) : (
        <Row className={styles.loading}>
          <Icon
            color={getGlobalStyle('--color-alvi-neutral-white')}
            customSize={20}
            name='Loading'
          />
        </Row>
      )
      }
      <AddOrRemoveBtn
        alternativeBackground={background}
        disabled={isRightDisabled}
        handleQuantity={handleAdd}
        handleShake={addChake}
        type='right'
      />
    </Container>
  )
}
