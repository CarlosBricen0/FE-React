import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { ShelfCouponButton, ShelfCouponButtonProps } from './ShelfCouponButton'

describe('ShelfSideButton', () => {
  const component = (props: Partial<ShelfCouponButtonProps> = {}, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <ShelfCouponButton {...props} />
      </ResponsiveContext.Provider>
    )
  }

  const getButton = () => {return screen.getByRole('button')}

  test('should render component without props', () => {
    component()
    expect(getButton()).toBeInTheDocument()
  })

  test('should render label', () => {
    const label = 'Activar cupón'

    component({label, isMobile: true})
    expect(getButton()).toHaveTextContent(label)
  })

  test('should render labelLoading', () => {
    const labelLoading = 'labelLoading'
    component({labelLoading, isLoading: true})

    expect(getButton()).toHaveTextContent(labelLoading)
  })

  test('should render labelActivated', () => {
    const labelActivated = 'labelActivated'
    component({labelActivated, isMobile: true, couponStatus: 'active'})

    expect(getButton()).toHaveTextContent(labelActivated)
  })

  test('should render mobile and desactivated', () => {
    const label = 'Cupón utilizado'

    component({label, isMobile: true, couponStatus: 'used'})
    expect(getButton()).toHaveTextContent(label)
  })
})