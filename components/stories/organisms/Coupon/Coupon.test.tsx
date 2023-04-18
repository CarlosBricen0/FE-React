import { fireEvent, render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { Coupon, CouponProps } from './Coupon'

describe('Coupon', () => {

  const defaultProps = {
    badgeText: 'solo tienda',
    description:'Todas las leches Colun',
    subtitle:'Antes: $990 (Precio ref: $1.990)',
    title:'+10% dcto adicional'
  }

  const component = (props?: CouponProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <Coupon {...defaultProps} {...props}/>
      </ResponsiveContext.Provider>
    )
  }

  const getActivateButton = () => {return screen.getByText('Activar')}
  const getActivatedButton = () => {return screen.getByText('Activado')}
  const getBackbone = () => {return screen.getAllByText('Loading...')}
  const getBadge = () => {return screen.getByText('solo tienda')}
  const getLoadingButton = () => {return document.querySelectorAll('button[disabled]')}
  const getUsedButton = () => {return screen.getByText('Utilizado')}
  const getDescription = () => {return screen.getByText('Todas las leches Colun')}
  const getSubtitle = () => {return screen.getByText('Antes: $990 (Precio ref: $1.990)')}
  const getTitle = () => {return screen.getByText('+10% dcto adicional')}

  test('should activate button be visible', () => {
    component()
    expect(getActivateButton()).toBeVisible()
  })

  test('should activated button be visible', () => {
    component({ ...defaultProps, status: 'active' })
    expect(getActivatedButton()).toBeVisible()
  })

  test('should badge be visible', () => {
    component()
    expect(getBadge()).toBeVisible()
  })

  test('should description be visible', () => {
    component()
    expect(getDescription()).toBeVisible()
  })

  test('should disabled button be visible', () => {
    component({ ...defaultProps, disabled: true })
    expect(getLoadingButton()).toHaveLength(1)
  })

  test('should loading button be visible', () => {
    component({ ...defaultProps, loading: true })
    expect(getLoadingButton()).toHaveLength(1)
  })

  test('should title be visible', () => {
    component()
    expect(getSubtitle()).toBeVisible()
  })

  test('should title be visible', () => {
    component()
    expect(getTitle()).toBeVisible()
  })

  test('should used button be visible', () => {
    component({ ...defaultProps, status: 'used' })
    expect(getUsedButton()).toBeVisible()
  })

  test('should coupon loader be visible', () => {
    component({ ...defaultProps, isFetching: true })
    expect(getBackbone()).toHaveLength(8)
  })

  test('should coupon click event', () => {
    const onClickMock = jest.fn()
    component({ ...defaultProps, onClick: onClickMock })
    const button = getActivateButton()
    fireEvent.click(button)
    expect(onClickMock).toBeCalled()
  })
})