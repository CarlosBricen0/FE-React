import { fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { PromiseBrand } from './PromiseBrand'
import { dataTopFooter } from '../../../__mocks__/footer'

const component = (width = 1280) => {
  return render(
    <ResponsiveContext.Provider value={{ width }}>
      <PromiseBrand background='#ffffff' data={dataTopFooter}/>
    </ResponsiveContext.Provider>
  )
}

describe('<PromiseBrand data={data} background="#ffffff" /> Desktop', () => {
  
  test('should render topfooter info when data exist', () => {
    component()
    expect(screen.getAllByText('Centro de ayuda')[0]).toBeInTheDocument()
  })

  test('should render an anchor with the correct href attribute', () => {
    component()
    const link = screen.getAllByRole('link')[0]
    fireEvent.click(link)
    expect(link).toHaveAttribute('href', 'https://centrodeayuda.unimarc.cl/hc/es-419')
  })

})

describe('<PromiseBrand data={data} background="#ffffff" /> Mobile', () => {

  test('should render PromiseBrand components in mobile', () => {
    component(450)
    expect(screen.getAllByText('Centro de ayuda')[0]).toBeInTheDocument()
  })

})