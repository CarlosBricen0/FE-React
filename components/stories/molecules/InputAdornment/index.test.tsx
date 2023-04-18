import { fireEvent, render } from '@testing-library/react'

import { InputAdornment } from './InputAdornment'

describe('InputAdornment', () => {
  test('Should basic render InputAdornment', () => {
    const component = render(
      <InputAdornment
        inputAdornmentEnd='end'
        inputAdornmentStart='start'
      />
    )

    fireEvent.click(component.container.querySelectorAll('div')[1])

    expect(component.container.querySelector('input')).toBeInTheDocument()
    expect(component.container.querySelector('input')).toHaveFocus()
    expect(component.getByText('start')).toBeInTheDocument()
    expect(component.getByText('end')).toBeInTheDocument()
  })

})