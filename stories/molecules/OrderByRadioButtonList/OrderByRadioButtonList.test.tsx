import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { OrderByRadioButtonList } from './OrderByRadioButtonList'
import { SelectByOptions } from '../SelectOrderBy/SelectOrderBy'
const defaultValue: SelectByOptions = {
  options: [
    { orderKey: '1', value: 'Recomendados' },
    { orderKey: '2', value: 'Precio mayor a menor' },
    { orderKey: '3', value: 'Precio menor a mayor' },
    { orderKey: '4', value: 'De la A la Z' },
    { orderKey: '5', value: 'De la Z a la A' },
    { orderKey: '6', value: 'Más comprados' },
    { orderKey: '7', value: 'Más nuevos' },
    { orderKey: '8', value: 'Mejores descuentos' }
  ],
  selected: 'Recomendados',
  onClick: jest.fn()
}

describe('OrderByRadioButtonList', () => {
  const component = (props = defaultValue) => {
    return render(
      <OrderByRadioButtonList {...props} />
    )
  }

  test('should select a value and changed', () => {
    const { container } = component()
    const clickedElement = container.querySelector('[name="Más nuevos"]')
    act(() => {
      userEvent.click(clickedElement)
    })
    const { container: rerender } = component({...defaultValue, selected: 'Más nuevos'})
    expect(defaultValue.onClick).toBeCalled()
    expect(rerender.querySelector('[name="Más nuevos"]')).toBeChecked()
  })

  test('should render passing empty props', () => {
    const { container } = component({...{}})
    const clickedElement = container.querySelector('[name="Más nuevos"]')
    expect(clickedElement).toBeInTheDocument()
  })
})