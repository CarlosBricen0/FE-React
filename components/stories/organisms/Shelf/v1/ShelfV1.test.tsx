import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { product } from '../../../../__mocks__/Product'
import { ShelfV1 } from './ShelfV1'

describe('<Shelf title={producto} price={60998} isMobile={true} />', () => {
  const component = ({
    isMobile = false,
    isPromotion = false,
    offer = '20%', 
    ppum = '(2.990 x Kg)', 
    price = 7690, 
    typePromotion = 2,
    value = 1400
  }) => {
    return render(
      <ResponsiveContext.Provider value={{ width: value }}>
        <ShelfV1
          altText='CARNE MOLIDA CORRIENTE 1.4 Kg.'
          brand={product?.brand}
          format={product?.format}
          img={product?.images[0]}
          inOffer={product?.sellers[0]?.inOffer}            
          isMobile={isMobile}
          isPromotion={isPromotion}
          key={product?.itemId}
          likeListButtons={false}
          listPrice={product?.sellers[0]?.listPrice}
          offer={offer}
          ppum={`(${ppum})`}
          ppumListPrice={`(${product?.sellers[0]?.ppumListPrice})`}
          price={price}
          title={product?.name}
          typePromotion={typePromotion}
        />
      </ResponsiveContext.Provider>
    )
  }
  test('should render Shelf component', () => {
    component({})
    expect(screen.getByAltText('CARNE MOLIDA CORRIENTE 1.4 Kg.')).toBeDefined()
  })

  test('should render mobile Shelf component', () => {
    component({value:500})
    expect(screen.getByAltText('CARNE MOLIDA CORRIENTE 1.4 Kg.')).toBeDefined()
  })

  test('should render brand Shelf component', () => {
    component({})
    expect(screen.getByText('elaboracion propia')).toBeInTheDocument()
  })

  test('should render price with CLP format currency', () => {
    component({})
    expect(screen.getByText('$7.690')).toBeInTheDocument()
  })

  test('should render promotion porcentual, price with CLP format currency', () => {
    component({isPromotion: true})

    expect(screen.getByText('$7.690')).toBeInTheDocument()
    expect(screen.getByText('20%')).toBeInTheDocument()
  })

  test('should render type promotion Nx$, price with CLP format currency, no show chipOffer', () => {
    component({offer: '3 x', isPromotion: true, typePromotion: 4})
    
    expect(screen.getByText('$7.690')).toBeInTheDocument()
    expect(screen.getByText('3 x')).toBeInTheDocument()
  })

  test('should render type promotion  Nxn, price with CLP format currency, show chipOffer', () => {
    component({offer: '3 x 2', isPromotion: true, price: 7691, typePromotion: 3})

    expect(screen.getByText('$7.691')).toBeInTheDocument()
    expect(screen.getByText('3 x 2')).toBeInTheDocument()
  })
})