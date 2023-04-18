import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { ShelfSearch } from './ShelfSearch'

describe('<ShelfSearch title={producto} price={50999} />', () => {
  const productRef = jest.fn()

  const component = (value = 1400) => {
    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <ShelfSearch
          price={50999}
          productRef={productRef}
          title='producto'
        />
      </ResponsiveContext.Provider>
    )
  }

  test('should render ShelfSearch component', () => {
    component()
    expect(screen.getByAltText('producto')).toBeDefined()
  })

  test('should render adaptable ShelfSearch component', () => {
    component(500)
    expect(screen.getByAltText('producto')).toBeDefined()
  })

  test('should render price with CLP format currency', () => {
    component()
    expect(screen.getByText('$50.999')).toBeDefined()
  })
})