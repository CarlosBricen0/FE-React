import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'

import { DropDownSearch } from './DropDownSearch'

describe('DropDownSearch', () => {
  const component = (value = 1400, objectData = {}) => {
    const handleAdd = jest.fn()
    const handleChange = jest.fn()
    const handleRemove = jest.fn()
    const handleSearchImpressions = jest.fn()

    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <DropDownSearch
          {...{
            headSearch: {
              suggestionsTitle: 'Más buscados',
              suggestionsData: [{ text: 'test', onClick: jest.fn() }]
            },
            bodySearch: {
              handleSearchImpressions,
              data: [{
                itemId: 1,
                title: 'Pack Cerveza Heineken botella 12 un de 330 cc',
                img: 'https://unimarc.vteximg.com.br/arquivos/ids/213450-200-200/000000000000501297-DIS-01.jpg',
                price: 7690,
                listPrice: 12290,
                inOffer: true,
                quantity: 0
              }],
              quantityButtonProps: {
                handleAdd,
                handleChange,
                handleRemove
              }
            },
            ...objectData
          }}
        />
      </ResponsiveContext.Provider>
    )
  }

  const generalExpect = () => {
    expect(screen.getByText('Más buscados')).toBeInTheDocument()
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText(/Pack Cerveza Heineken botella 12 un de 3/g)).toBeInTheDocument()
  }

  test('should render DropDownSearch component (Desktop)', () => {
    const { container } = component()

    expect(container.querySelectorAll('div')[0].style.position).toEqual('relative')
    generalExpect()
  })

  test('should render DropDownSearch component without products (Desktop)', () => {
    const { container } = component(1400, { bodySearch: {} })

    expect(container.querySelectorAll('div')[0].style.position).toEqual('relative')
    expect(screen.queryByText(/Pack Cerveza Heineken botella 12 un de 3/g)).toBeNull()
  })

  test('should render adaptable DropDownSearch component (Mobile)', () => {
    const { container } = component(500)

    expect(container.querySelectorAll('div')[0].style.position).toEqual('fixed')
    generalExpect()
  })
})