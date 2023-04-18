import React from 'react'
import { render, screen } from '@testing-library/react'
import { QuantityQuoter } from './QuantityQuoter'
import userEvent from '@testing-library/user-event'
import { QuantityButtonProps } from '../QuantityButton/QuantityButton'

describe('<AddToCartQuoter />', () => {

  const component = (props?: Partial<QuantityButtonProps>) => {
    const initialProps: QuantityButtonProps = {
      handleAdd: jest.fn(),
      handleChange: jest.fn(),
      handleRemove: jest.fn(),
      onBlurInput: jest.fn(),
      onKeyPress: jest.fn(),
      value: 100,
      quantity: undefined,
      maxQuantity: 101,
      isLoading: false,
      disabled: false,
      disabledInput: false,
      disabledLess: false,
      disabledPlus: false,
      inputRef: undefined,
      quantityButtonStyles: {
        fontSize: 'md',
        margin: '0px',
        maxHeight: '35px',
        maxWidth: '100%',
        sizeCircle: 25
      },
      site: 'alvi'
    }
    return render(<QuantityQuoter {...initialProps} {...props} />)
  }

  test('should render button RemoveBtn left', () => {
    component()
    expect(screen.getByRole(/MinusCircle/i)).toBeInTheDocument()
  })

  test('should render button RemoveBtn right', () => {
    component()
    expect(screen.getByRole(/PlusCircle/i)).toBeInTheDocument()
  })

  test('should render value input', () => {
    component()
    expect(screen.getByDisplayValue(/100/i)).toBeInTheDocument()
  })

  test('should calls the handleAdd function when the right button is clicked', () => {
    // Arrange
    const handleAdd = jest.fn()

    component({ handleAdd })

    // Act
    userEvent.click(screen.getByRole(/PlusCircle/i))

    // Assert
    expect(handleAdd).toHaveBeenCalledTimes(1)
  })

  test('should calls the handleAdd function when the left button is clicked', () => {
    // Arrange
    const handleRemove = jest.fn()

    component({ handleRemove })

    // Act
    userEvent.click(screen.getByRole(/MinusCircle/i))

    // Assert
    expect(handleRemove).toHaveBeenCalledTimes(1)
  })

  test('should disables the left button when the quantity is 0', () => {
    // Arrange
    const handleRemove = jest.fn()
    const quantity = 0

    component({ quantity, handleRemove })

    // Act
    userEvent.click(screen.getByRole(/PlusCircle/i))

    // Assert
    expect(handleRemove).toHaveBeenCalledTimes(0)
  })

  test('should disables the right button when the quantity is at the maximum', () => {
    // Arrange
    const handleAdd = jest.fn()
    const maxQuantity = 2
    const quantity = 3

    component({ maxQuantity, quantity, handleAdd })

    // Act
    userEvent.click(screen.getByRole(/MinusCircle/i))

    // Assert
    expect(handleAdd).toHaveBeenCalledTimes(0)
  })
})