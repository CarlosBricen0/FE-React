import { render, screen } from '@testing-library/react'
import { ValidationText, ValidationTextProps } from './ValidationText'

describe('ValidationText', () => {
  const component = (props: Partial<ValidationTextProps>) => {
    render(
      <ValidationText {...props} />
    )
  }

  const getValidationText = () => { return screen.getByText('Mobile: +569 1234 1234') }
  const getDotIcon = () => { return screen.queryByRole('Dot') }

  test('should render correctly without any props', () => {
    component({})
  })

  test('should render correctly', () => {
    const props: ValidationTextProps = {
      color: 'green',
      fontSize: 'md',
      gap: 8,
      iconName: 'Dot',
      iconSize: 8,
      text: 'Mobile: +569 1234 1234'
    }
    component(props)

    expect(getValidationText()).toBeInTheDocument()
    expect(getDotIcon()).toBeInTheDocument()
  })
})
