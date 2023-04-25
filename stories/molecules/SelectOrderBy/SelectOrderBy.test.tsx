import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SelectOrderBy } from './SelectOrderBy'
import { act } from 'react-dom/test-utils'

describe('<SelectOrderBy >', () => {
  const component = () => {
    render(
      <SelectOrderBy />
    )
  }

  test('should render correctly', () => {
    component()
    expect(screen.getByText('Ordenar por')).toBeInTheDocument()
  })

  test('should show options correctly', () => {
    component()
    const clickIcon = screen.getByRole('DropDownCloseV2')
    act(() => { fireEvent.click(clickIcon)})
    expect(screen.getByRole('DropDownOpenV2')).toBeInTheDocument()
  })

  test('should selected options correctly', () => {
    component()
    const clickIcon = screen.getByRole('DropDownCloseV2')
    const clickItem = screen.getByText('De la A la Z')
    act(() => {
      fireEvent.click(clickIcon)
      fireEvent.click(clickItem)
    })
    expect(screen.getAllByText('De la A la Z')).toHaveLength(2)
  })

  test('should show closed outside click correctly', () => {
    component()
    const clickIcon = screen.getByRole('DropDownCloseV2')
    act(() => {fireEvent.click(clickIcon)})
    expect(screen.getByRole('DropDownOpenV2')).toBeInTheDocument()
    userEvent.click(document.body)
    expect(screen.getByRole('DropDownCloseV2')).toBeInTheDocument()
  })
})