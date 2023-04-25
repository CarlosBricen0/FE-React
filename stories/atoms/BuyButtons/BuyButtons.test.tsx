import React from 'react'
import { render } from '@testing-library/react'

import { BuyButtons } from './BuyButtons'

describe('Button', () => {

  test('should render left BuyButtons', () => {
    const { container } = render(<BuyButtons type='left' />)

    expect(container.querySelector('svg')).toBeDefined()
  })

  test('should render right BuyButtons', () => {
    const { container } = render(<BuyButtons type='right' />)

    expect(container.querySelector('svg')).toBeDefined()
  })

})