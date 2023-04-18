import {
  fireEvent,
  render,
  waitFor,
  screen
} from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { LocalProductsBanner, LocalProductsBannerProps } from './LocalProductsBanner'

const mockClick = jest.fn()
const defaultProps : LocalProductsBannerProps = {
  backgroundColor: '#FFF4E5',
  buttonLabel: 'Ver productos',
  description: 'En Unimarc, apoyamos a todas y a todos los emprendedores de Chile.',
  imagesSrcs: [
    'https://picsum.photos/210',
    'https://picsum.photos/211',
    'https://picsum.photos/210/440',
    'https://picsum.photos/212',
    'https://picsum.photos/213'
  ],
  title: 'Pymes 100% chilenas',
  onClick: mockClick
}

describe('LocalProductsBanner', () => {

  const component = (props?: LocalProductsBannerProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <LocalProductsBanner
          {...defaultProps}
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getImages = () => {return screen.getAllByRole('img')}
  const getButton = () => {return screen.getByRole('button')}
  const getTitle = () => {return screen.getByRole('heading')}
  const getSubTitle = () => {return screen.queryByText(defaultProps.description)}

  const commonChecks = (render : typeof component = component) => {
    beforeEach(() => {
      jest.resetModules()
    })

    test('should title be visible', () => {
      render()
      expect(getTitle()).toBeVisible()
    })

    test('should subtitle be visible', () => {
      render()
      expect(getSubTitle()).toBeVisible()
    })

    test('should button be visible', () => {
      render()
      expect(getButton()).toBeVisible()
    })

    test('should be call function when we click on button', async () => {
      render()
      await waitFor(() => {return fireEvent.click(getButton())})
      expect(mockClick).toBeCalled()
    })

    test('should images be visible', () => {
      render()
      getImages().forEach((image, index) => {
        expect(image).toBeVisible()
        expect(image).toHaveAttribute('src', defaultProps.imagesSrcs[index])
      })
    })

    test('should have all the images', ()=> {
      render()
      expect(getImages().length).toBe(defaultProps.imagesSrcs.length)
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