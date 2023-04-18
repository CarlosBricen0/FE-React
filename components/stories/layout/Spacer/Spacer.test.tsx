import React from 'react'
import { render } from '@testing-library/react'

import { Spacer } from './Spacer'

describe('Spacer', () => {
  const component = render(<Spacer size={2} />)

  test('should render Spacer and get size', () => {

    expect(component.container.isConnected).toEqual(true)
    expect(component.container.querySelector('span')).toBeInTheDocument()
    expect(component.container.querySelector('span').style.width).toEqual('2px')
  })

})