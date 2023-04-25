import React, { useState } from 'react'
import { getGlobalStyle } from '../../../helpers'
import { Icon, Input } from '../../atoms'
import { Container, Row } from '../../layout'
import { AddOrRemoveBtn } from '../QuantityButton/AddRemoveBtn'
import { QuantityButtonProps } from '../QuantityButton/QuantityButton'
import styles from './AddToCartQuoter.module.css'

export const QuantityQuoter = ({
  disabled = false,
  disabledInput = false,
  disabledLess = false,
  disabledPlus = false,
  inputRef,
  isLoading = false,
  maxQuantity = 1000,
  quantity,
  quantityButtonStyles = {
    fontSize: 'md',
    margin: '0px',
    maxHeight: '35px',
    maxWidth: '100%',
    sizeCircle: 25
  },
  value,
  handleAdd,
  handleChange,
  handleRemove,
  onBlurInput,
  onKeyPress
}: QuantityButtonProps): React.ReactElement => {
  const [shake, setShake] = useState(false)
  const getQuantity = parseFloat(`${quantity || value}`)
  const isMaxQuantity = getQuantity >= parseFloat(`${maxQuantity}`)
  const isMinQuantity = getQuantity == 0
  const isRightDisabled = disabled || disabledPlus || isMaxQuantity
  const isLeftDisabled = disabled || disabledLess || isMinQuantity

  const handleTyping = (e) => {
    if (/([a-zA-Z]|[`!@#$%^&*()_+\-=[\]{}':"\\|<>/?~])/.test(e.target.value)) return

    handleChange(e)
  }

  const addChake = () => {
    setShake(true)
    setTimeout(() => { return setShake(false) }, 2000)
  }

  return (
    <Container
      alignItems='center'
      background={getGlobalStyle('--color-alvi-primary-blue-gradient')}
      backgroundColor={getGlobalStyle('--color-alvi-primary-blue-gradient)')}
      borderRadius={quantityButtonStyles.maxHeight}
      customClassName={shake ? styles['quantityBtn--shake'] : ''}
      justifyContent='center'
      margin={quantityButtonStyles.margin}
      maxHeight={quantityButtonStyles.maxHeight}
      maxWidth={quantityButtonStyles.maxWidth}
      minWidth={quantityButtonStyles.minWidth}
      onBlur={onBlurInput}
      position='relative'
      tabIndex={0}
      tagName='article'
    >
      <AddOrRemoveBtn
        alternativeBackground={getGlobalStyle('--color-alvi-primary-blue-gradient')}
        circleStyle={{
          iconColor: getGlobalStyle('--color-alvi-primary-blue'),
          sizeButton: quantityButtonStyles.maxHeight,
          sizeCircle: quantityButtonStyles.sizeCircle
        }}
        disabled={isLeftDisabled}
        handleQuantity={handleRemove}
        handleShake={addChake}
        type='left'
      />
      {!isLoading ? (
        <Input
          autoFocus
          background='white'
          color={getGlobalStyle('--color-alvi-primary-blue3')}
          disabled={disabled || isLoading || disabledInput || isMaxQuantity}
          fontSize={quantityButtonStyles.fontSize}
          fontWeight='bold'
          height={quantityButtonStyles?.inputMaxHeight || quantityButtonStyles.maxHeight}
          inputMode='decimal'
          margin={quantityButtonStyles?.margin}
          maxWidth='100%'
          onBlur={onBlurInput}
          onChange={handleTyping}
          onKeyPress={onKeyPress}
          ref={inputRef}
          value={value}
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
        alternativeBackground={getGlobalStyle('--color-alvi-primary-blue-gradient')}
        circleStyle={{
          iconColor: getGlobalStyle('--color-alvi-primary-blue'),
          sizeButton: quantityButtonStyles.maxHeight,
          sizeCircle: quantityButtonStyles.sizeCircle
        }}
        disabled={isRightDisabled}
        handleQuantity={handleAdd}
        handleShake={addChake}
        type='right'
      />
    </Container>
  )
}
