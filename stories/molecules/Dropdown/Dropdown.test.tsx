import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {

  const component = () => {
    render(
      <Dropdown options={['option1', 'option2', 'option3']} placeholder='un campo de prueba' />
    )
  }

  const getOption = () => { return screen.getByText('option1') }
  const getPlaceholder = () => { return screen.getByText('un campo de prueba') }
  const getDropdown = () => { return screen.getByRole('dropdown') }

  test('should bew throw untraceable element', () => {
    component()
    const t = () => {
      getOption()
    }
    expect(t).toThrow()
  })

  test('should correctly see placeholder', () => {
    component()
    expect(getPlaceholder()).toBeVisible()
  })

  test('should bew throw untraceable element', () => {
    component()
    const t = () => {
      getOption()
    }
    expect(t).toThrow()
  })

  test('should allow user to change option', async () => {
    component()
    userEvent.click(getDropdown())
    expect(getOption()).toBeVisible()
  })
})

