import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {

  test('should render label', () => {
    render(<Button {...{ label: 'Button text', status: 'initial', size: 'small' }} />)

    expect(screen.getByText('Button text')).toBeInTheDocument()
  })

  test('should get loading status', () => {
    const { container } = render(<Button {...{ label: 'Button text', status: 'loading' }} />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

})