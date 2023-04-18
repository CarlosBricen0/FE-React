import {
  render,
  screen,
  fireEvent
} from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { ShelfAddToCart, ShelfAddToCartProps } from './ShelfAddToCart'

describe('ShelfAddToCart', () => {
  const component = (props: Partial<ShelfAddToCartProps> = {}, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <ShelfAddToCart {...props} />
      </ResponsiveContext.Provider>
    )
  }

  const getAddIcon = () => {return screen.queryByLabelText('Agregar al carrito')}
  const getQuantityDisplay = (quantity: string) => {return screen.getAllByText(quantity)}
  const getRemoveButton = () => {return screen.getByLabelText('Remover')}
  const getAddButton = () => {return screen.getByLabelText('Agregar')}

  test('should render component without props', () => {
    component()
    expect(getAddIcon()).toBeInTheDocument()
  })

  test('should render quantityDisplay', () => {
    const value = '1 kg'
    component({quantityDisplay: value})
    expect(getQuantityDisplay(value)[0]).toBeInTheDocument()
  })

  test('should render quantity ', () => {
    const value = 3
    component({quantity: value, quantityDisplay: '3'})
    expect(getQuantityDisplay(value.toString())[1]).toBeInTheDocument()
  })

  test('should call onAddFirst', () => {
    const onAddFirst = jest.fn()
    component({onAddFirst, quantity: 0, quantityDisplay: '0'})

    fireEvent.click(getAddButton())
    expect(onAddFirst).toBeCalled()
  })

  test('should call onAdd', () => {
    const onAdd = jest.fn()
    component({onAdd, quantity: 2, quantityDisplay: '2'})

    fireEvent.click(getAddButton())
    expect(onAdd).toBeCalled()
  })

  test('should call onRemove', () => {
    const onRemove = jest.fn()
    component({onRemove, quantity: 1, quantityDisplay: '1'})

    fireEvent.click(getRemoveButton())
    expect(onRemove).toBeCalled()
  })

  test('should not call onAdd due to maxQuantity', () => {
    const onAdd = jest.fn()
    component({onAdd, quantity: 1, maxQuantity: 1, quantityDisplay: '1'})

    fireEvent.click(getAddButton())
    expect(onAdd).not.toBeCalled()
  })
})