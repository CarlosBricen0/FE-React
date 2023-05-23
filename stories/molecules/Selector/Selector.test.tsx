import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Selector } from './Selector'

describe('<Selector options={Array}', () => {

  const component = () => {
    render(
      <Selector options={['option1', 'option2', 'option3']} placeholder='un campo de prueba' />
    )
  }

  test('should correctly set default option', () => {
    component()
    expect(screen.getByRole('option', { name: 'un campo de prueba' })['selected']).toBe(true)
  })

  test('should display the correct number of options', () => {
    component()
    expect(screen.getAllByRole('option').length).toBe(4)
  })

  test('should allow user to change option', async () => {
    component()
    const selector = screen.getByRole('combobox')
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      selector,
      // Find and select the option1 option, like a real user would.
      ['option2']
    )
    expect(screen.getByText('option2')['selected']).toBeTruthy()
  })

})

