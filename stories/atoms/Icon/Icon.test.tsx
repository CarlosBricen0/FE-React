import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Icon, IconProps } from './Icon'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'

describe('Icon', () => {
  const initialProps: IconProps = {
    name: 'Back',
    color: '#FC4E55',
    sizes: 'xs'
  }

  test('should render Icon', () => {
    const { container } = render(<Icon {...initialProps} />)

    expect(container.isConnected).toEqual(true)
  })

  test('should render and change icon', () => {
    Object.keys(Icons).forEach((e: keyof (typeof Icons)) => {
      const { container } = render(<Icon {...{ ...initialProps, name: e }} />)

      expect(container.isConnected).toEqual(true)
      expect(container.querySelector(`#${e}`)).toBeDefined()
    })
  })

  test('should render and run onClick function', () => {
    const mockClick = jest.fn()
    const { container } = render(<Icon {...{ ...initialProps, onClick: mockClick }} />)

    fireEvent.click(container.querySelector('#Back'))

    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('should change customSize', () => {
    const { container } = render(<Icon {...{ ...initialProps, customSize: 100 }} />)

    expect(container.querySelector('#Back')).toHaveAttribute('width', '100px')
  })
})