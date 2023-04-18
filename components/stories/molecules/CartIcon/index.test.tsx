import { fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { CartIcon } from './CartIcon'

describe('<CartIcon icon={icon} onClickCart={onClickLogo} />', () => {
  const mockOnClick = jest.fn()
  const component = (value = 1400, quantity = 0) => {
    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <CartIcon
          icon='Cart'
          onClickCart={mockOnClick}
          quantity={quantity}
        />
      </ResponsiveContext.Provider>
    )
  }

  test('should render CartIcon component', () => {
    component()
    expect(screen.getByRole('Cart')).toBeDefined()
  })

  test('Should fail render CartIcon component', () => {
    render(<p>Fails</p>)
    expect(screen.queryByRole('Cart')).not.toBeInTheDocument()
  })

  test('should render adaptable CartIcon component', () => {
    component(425)
    expect(screen.getByRole('Cart')).toBeDefined()
  })

  test('CartIcon should be clickable', () => {
    component()
    const logo = screen.getByRole('Cart')
    fireEvent.click(logo)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  test('should show CartIcon without balloon if the quantity is <= 0', () => {
    component(1280, 0)
    expect(screen.queryByRole('quantityBalloon')).not.toBeInTheDocument()
  })

  test('should render balloon if the quantity is more than 0', () => {
    component(460, 1)
    expect(screen.getByRole('quantityBalloon')).toBeDefined()
  })
})