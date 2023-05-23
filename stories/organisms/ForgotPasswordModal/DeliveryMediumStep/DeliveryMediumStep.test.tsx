import { 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { DeliveryMediumStep, DeliveryMediumStepProps } from './DeliveryMediumStep'

const imageSrc = 'https://custom.image/img.jpg'

describe('DeliveryMediumStep', () => {
  const component = (props?: DeliveryMediumStepProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <DeliveryMediumStep {...props} />
      </ResponsiveContext.Provider>
    )
  }
  const getTitle = () => {return screen.getByRole('heading')}
  const getImage = () => {return screen.getByAltText('delivery-medium-image')}
  const getInputRut = () => {return screen.getByPlaceholderText('Ingresa tu número de rut')}
  const getEmailButton = () => {return screen.getByText('Correo electrónico')}
  const getSmsButton = () => {return screen.getByText('Mensaje de texto')}
  const getRutError = () => {return screen.getByText('Ingresa un Rut válido')}

  test('should render title', () => {
    const title = 'Hola'
    component({
      title,
      onSubmit: jest.fn()
    })

    expect(getTitle()).toHaveTextContent(title)
  })

  test('should render text', () => {
    const text = 'Hola'
    component({
      text,
      onSubmit: jest.fn()
    })

    expect(screen.getByText(text)).toBeVisible()
  })

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
    expect(getInputRut()).toBeVisible()
  })

  test('should buttons to be disabled', () => {
    component()
    expect(getEmailButton()).toHaveAttribute('disabled')
    expect(getSmsButton()).toHaveAttribute('disabled')
  })

  test('should buttons to be enable', async () => {
    component()
    fireEvent.change(getInputRut(), { target: { value: '11.111.111-1' } })
    await waitFor(() => {
      expect(getEmailButton()).not.toHaveAttribute('disabled')
      expect(getSmsButton()).not.toHaveAttribute('disabled')
    })
  })
  
  test('should onSubmit function to be called', async () => {
    const onSubmit = jest.fn()
    component({
      onSubmit 
    })
    fireEvent.change(getInputRut(), { target: { value: '11.111.111-1' } })

    await waitFor(() => {
      expect(getEmailButton()).not.toHaveAttribute('disabled')
      expect(getSmsButton()).not.toHaveAttribute('disabled')
    })

    fireEvent.click(getEmailButton())
    fireEvent.click(getSmsButton())
    expect(onSubmit).toBeCalledTimes(2)
  })

  test('should show rut error', async () => {
    component()
    fireEvent.change(getInputRut(), { target: { value: '111' } })
    await waitFor(() => {
      expect(getRutError()).toBeVisible()
    })
  })
})