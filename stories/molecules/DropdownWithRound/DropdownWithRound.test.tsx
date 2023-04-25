import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'

import { DropdownWithRound } from './DropdownWithRound'
const defaultValue = {
  title: 'Test',
  isOpen: false,
  dataBody: [
    {
      id: 0,
      image: 'test',
      name: 'item1',
      href: 'https://test.com.co'
    }
  ]
}

const component = ({ value = 1400, props = defaultValue } = {}) => {
  return render(
    <ResponsiveContext.Provider value={{ width: value }}>
      <DropdownWithRound {...props} />
    </ResponsiveContext.Provider>
  )
}

describe('<DropdownWithRound />', () => {
  test('should render DropdownWithRound', () => {
    component({ props: { ...defaultValue } })

    expect(screen.queryByText('Test')).toBeInTheDocument()
    expect(screen.queryByText('item1')).toBeInTheDocument()
  })

  test('should render five items', () => {
    component({
      props: {
        ...defaultValue,
        dataBody: Array(5).fill(defaultValue.dataBody)
      }
    })

    expect(screen.queryAllByText('Loading...')).toHaveLength(5)
  })

  test('should render ten items', () => {
    component({
      props: {
        ...defaultValue,
        isOpen: true,
        dataBody: Array(10).fill(defaultValue.dataBody)
      }
    })

    expect(screen.queryAllByText('Loading...')).toHaveLength(10)
  })
})