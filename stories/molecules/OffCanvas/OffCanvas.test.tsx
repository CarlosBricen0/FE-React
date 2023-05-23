import { render, screen } from '@testing-library/react'
import { OffCanvas } from './OffCanvas'

describe('OffCanvas component', () => {

  const component = () => {
    return render(
      <OffCanvas
        direction='right'
        footerComponent={<div style={{ lineHeight: '26px' }}>Yo soy el Footer del <strong>OffCanvas</strong> y también soy un <strong>children, mi altura por defecto es de 165px</strong></div>}
        isOpen={true}
      >
        <div style={{ lineHeight: '26px' }}>Hola mundo esto es un div, soy enviado como <strong>children</strong> hacia el contenido del offCanvas</div>,
      </OffCanvas>
    )
  }
  
  test('should render OffCanvas', () => {
    component()
    const getHeader = screen.getByText('Header')
    expect(getHeader).toBeDefined()
  })

  test('should render the children when render the component', () => {
    component()
    const getChildren = screen.getByText(/hola mundo/i)
    expect(getChildren).toBeDefined()
  })

  test('should render the footers offCanvas when render the component', () => {
    component()
    const getFooter = screen.getByText(/Yo soy el Footer/i)
    expect(getFooter).toBeDefined()
  })

})
