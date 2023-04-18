import React from 'react'
import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import { ToggleSwitch } from './ToggleSwitch'

describe('<ToggleSwitch/>', () => {

  test('should render Toggle', () => {
    render(<ToggleSwitch
      onClick={() => { return }}
      value={false}
    />)
    
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('should change to checked status when user click on it', () => {
    // arrange
    let isChecked = false
    const mockClick = () => {
      isChecked = true
    }
    const { rerender } = render(
      <ToggleSwitch
        leftLabel='True'
        onClick={mockClick}
        value={isChecked}
      />)
    
    fireEvent.click(screen.getByText('True'))
    rerender(
      <ToggleSwitch
        onClick={() => { return }}
        rightLabel='False'
        value={isChecked}
      />
    )

    expect(screen.getByText('False'))
  })

})