import React from 'react'
import { render } from '@testing-library/react'

import { Input } from './Input'

describe('Button', () => {

  test('should render Input', () => {
    const component = render(<Input />)

    expect(component.container).toBeInTheDocument()
  })

  test('should render number type', () => {
    const component = render(<Input type='number' />)

    expect(component.container.querySelector('input')).toBeInTheDocument()
    expect(component.container.querySelector('input')).toHaveAttribute('type', 'number')
  })

})