import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toast, ToastProps } from './Toast'

describe('Toast', () => {
  const component = (props: Partial<ToastProps>) => {
    render(
      <Toast {...props} />
    )
  }

  const getToast = () => {return screen.getByTestId('toast')}
  const getButton = () => {return screen.queryByRole('button')}
  const getCloseIcon = () => {return screen.queryByRole('Close')}
  const getImage = () => {return screen.getByRole('img')}

  test('should render correctly without any props', () => {
    component({})
  })

  test('should render correctly', () => {
    const props: ToastProps = {
      showClose: true,
      title: 'Compra en nuestra app',
      message: 'Y obtén muchos más beneficios',
      iconUrl: 'https://images.ctfassets.net/un6yvtd6uq5z/4PROZHNIX9hkfWZZRpM0e4/95f1d0efca4549dd05ceac01d30345f9/unimarc-logo-2.png?h=250',
      button: {
        title: 'Descargar'
      }
    }
    component(props)

    expect(getToast()).toBeInTheDocument()
    expect(getCloseIcon()).toBeInTheDocument()
    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.message)).toBeInTheDocument()
    expect(getImage()).toHaveAttribute('src', props.iconUrl)
    expect(getButton()).toHaveTextContent(props.button.title)
  })

  test('should close icon not be visible', () => {
    component({ showClose: false })
    expect(getCloseIcon()).not.toBeInTheDocument()
  })

  test('should button not be visible', () => {
    component({ button: undefined })
    expect(getButton()).not.toBeInTheDocument()
  })

  test('should call onClose', () => {
    const onClose = jest.fn()
    component({ showClose: true, onClose })

    userEvent.click(getCloseIcon())

    expect(onClose).toHaveBeenCalled()
  })

  test('should navigate to button url', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => {return null})
    component({ button: { title: 'Descargar', url: 'https://some.url' } })

    userEvent.click(getButton())

    expect(windowOpenSpy).toHaveBeenCalled()

    windowOpenSpy.mockRestore()
  })

  test('should not navigate when button url is undefined', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => {return null})
    component({ button: { title: 'Descargar' } })

    userEvent.click(getButton())

    expect(windowOpenSpy).not.toHaveBeenCalled()

    windowOpenSpy.mockRestore()
  })

  test('should hide on scroll', () => {
    const title = 'Compra en nuestra app'
    component({ hideOnScroll: true, isFixed: true, fixedPosition: 'top', title })

    fireEvent.scroll(window, { target: { scrollY: 400 } })
    expect(getToast()).toHaveAttribute('aria-hidden', 'true')

    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(getToast()).toHaveAttribute('aria-hidden', 'false')
  })

  test('should do nothing when no scroll', () => {
    const title = 'Compra en nuestra app'
    component({ hideOnScroll: true, isFixed: true, fixedPosition: 'bottom', title })

    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(getToast()).toHaveAttribute('aria-hidden', 'false')
  })

  test('should not hide when hideOnScroll is false', () => {
    const title = 'Compra en nuestra app'
    component({ hideOnScroll: false, isFixed: true, fixedPosition: 'top', title })

    fireEvent.scroll(window, { target: { scrollY: 400 } })
    expect(getToast()).toHaveAttribute('aria-hidden', 'false')
  })

  test('should call onBlurButton', () => {
    const onBlurButton = jest.fn()
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => {return null})
    component({button: { title: 'Descargar', url: 'https://url.test' }, onBlurButton })
    userEvent.click(getButton())

    expect(onBlurButton).toHaveBeenCalled()
    windowOpenSpy.mockRestore()
  })
})