import { render } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { BackboneSearch } from './index'

describe('<BackboneSearch />', () => {
  const component = (value = 1400) => {
    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <BackboneSearch />
      </ResponsiveContext.Provider>
    )
  }

  test('should render BackboneSearch component', () => {
    const { container } = component()
    expect(container.querySelector('div').firstChild).toBeInTheDocument()
  })
})