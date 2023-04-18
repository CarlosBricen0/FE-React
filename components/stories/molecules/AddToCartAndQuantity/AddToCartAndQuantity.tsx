import {
  Button,
  ButtonStatus,
  TooltipProps
} from '../../atoms'
import { Container } from '../../layout'
import { QuantityButton, QuantityButtonProps } from '..'
import { getGlobalStyle } from '../../../helpers'
import { QuantityVariantButton } from '../QuantityVariantButton/QuantityVariantButton'
import { QuantityButtonStylesProps } from '../QuantityButton/QuantityButton'
import { JustifyContent } from '../../layout/BaseContainer/BaseContainer'
import styles from './AddToCartAndQuantity.module.css'

export interface AddToCartProps {
  buttonLabel?: string;
  customJustifyContent?: JustifyContent;
  customWidth?: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  refAddToCart?: React.Ref<HTMLBaseElement>;
  isLoading?: boolean;
  itemId?: string | number;
  quantity?: number | string;
  quantityButtonProps?: Omit<QuantityButtonProps, 'value'>;
  quantityButtonStyles?: QuantityButtonStylesProps;
  showQuantityButton?: boolean;
  site?: 'unimarc' | 'alvi';
  statusButton?: ButtonStatus;
  tooltipProps?: TooltipProps;
  variant?: 'input' | 'button';
  handleOnClick?: (props?: AddToCartProps) => void;
  onBlurInput?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const AddToCartAndQuantity = ({
  buttonLabel = 'Agregar',
  customJustifyContent = 'center',
  disabled,
  isLoading,
  itemId,
  quantity,
  quantityButtonProps,
  quantityButtonStyles,
  site = 'unimarc',
  statusButton,
  variant = 'input',
  handleOnClick
}: AddToCartProps) => {
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
    <Container customClassName={styles.addToCartAndQuantity} justifyContent={customJustifyContent}>
      {
        quantity == 0 &&
        <Button
          borderRadius='50px'
          fontWeight={getGlobalStyle('--font-weight-semibold')}
          height={quantityButtonStyles?.maxHeight || '30px'}
          label={buttonLabel}
          minWidth={quantityButtonStyles?.minWidth || '100px'}
          onClick={() => {
            handleOnClick({ itemId })
          }}
          site={site}
          size='xs'
          status={statusButton}
          width={quantityButtonStyles?.maxWidth ?? undefined}
        />
      }

      {
        quantity != 0 &&
        variant === 'button' &&
        <QuantityVariantButton
          buttonProps={{
            borderRadius: '50px',
            fontWeight: getGlobalStyle('--font-weight-semibold'),
            height: quantityButtonStyles?.maxHeight || '35px',
            label: 'Agregar',
            minWidth: quantityButtonStyles?.maxWidth || '100px',
            onClick: () => {
              handleOnClick({ itemId })
            },
            size: 'xs',
            status: statusButton,
            width: quantityButtonStyles?.maxWidth ?? undefined
          }}
          disabled={statusButton === 'disabled'}
          onChange={handleChange}
          onDecrease={handleRemove}
          onIncrease={handleAdd}
          value={quantity}
        />
      }

      {
        quantity != 0 &&
        variant !== 'button' &&
        <QuantityButton
          {...quantityButtonProps}
          disabled={disabled}
          handleAdd={handleAdd}
          handleChange={handleChange}
          handleRemove={handleRemove}
          isLoading={isLoading}
          quantityButtonStyles={quantityButtonStyles}
          site={site}
          value={quantity}
        />
      }
    </Container>
  )
}
