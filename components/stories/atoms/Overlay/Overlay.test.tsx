import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { Overlay } from './Overlay'

const mockClick = jest.fn()

describe('Overlay', () => {
  const component = (value = 1400) => {
    return render (
      <ResponsiveContext.Provider value={{ width: value }} >
        <Overlay onClick={mockClick} />
      </ResponsiveContext.Provider>
    )
  }

  const commonChecks = (render: typeof component = component) => {

    test('should render Overlay', async () => {
      const { container } = render()
      expect(container.querySelector('div')).toHaveAttribute('style')
    })

    test('should call onClick', async () => {
      const { container } = render()
      await waitFor(() => { return fireEvent.click(container.querySelector('div')) })
      expect(mockClick).toBeCalled()
    })

  }

  describe('should render Overlay on BigScreen', () => {
    const renderBigScreen: typeof component = () => {return component(1400)}
    commonChecks(renderBigScreen)
  })

  describe('should render Overlay on SmallScreen', () => {
    const renderSmallScreen: typeof component = () => {return component(475)}
    commonChecks(renderSmallScreen)
  })

})