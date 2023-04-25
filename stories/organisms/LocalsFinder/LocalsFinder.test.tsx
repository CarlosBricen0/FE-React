import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { LocalsFinder, LocalsFinderProps } from './LocalsFinder'

describe('LocalsFinder', () => {
  const component = (props?: LocalsFinderProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <LocalsFinder
          items={[]}
          {...props}
        >
          <span>google maps component</span>
        </LocalsFinder>
      </ResponsiveContext.Provider>
    )
  }

  const getFilterCommune = () => { return screen.getByText('Comuna') }
  const getFilterRegion = () => { return screen.getByText('Región') }
  const getFilterTitle = () => { return screen.getByText('Buscar local') }
  const getGeolocationActivator = () => { return screen.getByText('Ubicación actual') }
  const getListTitle = () => { return screen.getByText('Nuestros locales') }

  test('should filter title be visible', () => {
    component()
    expect(getFilterTitle()).toBeVisible()
  })

  test('should filter region be visible', () => {
    component()
    expect(getFilterRegion()).toBeVisible()
  })

  test('should filter commune be visible', () => {
    component()
    expect(getFilterCommune()).toBeVisible()
  })

  test('should list title be visible', () => {
    component()
    expect(getListTitle()).toBeVisible()
  })

  test('should geo location activator be visible', () => {
    component()
    expect(getGeolocationActivator()).toBeVisible()
  })

  test('should show LocalsFinder error', () => {
    const errorText = 'Lo sentimos, no hemos podido cargar los locales. Intenta nuevamente.'
    component({ isFailed: true })
    expect(screen.getByText(errorText)).toBeVisible()
  })
})