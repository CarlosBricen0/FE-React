import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { LoginModal, LoginModalProps } from './LoginModal'

const imageSrc = 'https://custom.image/img.jpg'

describe('LoginModal', () => {

  const component = (props?: LoginModalProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <LoginModal 
          disableSubmit={true}
          imageSrc={imageSrc}
          isOpen={true}
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getTitle = () => {return screen.getByText('¡Te estábamos esperando!')}
  const getImage = () => {return screen.getByAltText('login-image')}
  const getInputRut = () => {return screen.getByLabelText('Rut')}
  const getInputPassword = () => {return screen.getByLabelText('Contraseña')}
  const getSubmitButton = () => {return screen.getByText('Ingresar')}

  test('should title be visible', () => {
    component()
    expect(getTitle()).toBeVisible()
  })

  test('should image be visible', () => {
    component()
    expect(getImage()).toBeVisible()
    expect(getImage()).toHaveAttribute('src', imageSrc)
  })
  
  test('should form inputs be visible', () => {
    component()
    expect(getInputRut()).toBeVisible()
    expect(getInputPassword()).toBeVisible()
    expect(getInputPassword()).toHaveAttribute('type', 'password')
  })

  test('should submit button to be disabled', () => {
    component()
    expect(getSubmitButton()).toHaveAttribute('disabled')
  })
  
  test('should submit button to be enabled', () => {
    component({disableSubmit: false})
    expect(getSubmitButton()).not.toHaveAttribute('disabled')
  })

  test('should show password error', () => {
    const errorText = 'Contraseña Incorrecta'
    component({
      errors: {'password': errorText}
    })
    expect(screen.getByText(errorText)).toBeVisible()
  })
})