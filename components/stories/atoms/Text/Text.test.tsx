import React from 'react'
import { render } from '@testing-library/react'

import { Text } from './Text'

describe('Text', () => {

  test('should render text', () => {
    const component = render(<Text>hola</Text>)

    expect(component.container.querySelector('p')).toBeInTheDocument()
    expect(component.container.querySelector('p').innerHTML).toEqual('hola')
  })

  test('should render span text', () => {
    const component = render(<Text type='span'>hola</Text>)

    expect(component.container.querySelector('span')).toBeInTheDocument()
    expect(component.container.querySelector('span').innerHTML).toEqual('hola')
  })
})