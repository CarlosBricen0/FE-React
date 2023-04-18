import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { Search } from './Search'

describe('<Search iconSearch={iconSearch} />', () => {
  const component = (value = 1400) => {
    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <Search iconSearch='SearchCart' />
      </ResponsiveContext.Provider>
    )
  }

  test('should render Search component (Desktop)', () => {
    const { container } = component()

    expect(screen.getByRole('SearchCart')).toBeInTheDocument()
    expect(container.querySelectorAll('div')[1].style.borderRadius).toEqual('8px 8px 0 0')
  })

  test('should render adaptable Search component (Mobile)', () => {
    const { container } = component(500)
    expect(screen.getByRole('SearchCart')).toBeDefined()
    expect(container.querySelectorAll('div')[1].style.borderRadius).not.toEqual('8px 8px 0 0')
  })
})