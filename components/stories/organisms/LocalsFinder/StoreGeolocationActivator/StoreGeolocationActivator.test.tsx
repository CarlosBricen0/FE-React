import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { GeolocationActivator, GeoLocationActivatorProps } from './StoreGeolocationActivator'

describe('StoreGeolocationActivator', () => {
  const component = (props?: GeoLocationActivatorProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <GeolocationActivator
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getLabel = () => { return screen.getByText('Ubicación actual') }
  const getActivationLabel = () => { return screen.getByText('Activar ubicación') }

  test('should label be visible', () => {
    component()
    expect(getActivationLabel()).toBeVisible()
  })

  test('should activation label be visible', () => {
    component()
    expect(getLabel()).toBeVisible()
  })
})
