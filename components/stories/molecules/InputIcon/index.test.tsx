import { fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { InputIcon } from './InputIcon'

describe('<InputIcon icon={icon} onClickSearch={onClickSearch} onChangeSearch={onChangeSearch} />', () => {
  const mockOnClick = jest.fn()
  const mockOnChange = jest.fn()
  const mockOnFocus = jest.fn()
  const mockOnBlur = jest.fn()
  
  const component = (value = 1400) => {
    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <InputIcon
          icon='SearchCart'
          onBlurSearch={mockOnBlur}
          onChangeSearch={mockOnChange}
          onClickSearch={mockOnClick}
          onFocusSearch={mockOnFocus}
          value='foo'
        />
      </ResponsiveContext.Provider>
    )
  }

  test('should render InputIcon component', () => {
    component()
    expect(screen.getByRole('SearchCart')).toBeDefined()
  })

  test('Should fail render InputIcon component', () => {
    render(<p>Fails</p>)
    expect(screen.queryByRole('SearchCart')).not.toBeInTheDocument()
  })

  test('should render adaptable InputIcon component', () => {
    component(400)
    expect(screen.getByRole('SearchCart')).toBeDefined()
  })

  test('should write to InputIcon', () => {
    component()
    const inputSearch = screen.getByTitle('titleSearch')
    fireEvent.change(inputSearch, {target: {value: 'pollo'}})
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  test('InputIcon should be clickable', () => {
    component()
    fireEvent.click(screen.getByRole('SearchCart'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  test('InputIcon should be focusable', () => {
    component()
    fireEvent.focus(screen.getByTitle('titleSearch'))
    expect(mockOnFocus).toHaveBeenCalledTimes(1)
  })

  test('should be detected when focus is removed', () => {
    component()
    fireEvent.blur(screen.getByTitle('titleSearch'))
    expect(mockOnBlur).toHaveBeenCalledTimes(1)
  })
})