import { createEvent, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { CodeStep, CodeStepProps } from './CodeStep'

describe('CodeStep', () => {
  const component = (props?: CodeStepProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <CodeStep {...props} />
      </ResponsiveContext.Provider>
    )
  }
  const getTitle = () => {return screen.getByRole('heading')}
  const getInputs = () => {return screen.getAllByRole('spinbutton')}
  const getSubmitButton = () => {return screen.getByText('Confirmar código')}

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

  test('should call onSubmit', async () => {
    const onSubmit = jest.fn()
    const code = '123456'
    component({
      onSubmit
    })

    fireEvent.focus(getInputs()[0])
    const pasteEvent = createEvent.paste(getInputs()[0], {
      clipboardData: {
        getData: () => {return code}
      }
    })
    fireEvent(getInputs()[0], pasteEvent)
    
    await waitFor(() => {
      expect(getSubmitButton()).not.toHaveAttribute('disabled')
    })

    fireEvent.click(getSubmitButton())

    expect(onSubmit).toHaveBeenCalledWith(code)
  })
})