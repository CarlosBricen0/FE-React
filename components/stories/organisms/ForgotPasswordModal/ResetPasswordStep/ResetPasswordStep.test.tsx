import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { ResetPasswordStep, ResetPasswordStepProps } from './ResetPasswordStep'

const imageSrc = 'https://custom.image/img.jpg'

describe('ResetPasswordStep', () => {
  const component = (props?: ResetPasswordStepProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <ResetPasswordStep {...props} />
      </ResponsiveContext.Provider>
    )
  }
  const getTitle = () => {return screen.getByRole('heading')}
  const getImage = () => {return screen.getByAltText('forgot-password-image')}
  const getInputPassword = () => {return screen.getByLabelText('Nueva contraseña')}
  const getInputPasswordConfirm = () => {return screen.getByLabelText('Contraseña')}
  const getSubmitButton = () => {return screen.getByText('Confirmar nueva contraseña')}
  const getPasswordMatchError = () => {return screen.getByText('Las contraseñas deben coincidir')}

  test('should image be visible', () => {
    component({
      imageSrc: imageSrc,
      onSubmit: jest.fn()
    })
    expect(getImage()).toBeVisible()
    expect(getImage()).toHaveAttribute('src', imageSrc)
  })
  
  test('should form inputs be visible', () => {
    component()
    expect(getInputPassword()).toBeVisible()
    expect(getInputPasswordConfirm()).toBeVisible()
  })

  test('should buttons to be disabled', () => {
    component()
    expect(getSubmitButton()).toHaveAttribute('disabled')
  })

  test('should show passwords match error', async () => {
    component()
    const testPassword = 'Hola123.'
    fireEvent.change(getInputPassword(), { target: { value: testPassword } })
    fireEvent.change(getInputPasswordConfirm(), { target: { value: '123' } })
    await waitFor(() => {
      expect(getPasswordMatchError()).toBeVisible()
    })
  })
  
  test('should onSubmit function to be called', async () => {
    const onSubmit = jest.fn()
    const testPassword = 'Hola123.'

    component({
      onSubmit 
    })
    fireEvent.change(getInputPassword(), { target: { value: testPassword } })
    fireEvent.change(getInputPasswordConfirm(), { target: { value: testPassword } })

    await waitFor(() => {
      expect(getSubmitButton()).not.toHaveAttribute('disabled')
    })

    fireEvent.click(getSubmitButton())
    expect(onSubmit).toBeCalledTimes(1)
  })

  test('should render text', () => {
    component({
      text: 'Hola'
    })
    expect(screen.getByText('Hola')).toBeVisible()
  })

  test('should render title', () => {
    const title = 'Hola'
    component({
      title
    })
    expect(getTitle()).toHaveTextContent(title)
  })
})