import { 
  createEvent, 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Context as ResponsiveContext } from 'react-responsive'
import { CodeInput, CodeInputProps } from './CodeInput'

describe('CodeInput', () => {
  const component = (props?: CodeInputProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <CodeInput {...props} />
      </ResponsiveContext.Provider>
    )
  }
  
  const getInputs = () => {return screen.getAllByRole('spinbutton')}

  test('should render inputs', () => {
    component()

    expect(getInputs().length).toBe(6)
  })

  test('should write first input and focus the second', async () => {
    const digit = 1
    component()

    fireEvent.change(getInputs()[0], { target: { value: digit } })

    await waitFor(() => {
      expect(getInputs()[0]).toHaveValue(digit)
      expect(getInputs()[1]).toHaveFocus()
    })
  })

  test('should remove the digit and focus the previous input', async () => {
    const digit = 9
    component()

    fireEvent.change(getInputs()[0], { target: { value: digit } })
    fireEvent.change(getInputs()[1], { target: { value: digit } })
    
    await waitFor(() => {
      expect(getInputs()[0]).toHaveValue(digit)
      expect(getInputs()[1]).toHaveValue(digit)
      expect(getInputs()[2]).toHaveFocus()
    })

    userEvent.keyboard('{backspace}')

    await waitFor(() => {
      expect(getInputs()[1]).toHaveFocus()
    })
  })

  test('should paste the code', async () => {
    const code = '123456'
    component()
    
    fireEvent.focus(getInputs()[0])
    const pasteEvent = createEvent.paste(getInputs()[0], {
      clipboardData: {
        getData: () => {return code}
      }
    })
    fireEvent(getInputs()[0], pasteEvent)

    await waitFor(() => {
      for (let i = 0; i < code.length; i++) {
        expect(getInputs()[i]).toHaveValue(Number(code[i]))
      }
    })
  })
})