import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Checkbox } from './Checkbox'

describe('<Checkbox/>', () => {

  const component = (title: string, type: 'checkbox' | 'round' = 'checkbox') => {
    return render(
      <Checkbox
        onClick={() => { return }}
        title={title}
        type={type}
        value={false}
      />
    )
  }

  test('should render Checkbox', () => {
    component('pkg-checkbox')
    
    expect(screen.getByTitle('pkg-checkbox')).toBeDefined()
  })

  test('should render round Checkbox', () => {
    component('pkg-checkbox-rounded', 'round')
    
    expect(screen.getByTitle('pkg-checkbox-rounded')).toBeDefined()
  })

  test('should change to checked status when user click on it', () => {
    // arrange
    let isChecked = false
    const mockClick = () => {
      isChecked = true
    }
    const { rerender } = render(<Checkbox
      onClick={mockClick}
      title='pkg-checkbox-click'
      value={isChecked}
    />)
    // act
    fireEvent.click(screen.getByTitle('pkg-checkbox-click'))
    rerender(
      <Checkbox
        onClick={() => { return }}
        title='pkg-checkbox-click'
        value={isChecked}
      />
    )
    // assert
    expect(screen.getByTitle('pkg-checkbox-click')).toHaveClass('isChecked_true')
  })

})