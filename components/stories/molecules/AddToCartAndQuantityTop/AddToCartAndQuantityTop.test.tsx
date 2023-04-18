import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddToCartAndQuantityTop, AddToCartAndQuantityTopProps } from './AddToCartAndQuantityTop'

describe('AddToCartAndQuantityTop', () => {
  const component = (props?: AddToCartAndQuantityTopProps) => {

    return render(
      <AddToCartAndQuantityTop {...props} />
    )
  }

  test('should render first stage button with agregar text', () => {
    render(<AddToCartAndQuantityTop quantity={0}/>)
    expect(screen.getByText(/agregar/i)).toBeInTheDocument()
  })

  test('should render second stage button with count in the input value', () => {
    const { container } = component({quantity: 1})

    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('input')).toHaveValue(1)
  })

  test('should call handleAdd function on click', async () => {
    const mockClick = jest.fn()
    const handleAdd = mockClick
    const handleRemove = () => { return }
    const handleChange = () => { return }
    const componentProps = {
      quantity: 1,
      isLoading: false,
      quantityButtonProps: {
        handleAdd,
        handleRemove,
        handleChange
      }
    }
    render(<AddToCartAndQuantityTop {...componentProps}/>)

    const plusBtn = screen.getByRole('PlusInCircle')
    userEvent.click(plusBtn)
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('should call handleRemove function on click', async () => {
    const mockClick = jest.fn()
    const handleAdd = () => { return }
    const handleRemove = mockClick
    const handleChange = () => { return }
    const componentProps = {
      quantity: 2,
      isLoading: false,
      quantityButtonProps: {
        handleAdd,
        handleRemove,
        handleChange
      }
    }
    render(<AddToCartAndQuantityTop {...componentProps}/>)

    const minusBtn = screen.getByRole('MinusInCircle')
    userEvent.click(minusBtn)
    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})
