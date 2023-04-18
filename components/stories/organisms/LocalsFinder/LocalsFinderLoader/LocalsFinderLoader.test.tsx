import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { LocalsFinderLoader, LocalsFinderLoaderProps } from './LocalsFinderLoader'

describe('LocalsFinderLoader', () => {
  const component = (props?: LocalsFinderLoaderProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <LocalsFinderLoader
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getBackbone = () => { return screen.getAllByText('Loading...') }

  test('should backbone be visible', () => {
    component()
    expect(getBackbone()).toHaveLength(17)
  })
})
