import { render } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'

import { Breadcrumbs } from './Breadcrumbs'

const mockClick = jest.fn()
const component = (value = 1400) => {
  const props = {
    links:
      [
        {
          label: 'Inicio',
          oneClick: jest.fn()
        },
        {
          label: 'vegetales'
        },
        {
          label: 'fruta',
          oneClick: jest.fn()
        }
      ]
  }
  return render(
    <ResponsiveContext.Provider value={{ width: value }}>
      <Breadcrumbs afterClick={(e) => { mockClick(e) }} {...props} />
    </ResponsiveContext.Provider>
  )
}

describe('<Breadcrumbs />', () => {
  test('should render Breadcrumbs', () => {
    const { container } = component()
    expect(container.isConnected).toEqual(true)
  })

  test('should render Text when onClick is empty', () => {
    const { container } = component()
    expect(container.querySelector('p')).toBeInTheDocument()
  })
})