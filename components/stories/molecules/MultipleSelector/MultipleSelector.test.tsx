import {
  act,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultipleSelector } from './MultipleSelector'
import { optionsMultipleChecked } from '../../../__mocks__/MultipleSelector'

describe('<MultipleSelector />', () => {

  const component = ({ onConfirmation }) => {
    render(
      <MultipleSelector
        onConfirmation={onConfirmation}
        options={optionsMultipleChecked}
        placeholderSearch='Buscar Marca'
      />
    )
  }
  const getInputSearch = () => { return screen.getByTitle('titleSearch') }
  const typingInputSearch = () => { return fireEvent.change(getInputSearch(), {target: {value: 'ejemplo'}})}
  const getInputCheckbox = () => { return screen.getByTestId('Marca Ejemplo B').querySelector('input[type="checkbox"]')}
  const dropDownOpen = () => {
    const clickIcon = screen.getByRole('DropDownClose')
    act(() => { userEvent.click(clickIcon)})
  }

  test('should render the label of DropDown', () => {
    component({onConfirmation: () => {return}})
    expect(screen.getByText(/Marcas/)).toBeInTheDocument()
  })

  test('should show the options of DropDown ', () => {
    component({onConfirmation: () => {return}})
    dropDownOpen()
    expect(screen.getByRole('DropDownOpen')).toBeInTheDocument()
  })

  test('should show closed outside click', () => {
    component({onConfirmation: () => {return}})
    dropDownOpen()
    expect(screen.getByRole('DropDownOpen')).toBeInTheDocument()
    userEvent.click(document.body)
    expect(screen.getByRole('DropDownClose')).toBeInTheDocument()
  })

  test('should show search input', async() => {
    component({onConfirmation: () => {return}})
    dropDownOpen()
    await waitFor(() => {
      expect(getInputSearch()).toBeVisible()
    })
  })

  test('should typing in search input and result', async() => {
    component({onConfirmation: () => {return}})
    dropDownOpen()
    typingInputSearch()
    await waitFor(() => {
      expect(screen.getAllByText(/Marca Ejemplo/)).toHaveLength(5)
    })
  })

  test('should typing in search input and click on the checkbox', async() => {
    component({onConfirmation: () => {return}})
    dropDownOpen()
    const checkboxNotChecked = getInputCheckbox()
    expect(checkboxNotChecked.className).not.toContain('isChecked_true')

    await waitFor(async() => {
      const list = screen.getByTestId('Marca Ejemplo B')
      userEvent.click(list)
    })
    const checkboxChecked = getInputCheckbox()
    expect(checkboxChecked.className).toContain('isChecked_true')
  })

  test('should click button confirmation', async() => {
    component({onConfirmation: resultChecked => {
      expect(resultChecked).toHaveLength(4)
    }})
    dropDownOpen()
    await waitFor(async () => {
      const list = screen.getByTestId('Marca Ejemplo B')
      userEvent.click(list)
    })
    await waitFor(async () => {
      const button = screen.getByLabelText('Confirmar')
      userEvent.click(button)
    })
  })
})