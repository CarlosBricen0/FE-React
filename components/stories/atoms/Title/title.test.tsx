import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title component', () => {

  test('should basic render component', () => {
    render(<Title>Prueba title</Title>)
    expect(screen.getByText(/prueba title/i)).toBeInTheDocument()
  })

  test('should render custom heading level', () => {
    const { container } = render(<Title headingLevel='h6'>Prueba title</Title>)
    expect(container.querySelector('h6')).toBeInTheDocument()
  })

  test('should render customClassName', () => {
    const { container } = render(<Title customClassName='test'>Prueba title</Title>)
    expect(container.querySelector('h1').className).toEqual('test')
  })

  test('should render --color-base-black token #282828', () => {
    const { container } = render(<Title color='#282828'>Prueba title</Title>)
    expect(container.querySelector('h1').style.color).toEqual('rgb(40, 40, 40)')
  })

  test('should render a custom font size', () => {
    const { container } = render(<Title customFontSize='16px'>Prueba title</Title>)
    expect(container.querySelector('h1').style.fontSize).toEqual('16px')
  })
  
  test('should render children', () => {
    const { container } = render(<Title><span>Prueba title</span></Title>)
    expect(container.querySelector('span')).toBeInTheDocument()
  })
})