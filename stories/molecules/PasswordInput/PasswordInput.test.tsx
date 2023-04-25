import { fireEvent, render, screen } from '@testing-library/react'
import { PasswordInput } from './PasswordInput'

const placeholder = 'Ingresa tu contraseña'

describe('PasswordInput', () => {
  const component = () => {
    return render(
      <PasswordInput placeholder={placeholder} />
    )
  }
 
  const getToggleEye = () => {return screen.getByRole('Eye')}
  const getToggleEyeSlash = () => {return screen.getByRole('EyeSlash')}
  const getInput = () => {return screen.getByPlaceholderText(placeholder)}

  test('should have toggle', () => {
    component()
    expect(getToggleEyeSlash()).toBeVisible()
  })

  test('should toggle show password on click icon', () => {
    component()
    fireEvent.click(getToggleEyeSlash())
    expect(getInput()).toHaveAttribute('type', 'text')
    fireEvent.click(getToggleEye())
    expect(getInput()).toHaveAttribute('type', 'password')
  })
})