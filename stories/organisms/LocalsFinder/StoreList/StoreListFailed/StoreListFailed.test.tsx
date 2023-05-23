import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { StoreListFailed, StoreListFailedProps } from './StoreListFailed'

describe('StoreStoreListFailed', () => {
  const component = (props?: StoreListFailedProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <StoreListFailed
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getMessage = () => { return screen.getByText('Lo sentimos, no hemos podido cargar los locales. Intenta nuevamente.') }
  const getRetry = () => { return screen.getByText('Reintentar') }

  test('should message be visible', () => {
    component()
    expect(getMessage()).toBeVisible()
  })

  test('should retry be visible', () => {
    component()
    expect(getRetry()).toBeVisible()
  })
})
