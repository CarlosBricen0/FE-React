import React from 'react'
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react'

import { QuantityButton, QuantityButtonProps } from './QuantityButton'

describe('QuantityButton', () => {

  const component = (handleAdd = () => { return }, handleRemove = () => { return }, props?: QuantityButtonProps) => {

    return render(
      <QuantityButton
        {...props}
        handleAdd={handleAdd}
        handleChange={() => { return }}
        handleRemove={handleRemove}
      />
    )
  }

  test('should render QuantityButton', () => {
    const { container } = component()

    expect(container.isConnected).toEqual(true)
  })

  test('should get types of children', () => {
    const { container } = component()

    expect(container.querySelector('button')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('input')).toBeInTheDocument()
  })

  test('Should do click event', () => {
    const { getByRole } = component()

    const rightButton = getByRole('button', { name: 'right' })
    const leftButton = getByRole('button', { name: 'left' })

    expect(fireEvent.click(rightButton)).toBe(true)
    expect(fireEvent.click(leftButton)).toBe(true)

  })

  test('Should increment on click button +', async () => {

    const handleAdd = () => { fireEvent.change(input, { target: { value: parseInt(input.value) + 1 } }) }
    const handleRemove = () => { return }

    const { container, getByRole } = component(handleAdd, handleRemove)

    const rightButton = getByRole('button', { name: 'right' })
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: 0 } })
    fireEvent.click(rightButton)

    await waitFor(() => {
      expect(input).toHaveValue('1')
    })
  })

  test('Should decrement on click button -', async () => {

    const handleAdd = () => { return }
    const handleRemove = () => { fireEvent.change(input, { target: { value: parseInt(input.value) - 1 } }) }

    const { container, getByRole } = component(handleAdd, handleRemove)

    const leftButton = getByRole('button', { name: 'left' })
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: 1 } })
    fireEvent.click(leftButton)

    await waitFor(() => {
      expect(input).toHaveValue('0')
    })
  })
})
