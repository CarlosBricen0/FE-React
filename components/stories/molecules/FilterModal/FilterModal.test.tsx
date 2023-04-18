import { render, screen } from '@testing-library/react'
import { FilterModal, FilterModalProps } from './FilterModal'

const filterModalProps: FilterModalProps = {
  title: 'titleTest',
  buttonName: 'buttonName'
}

describe('FilterModal', () => {
  const component = (props = filterModalProps) => {
    return render(
      <FilterModal {...props}><p>paragraph</p></FilterModal>
    )
  }

  test('should render test & button name labels', () => {
    component()
    expect(screen.queryByText('titleTest')).toBeInTheDocument()
    expect(screen.queryByText('buttonName')).toBeInTheDocument()
  })

  test('should render children', () => {
    component()
    expect(screen.queryByText('paragraph')).toBeInTheDocument()
  })
})