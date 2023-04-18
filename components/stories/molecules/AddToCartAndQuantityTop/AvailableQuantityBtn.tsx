import { Icon, Input } from '../../atoms'
import { Container } from '../../layout'
import { QuantityButtonProps } from '..'
import { getGlobalStyle } from '../../../helpers'
import { QuantityButtonStylesProps } from '../QuantityButton/QuantityButton'
import { LoadingSpinner } from './LoadingSpinner'

export interface AvailableQuantityBtnProps {
  disabledInput?: boolean;
  disabledPlus?: boolean;
  isLoading?: boolean;
  isMobile?: boolean;
  itemId?: string | number;
  maxQuantity?: number;
  quantity?: number | string;
  quantityButtonProps?: Omit<QuantityButtonProps, 'value'>;
  quantityButtonStyles?: QuantityButtonStylesProps;
  quantityUnit: number;
  unitMultiplier?: number;
  setInputOnFocus: (props: boolean) => void;
}

export const AvailableQuantityBtn = ({
  disabledInput,
  disabledPlus,
  isLoading,
  isMobile,
  itemId,
  maxQuantity = 99,
  quantity,
  quantityButtonProps,
  quantityButtonStyles,
  quantityUnit,
  unitMultiplier,
  setInputOnFocus
}: AvailableQuantityBtnProps) => {
  const quantityZero = quantity === 0

  const handleAdd = () => {
    quantityButtonProps.handleAdd({ itemId })
  }

  const handleRemove = () => {
    quantityButtonProps.handleRemove({ itemId })
  }

  const handleChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuantity = parseInt(e.target.value.replace(/^0/g, ''))
    const inputValue = inputQuantity >= maxQuantity ? maxQuantity : inputQuantity
    e.target.value = inputValue.toString()
    quantityButtonProps.handleChange(e , { itemId })
  }

  return (
    <>
      <Container
        justifyContent='start'
        margin='0px -5px 0px 0px'
        zIndex={getGlobalStyle('--z-index-5')}
      >
        <Icon
          clickable={isLoading || quantityZero ? 'no-drop' : 'pointer'}
          customSize={30}
          name={quantityUnit > 1 ? 'MinusInCircle' : 'TrashInCircle'}
          onClick={isLoading || quantityZero ? undefined : handleRemove}
        />
      </Container>
      <Container alignSelf='center' justifyContent='center'>
        <Container
          alignSelf='center'
          justifyContent='center'
          minWidth={isMobile ? '25px' : '45px'}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Input
              background={getGlobalStyle('--color-base-transparent')}
              color={getGlobalStyle('--color-primary-green')}
              disabled={isLoading || disabledInput || unitMultiplier % 1 != 0}
              fontSize={quantityButtonStyles?.fontSize}
              height={quantityButtonStyles?.maxHeight}
              onBlur={() => {setInputOnFocus(false)}}
              onChange={handleChange}
              onFocus={() => {setInputOnFocus(true)}}
              type='number'
              value={quantity}
              width='100%'
            />
          )}
        </Container>
      </Container>
      <Container
        justifyContent='end'
        margin='0px 0px 0px -5px'
      >
        <Icon
          clickable={(disabledPlus || isLoading) ? 'no-drop' : 'pointer'}
          customSize={30}
          name='PlusInCircle'
          onClick={!(disabledPlus || isLoading) ? handleAdd : undefined}
        />
      </Container>
    </>
  )
}