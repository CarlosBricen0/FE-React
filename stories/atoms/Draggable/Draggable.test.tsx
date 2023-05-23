import React from 'react'
import { render, screen } from '@testing-library/react'

import { Draggable } from './Draggable'

describe('Draggable', () => {

  test('should render Draggable', () => {
    render(
      <Draggable moveX moveY >
        <div style={{ width: 100, height: 100, backgroundColor: 'grey' }}>Test</div>
      </Draggable>
    )

    expect(screen.getByText('Test')).toBeDefined()
  })

})