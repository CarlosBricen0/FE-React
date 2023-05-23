import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { StoreBox, StoreBoxProps } from './StoreBox'

const defaultProps: StoreBoxProps = {
  address: 'DEFAULT_ADDRESS',
  closedAt: 'DEFAULT_CLOSED_AT',
  hideDetailToggle: false,
  isOpen: true,
  title: 'DEFAULT_TITLE',
  site: 'unimarc'
}

describe('StoreBox', () => {
  const component = (props?: StoreBoxProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <StoreBox
          {...defaultProps}
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getAddress = () => { return screen.getByText('DEFAULT_ADDRESS') }
  const getButton = () => { return screen.getByText('Cómo llegar') }
  const getTitle = () => { return screen.getByText('DEFAULT_TITLE') }
  const getClosedAt = () => { return screen.getByText('Cierra a las DEFAULT_CLOSED_AT') }

  test('should address be visible', () => {
    component()
    expect(getAddress()).toBeVisible()
  })

  test('should button be visible', () => {
    component()
    expect(getButton()).toBeVisible()
  })

  test('should closed at be visible', () => {
    component()
    expect(getClosedAt()).toBeVisible()
  })

  test('should title be visible', () => {
    component()
    expect(getTitle()).toBeVisible()
  })
})
