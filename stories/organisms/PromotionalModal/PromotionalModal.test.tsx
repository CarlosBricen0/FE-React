import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { PromotionalModal, PromotionalModalProps } from './PromotionalModal'

const imageSrc = 'https://custom.image/img.jpg'

describe('PromotionalModal', () => {

  const component = (props?: Partial<PromotionalModalProps>, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <PromotionalModal 
          imageSrc={imageSrc}
          open={true}
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getImage = () => {return screen.getByRole('img')}
  const getLink = () => {return screen.getByRole('link')}

  test('should image be visible', () => {
    component()
    expect(getImage()).toBeVisible()
  })

  test('should image have src', () => {
    component()
    expect(getImage()).toHaveAttribute('src', imageSrc)
  })

  test('should link have redirect url', () => {
    const redirectTo = 'https://www.google.com'
    component({redirectTo})
    expect(getLink()).toBeVisible()
    expect(getLink()).toHaveAttribute('href', redirectTo)
  })
})