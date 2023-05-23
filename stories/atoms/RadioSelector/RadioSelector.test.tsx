import { fireEvent, render, screen } from '@testing-library/react'
import { RadioSelector } from './RadioSelector'

describe('<RadioSelector checked?={boolean} disabled?={boolean} value?={string} onClick?={() => void} onChange?={() => void} />', () => {

  const mockClick = jest.fn()

  test('should render RadioSelector when DOM loads', () => {
    render(<RadioSelector />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  test('should render RadioSelector disabled when have disabled prop in true', () => {
    render(<RadioSelector disabled={true} />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  test('should render RadioSelector checked when have checked prop in true', () => {
    render(<RadioSelector checked={true} />)
    expect(screen.getByRole('radio')).toHaveAttribute('checked')
  })

  test('should render RadioSelector value when a value is passed', () => {
    render(<RadioSelector value='radio render' />)
    expect(screen.getByRole('radio')).toHaveAttribute('value', 'radio render')
  })

  test('should click on RadioSelector and at least execute onClick one time', () => {
    render(<RadioSelector onClick={mockClick} />)
    fireEvent.click(screen.getByRole('radio'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

})

