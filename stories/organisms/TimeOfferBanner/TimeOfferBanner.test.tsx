import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { TimeOfferBanner, TimeOfferBannerProps } from './TimeOfferBanner'

const imgSrcDesktop = 'https://custom.image/img.jpg'
const imgSrcMobile = 'https://custom.image/img.jpg'
const defaultProps : TimeOfferBannerProps = {
  endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
  href: '/coupons',
  startDate: new Date(Date.now() - 15 * 1000),
  imgSrcDesktop,
  imgSrcMobile
}  

describe('TimeOfferBanner', () => {

  const component = (props?: TimeOfferBannerProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <TimeOfferBanner 
          {...defaultProps}
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getImage = () => {return screen.getByRole('img')}
  const queryImage = () => {return screen.queryByRole('img')}
  const getLink = () => {return screen.getByRole('link')}

  const commonChecks = (render : typeof component = component) => {
    test('should image be visible', () => {
      render()
      expect(getImage()).toBeVisible()
      expect(getImage()).toHaveAttribute('src', imgSrcDesktop)
    })

    test('should link have href', () => {
      render()
      expect(getLink()).toHaveAttribute('href', defaultProps.href)
    })

    test('should be not visible and unmounted', () => {
      render({ 
        ...defaultProps, 
        endDate: new Date(Date.now() - 2 * 60 * 60 * 1000) 
      })
      expect(queryImage()).toBeNull()
    })
  }

  describe('BigScreen', () => {
    const renderBigScreen : typeof component = (props) => {return component(props, 1366)}
    
    commonChecks(renderBigScreen)
  })
  
  describe('SmallScreen', () => {
    const renderSmallScreen : typeof component = (props) => {return component(props, 475)}

    commonChecks(renderSmallScreen)
  })
})